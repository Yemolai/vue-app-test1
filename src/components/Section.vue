<template>
  <div class="Section">
    <h2 class="title">{{title}}</h2>
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'section',
    props: ['title']
  }
</script>
<style>
  .title {
    font-size: 3.75em;
    padding-bottom: 45px;
    position: relative;
    text-align: center;
    font-weight: 600;
    margin: 30px 0 50px;
    color: #383737;
    color: rgb(236, 102, 38);
    text-shadow: rgb(181, 76, 26) 1px 1px, rgb(181, 76, 26) 2px 2px, rgb(181, 76, 26) 3px 3px;
  }
  .Section {
    line-height: 160%;
    margin-top: 0;
    text-align: justify;
  }
</style>