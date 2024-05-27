<script setup>
import { ref } from 'vue'
import { PhotoProvider, PhotoConsumer } from 'vue-photo-preview-next'
import imgSrc from '/apple-touch-icon.png'

const imgList = ref([
  { src: imgSrc, id: 1, intro: '111' },
  { src: imgSrc, id: 2, intro: '222' },
  { src: imgSrc, id: 3, intro: '333' },
])
</script>
<template>
  <div>
    <h1>hello vite!</h1>
    <div>
      <photo-provider>
        <photo-consumer
          v-for="item in imgList"
          :intro="item.intro"
          :key="item.id"
          :src="item.src"
          style="display: block"
        >
          <div class="photo-item">
            <img :src="imgSrc" />
          </div>
        </photo-consumer>
      </photo-provider>
    </div>
  </div>
</template>
<style scoped>
.photo-item {
  width: 100%;
  margin: 24px 0;

  img {
    width: 50px;
    height: 50px;
  }
}
</style>
