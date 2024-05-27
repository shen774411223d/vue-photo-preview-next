# vue3-photo-preview

vue3 的图片预览组件

#### 新增参数：`hideOperate` `hideCounter` `hideIntro`

```typescript
// 隐藏顶部右侧操作栏
type hideOperate = boolean;
// 隐藏顶部左侧计数栏
type hideCounter = boolean;
// 隐藏底部图片信息
type hideIntro = boolean;
```

#### TODO:

- [ ] `hideOperate`和`hideCounter`参数没有和`imgItem`的参数结合，应向底部图片信息一样 做到每一张图片都能控制展示隐藏
- [x] 本地`demo`运行报错，应切换到`vite+vue3`
- [ ] `scss => less`
- [x] 添加vite开发服务，`/site`文件夹启动后 可以在`/site/App.vue`中使用插件 快速调试

### 特点

1. 基于 typescript
2. 支持桌面端和移动端
3. 支持左右切换导航、上/下滑关闭、双击放大/缩小、双指放大/缩小、键盘导航/关闭、点击切换控件、翻转、下载
4. 图片尺寸自适应
5. 图片切换、打开、关闭动画

Demo: [https://namewjp.github.io/vue3-photo-preview/](https://namewjp.github.io/vue3-photo-preview/)

## 开始使用

### 安装

```
npm install -S vue3-photo-preview
```

### 全局注册

```js
import vue3PhotoPreview from 'vue3-photo-preview';
import 'vue3-photo-preview/dist/index.css';

app.use(vue3PhotoPreview);
```

### 使用

```html
<template>
  <photo-provider>
    <photo-consumer v-for="src in imgList" :intro="src" :key="src" :src="src">
      <img :src="src" class="view-box" />
    </photo-consumer>
  </photo-provider>
</template>
```

## API

### PhotoProvider

#### 属性

| 名称                     | 类型                               | 描述                                 | 默认值 | 必填 |
| :----------------------- | :--------------------------------- | :----------------------------------- | :----- | :--- |
| photo-closable           | boolean                            | 图片点击是否关闭                     | false  | 否   |
| mask-closable            | boolean                            | 背景点击是否关闭                     | true   | 否   |
| should-transition        | boolean                            | 箭头切换是否需要过渡                 | false  | 否   |
| default-backdrop-opacity | number                             | 默认背景透明度                       | 1      | 否   |
| loop                     | boolean                            | 是否循环显示预览图                   | false  | 否   |
| download-method          | (item: ItemType) => void&#124;null | 下载图片方法，不传使用内置的下载方法 | null   | 否   |

#### 事件

| 名称          | 描述             | 参数                      |
| :------------ | :--------------- | :------------------------ |
| indexChange   | 图片切换回调     | { index, items, visible } |
| visibleChange | 图片显隐切换回调 | { index, items, visible } |

### PhotoConsumer

#### 属性

| 名称          | 类型   | 描述         | 默认值   | 必填 |
| :------------ | :----- | :----------- | :------- | :--- |
| src           | string | 图片地址     | -        | 是   |
| intro         | string | 图片介绍     | -        | 否   |
| download-name | string | 图片下载名称 | 图片名称 | 否   |

### PhotoSlider

#### 属性

| 名称                     | 类型                               | 描述                                 | 默认值 | 必填 |
| :----------------------- | :--------------------------------- | :----------------------------------- | :----- | :--- |
| items                    | ItemType[]                         | 图片列表                             | -      | 是   |
| index                    | number                             | 图片当前索引                         | -      | 是   |
| visible                  | number                             | 是否显示模态框                       | -      | 是   |
| should-transition        | boolean                            | 箭头切换是否需要过渡                 | false  | 否   |
| toggle-overlay           | boolean                            | 是否切换显隐覆盖物                   | true   | 否   |
| default-backdrop-opacity | number                             | 默认背景透明度                       | 1      | 否   |
| loop                     | boolean                            | 是否循环显示预览图                   | false  | 否   |
| download-method          | (item: ItemType) => void&#124;null | 下载图片方法，不传使用内置的下载方法 | null   | 否   |

#### 事件

| 名称        | 描述               | 参数                       |
| :---------- | :----------------- | :------------------------- |
| clickPhoto  | 点击预览图片的回调 | MouseEvent&#124;TouchEvent |
| clickMask   | 点击预览背景的回调 | MouseEvent&#124;TouchEvent |
| changeIndex | 图片下标改变的回调 | newIndex                   |
| closeModal  | 关闭预览的回调     | -                          |

## 本地开发调试

1. 在根目录依次执行

```bash
# 安装依赖
npm ci

# 实时编译代码
npm run dev
```

2. 进入 example 目录依次执行

```bash
# 安装依赖
npm ci

# 实时编译代码
npm run dev
```

此时，修改 **根目录** 或者 **example 目录** 的任何代码都会导致项目重新打包构建。

参考：[https://github.com/MinJieLiu/react-photo-view](https://github.com/MinJieLiu/react-photo-view)
