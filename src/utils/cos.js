import COS from "cos-js-sdk-v5"
const aaa = 123
const Bucket = 'ylqp-1302846440'  /* 存储桶 */
const Region = 'ap-beijing'  /* 存储桶所在地域，必须字段 */
// SecretId 和 SecretKey请登录 https://console.cloud.tencent.com/cam/capi 进行查看和管理
const cos = new COS({
  SecretId: 'AKIDrVt0rSmpb6KHxMULvFBqELCm57tObXDc',
  SecretKey: '91c3E8k7C1YppY0C6j5AzYqqa2D7l8E3',
})

const getFileList = () => {
  return new Promise((resolve, reject) => {
    cos.getBucket({
      Bucket, /* 必须 */
      Region, /* 存储桶所在地域，必须字段 */
    }, (err, data) => {
      if (err) {
        console.log(err)
        reject(err)
      }
      resolve(data)
    })
  })
}

// files为input的value
const uploadFiles = (files, successCallback) => {
  const uploadFileList = [...files].map((file) => {
    // webkitRelativePath 文件的路径, 不可靠
    const path = file.webkitRelativePath || file.name
    return {
      Bucket,
      Region,
      Key: path,
      Body: file,
    }
  })
  cos.uploadFiles({
    files: uploadFileList,
    SliceSize: 1024 * 1024 * 10,    /* 设置大于10MB采用分块上传 */
    onProgress: function () {
      console.log('上传中')
    },
    onFileFinish: () => {
      console.log('上传完毕')
    }
  }, (err, data) => {
    if (err) {
      console.log('上传失败')
      return
    }
    successCallback && successCallback()
  })
}

export default {
  getFileList,
  uploadFiles
}

