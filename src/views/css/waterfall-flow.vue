<template>
  <div class="cantainer">
    <div class="item" v-for="item in 100" :key="item">
      <!-- <img src="" alt=""> -->
      <div :style="`height: ${Math.floor(Math.random()*100) + 50}px; background: #${Math.floor(Math.random()*(2<<23)).toString(16)}`">
        {{item}}
      </div>
      
    </div>
    <!-- <div class="item" v-for="item in 15" :key="item">
      <div :style="`height: ${Math.floor(Math.random()*100) + 50}px; background: #${Math.floor(Math.random()*(2<<23)).toString(16)}`"></div>
    </div>
    <div class="item" v-for="item in 15" :key="item">
      <div :style="`height: ${Math.floor(Math.random()*100) + 50}px; background: #${Math.floor(Math.random()*(2<<23)).toString(16)}`"></div>
    </div>
    <div class="item" v-for="item in 15" :key="item">
      <div :style="`height: ${Math.floor(Math.random()*100) + 50}px; background: #${Math.floor(Math.random()*(2<<23)).toString(16)}`"></div>
    </div> -->
  </div>
</template>

<script>
export default {

}
</script>

<style>
.cantainer {
  column-count: 5;
  column-gap: 0px;
}
.item {
  padding: 1px;
}
.item div{
  opacity: 0.3;
}
.item div * {
  opacity: 3;
}
</style>