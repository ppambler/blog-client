<template>
  <div id="index">
    <p>首页</p>
    <p class="theme">我是主题色</p> 
    <div>
        <el-button>默认按钮</el-button>
        <el-button :plain="true" @click="open4">错误</el-button>
        <el-button type="text" @click="open">点击打开 Message Box</el-button>
    </div>
  </div>
</template>

<script src='./template.js'></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less' src='./template.less'></style>
