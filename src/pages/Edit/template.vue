<template>
  <div id="edit">
    <h1>创建文章</h1>
    <h3>文章标题</h3>
    <el-input ref="titleStr" v-model="title" @input="onInputTitle" maxlength=30></el-input>
    <p class="msg">还可以输入{{30-title.length}}个字，限30个字</p>
    <h3>内容简介</h3>
    <el-input ref="descriptionStr" type="textarea" v-model="description" @input="onInputDescription" :autosize="{ minRows: 2, maxRows: 6}" maxlength=300></el-input>
    <p class="msg">还可以输入{{300-description.length}}个字，限300个字</p>
    <h3>文章内容</h3>
    <el-input ref="contentStr" type="textarea" v-model="content" @input="onInputContent" :autosize="{ minRows: 4, maxRows: 30}" maxlength=6000></el-input>
    <p class="msg">还可以输入{{6000-content.length}}个字，限6000个字</p>
    <p>
      <label>是否展示到首页</label>
      <el-switch v-model="atIndex" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
    </p>
    <el-button @click="onEdit">确定</el-button>
  </div>
</template>

<script src="./template.js"></script>

<style src="./template.less" lang="less"></style>
