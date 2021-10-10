<template>
<div>
  <h3>Base App</h3>
  <logo style="width:100px"/>
  <img :src="require('./logo.png')" alt="logo" />
  <Content />
  <!-- hello11111111111
  <Hello /> -->
</div>
</template>

<script>
import Content from "./components/Content";
import logo from './logo.svg'
// import Hello from "@v2p/Hello"
export default {
  components: {
    Content,
    logo,
    // Hello
  },
  mounted(){
        this.$emit('handleClick')
    console.log('xx')
  }
};
</script>

<style scoped>
img {
  width: 200px;
}

h1 {
  font-family: Arial, Helvetica, sans-serif;
}
</style>
