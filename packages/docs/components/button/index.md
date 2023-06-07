### Button 按钮
常用操作按钮

#### 基础用法

基础的组件用法

<!-- slot -->
:::demo 使用`color`/`pain`/`round`属性定义 Button 组件的样式。

```vue
<template>
 <div style="margin-bottom:20px;">
  <BroButton color="blue">主要按钮</BroButton>
  <BroButton color="green">绿色按钮</BroButton>
  <BroButton color="gray">灰色按钮</BroButton>
  <BroButton color="yellow">黄色按钮</BroButton>
  <BroButton color="red">红色按钮</BroButton>
 </div>
 <div style="margin-bottom:20px;"
 >
  <BroButton color="blue" plain>朴素按钮</BroButton>
  <BroButton color="green" plain>绿色按钮</BroButton>
  <BroButton color="gray" plain>灰色按钮</BroButton>
  <BroButton color="yellow" plain>黄色按钮</BroButton>
  <BroButton color="red" plain>红色按钮</BroButton>
 </div>
 <!-- <div style="margin-bottom:20px;">
  <BroButton size="small" plain>小按钮</BroButton>
  <BroButton size="medium" plain>中按钮</BroButton>
  <BroButton size="large" plain>大按钮</BroButton>
 </div> -->
 <div style="margin-bottom:20px;">
  <BroButton color="blue" round plain icon="search">搜索按钮</BroButton>
  <BroButton color="green" round plain icon="edit">编辑按钮</BroButton>
  <BroButton color="gray" round plain icon="check">成功按钮</BroButton>
  <BroButton color="yellow" round plain icon="message">提示按钮</BroButton>
  <BroButton color="red" round plain icon="delete">删除按钮</BroButton>
 </div>
 <div style="margin-bottom:20px;">
  <BroButton color="blue" round plain icon="search"></BroButton>
  <BroButton color="green" round plain icon="edit"></BroButton>
  <BroButton color="gray" round plain icon="check"></BroButton>
  <BroButton color="yellow" round plain icon="message"></BroButton>
  <BroButton color="red" round plain icon="delete"></BroButton>
 </div>
</template>
```
