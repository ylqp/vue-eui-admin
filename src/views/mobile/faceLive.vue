<template>
  <div>
    <canvas id="canvas" height=300 width=200 style="width:200px;margin:auto;"></canvas>
    <video src="" id="srcvideo" autoplay="autoplay" playsinline="playsinline"></video>
    <!-- <div style="text-align: center;margin-top:10px;">
        <button id="startBtn" disabled>开始录制</button>
        <button id="pauseBtn" disabled>暂停录制</button>
        <button id="resumeBtn" disabled>恢复录制</button>
        <button id="stopBtn" disabled>结束录制</button>
    </div> -->
    <div>
      <el-button @click="startFaceLive()">开始检测</el-button>
    </div>
    <div>
      {{tips}}
    </div>
    <div>{{num}}</div>
    <el-button @click="startRec">开始录制</el-button>
    <el-button @click="$router.push('/mobile/camera')">去trtc</el-button>
  </div>
</template>
<script>
var drawArray = [];
var allChunks = [];
var ctx;
var srcvideo;
export default {
  name:'',
  data () {
    return {
      tips: '请准备',
      num: 0
    }
  },
  created() {
    // this.init()
  },
  mounted() {
    try {
      this.init()
      this.initRecorder()
    } catch (error) {
      alert(error)
    }
    
  },
  methods: {
    init () {
      ctx = canvas.getContext('2d');
      ctx.fillStyle = 'white';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      // ctx.fillRect(0, 0, 200, 300);
      let that = this
      navigator.mediaDevices.getUserMedia({
          video: true
      })
      .then(function(mediaStream) {
          // alert(JSON.stringify(mediaStream))
          console.log('111', mediaStream)
          that.mediaStream = mediaStream
          
          // that.playCanvas(srcvideo, ctx)
      })
    },
    startVideo() {
      srcvideo = document.getElementById("srcvideo")
      // console.log(srcvideo)
      srcvideo.srcObject = this.mediaStream;
      // console.log(srcvideo.src)
      srcvideo.play()
      this.playCanvas(srcvideo, ctx)
    },
    playCanvas(srcvideo, ctx) {
        // this.num++
        ctx.drawImage(srcvideo, 0, 0, canvas.width, canvas.height)
        for (var i = 0; i < drawArray.length; i++) {
            ctx.beginPath();
            const xFraction = drawArray[i].x / canvas.width;
            const yFraction = drawArray[i].y / canvas.height;
            const r = 255 * (1 - xFraction);
            const g = 255 * yFraction;
            const b = 255 * xFraction * (1 - yFraction);
            ctx.fillStyle = `rgba(${r|0}, ${g|0}, ${b|0}, 1)`;
            ctx.arc(drawArray[i].x, drawArray[i].y, 10, 0, 2 * Math.PI);
            ctx.fill();
        }
        // window下的方法，执行动画
        requestAnimationFrame(() => {
            this.playCanvas(srcvideo, ctx)
            
        })
    },
    startFaceLive(readyNum=3, videoNum=2) {
      this.startVideo()
      let actionNum = 0
      const allTime = readyNum + 2*videoNum
      let onecFn = () => {
        console.log(this.tips)
        
        if (actionNum < readyNum) {
          this.tips = readyNum - actionNum
        }
        if (actionNum == readyNum){
          console.log(1222222)
          this.tips = '开始录制'
          // 开始录制视频
          this.startRec()
        }
        if (actionNum >= readyNum && actionNum < readyNum + videoNum) {
          this.tips = '请张张最'
        }
        if (actionNum >= readyNum + videoNum && actionNum < allTime) {
          this.tips = "请眨眨眼"
        }
        if (actionNum >= allTime) {
          this.tips = '检测中。。。'
          clearInterval(timer)

          // 结束录制视频
          this.stopRec()
          return
        }
        actionNum++
      }
      let timer = setInterval(onecFn, 1000)
    },
    initRecorder() {
      const format = 'video/webm;codecs=h264'
      const stream = canvas.captureStream(60); // 60 FPS recording
      this.recorder = new MediaRecorder(stream, {
        // mimeType: format
      });
      this.recorder.ondataavailable = e => {
        allChunks.push(
          e.data
        );
      }
    },
    startRec () {
      
      this.recorder.start(10);
    },
    stopRec() {
      console.log(this.recorder)
      this.recorder.stop();
      this.blobDownload()
    },
    blobDownload() {
        const link = document.createElement('a');
        link.style.display = 'none';
        const fullBlob = new Blob(allChunks);
        console.log(fullBlob)
        const downloadUrl = window.URL.createObjectURL(fullBlob);
        console.log(downloadUrl)
        link.href = downloadUrl;
        link.download = 'media - '+'format'+'.mp4';
        document.body.appendChild(link);
        link.click();
        link.remove();
    }
  }
}
</script>
<style scoped>
canvas {
    box-shadow: 0 0 10px gray;
    display: block;
}
video {
  border: 1px solid red;
  width: 200px;
  height: 300px;
}
</style>