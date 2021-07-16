## 影子视频直播接入组件

### 版本0.x.x

### 支持*React*，*Vue*项目通过npm引入，原生*Html*通过引入script标签进行实例化调用

#### 参数

| 参数 | 值 |  说明 |
| ------- | ------- | ------- |
|       type  |   string      |必填 字符串 海康：haikang   乐橙：lecheng |
|       url  |   string      |必填 视频播放地址 |
|       container  |   string      |必填  视频容器，内部播放器自适应宽高（按照宽度，等比缩放高度），设置容器宽度即可控制播放器大小|
|       kitToken  |   string      |非必填  仅乐橙需要，如果海康调用，可以不填|


#### 使用方式
第一步：
```
yarn add yz-player-sdk
或
npm install yz-player-sdk
```
第二步：
如需乐橙云，需要引入乐橙云必要文件（乐橙云sdk集成方式及同源策略限制，需将必要文件上传至项目服务器）
将static文件夹直接拷贝至入口文件同层目录下(文件夹名固定为static不可修改为其他名称)
文件地址 https://github.com/xueyy/resources/tree/main

react：
```
import React, { useEffect } from 'react';
import { init } from 'yz-player-sdk';

const Demo = () => {
  useEffect(() => {
    init({
      type: 'haikang', // 必填 字符串 haikang = 海康或 lecheng = 乐橙
      url:'https://open.ys7.com/v3/openlive/G22188122_1_1.m3u8?expire=1625650510&id=332912439701385216&t=4ea00078f065d826c3991f7f4e050eef20d992c265795113e53c46c511222fa3&ev=100', // 必填 视频播放地址
      container: 'myplayer', // 必填 视频容器，内部播放器自适应宽高（按照宽度，等比缩放高度），设置容器宽度即可控制播放器大小
      kitToken:'keycode', // 非必填 仅乐橙需要，如果海康调用，可以不填
    });
  }, []);
  return (<div id="myplayer" style={{ width: '100%', textAlign: 'center' }}></div>)
}

export default Demo
```

vue：

```
<template>
  <div id="app">
    <div id="myplayer" style="{ width: '100%', textAlign: 'center' }"></div>
  </div>
</template>

<script>
import { init } from "yz-player-sdk";
export default {
  name: "App",
  components: {
    HelloWorld,
  },
  mounted: function () {
    init({
      type: "haikang", // 必填 字符串 haikang = 海康或 lecheng = 乐橙
      url: "https://open.ys7.com/v3/openlive/G22188122_1_1.m3u8?expire=1625650510&id=332912439701385216&t=4ea00078f065d826c3991f7f4e050eef20d992c265795113e53c46c511222fa3&ev=100", // 必填 视频播放地址
      container: "myplayer", // 必填 视频容器，内部播放器自适应宽高（按照宽度，等比缩放高度），设置容器宽度即可控制播放器大小
      kitToken: "keycode", // 非必填 仅乐橙需要，如果海康调用，可以不填
    });
  },
};
</script>

```
html:


```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      .container {
        width: "100%";
        text-align: center;
      }
    </style>
  </head>
  <body>
    <div id="myplayer" classname="container"></div>
  </body>
  <script type="module">
    import { init } from "./index.min.js";
    window.onload = function() {
      init({
        type: "lecheng",
        url:
          "https://open.ys7.com/v3/openlive/G22188122_1_1.m3u8?expire=1625650510&id=332912439701385216&t=4ea00078f065d826c3991f7f4e050eef20d992c265795113e53c46c511222fa3&ev=100",
        container: "myplayer",
        kitToken: "123",
      });
    };
  </script>
</html>
```
index.js
```
<sciprt src="https://cdn.jsdelivr.net/gh/xueyy/Player-sdk@master/index.js"></script>
```


海康开发文档
[https://open.ys7.com/doc/zh/]()

乐橙云开发文档
[https://open.imoulife.com/book/zh]()
