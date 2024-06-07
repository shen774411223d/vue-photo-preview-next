<script setup>
import { ref, onMounted, computed } from 'vue'
import { PhotoProvider, PhotoConsumer } from 'vue-photo-preview-next'

const svgs = import.meta.glob('/public/*.svg', { eager: true })

const icons = ref([])

const generatePhotoProps = computed(() => (item) => {
  return {
    src: item.src,
    intro: item.intro,
    hideCounter: item.hideCounter,
    hideOperate: item.hideOperate,
  }
})

onMounted(() => {
  Object.entries(svgs).forEach(([key, mod], index) => {
    icons.value.push({
      src: mod.default,
      intro: index % 2 === 0 ? null : key,
      id: index,
      hideOperate: index % 2 === 0,
      hideCounter: index % 2 === 0,
    })
  })
  console.log('log', icons)
})
</script>
<template>
  <div>
    <h1>test & debug</h1>
    <div class="imgs-wrap">
      <photo-provider loop :default-backdrop-opacity="0.5" hide-operate hide-counter hide-intro>
        <photo-consumer v-for="item in icons" :key="item.id" v-bind="generatePhotoProps(item)" style="display: block">
          <div class="photo-item">
            <img :src="item.src" />
          </div>
        </photo-consumer>
      </photo-provider>
    </div>
  </div>
</template>
<style scoped>
.imgs-wrap {
  display: flex;
  align-items: center;
}

.photo-item {
  width: 100%;
  margin: 0 24px;

  img {
    width: 50px;
    height: 50px;
  }
}
</style>
