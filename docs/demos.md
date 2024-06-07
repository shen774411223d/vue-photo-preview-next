---
hello: world
---

<script setup>
import { ref, onMounted, computed } from 'vue'
import { PhotoProvider, PhotoConsumer } from '../src/index.ts'

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
})
</script>

## demo

<div>
  <h1>test & debug</h1>
  <div :class="$style.imgsWrap">
  <ClientOnly>
      <photo-provider loop :default-backdrop-opacity="0.5">
      <photo-consumer v-for="item in icons" :key="item.id" v-bind="generatePhotoProps(item)" style="display: block">
        <div :class="$style.photoItem">
          <img :src="item.src" />
        </div>
      </photo-consumer>
    </photo-provider>
  </ClientOnly>
  </div>
</div>

<style module>
.imgsWrap {
  display: flex;
  align-items: center;
}

.photoItem {
width: 100%;
margin: 0 24px;
}

.photoItem img {
width: 50px;
height: 50px;
}
</style>
