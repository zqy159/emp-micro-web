<template>
  <div class="main">
    <h1>Project App11112321321sadsad</h1>
    <App @handleClick="handleClick" />
    <!-- <Content />
    111
    <Button />  -->
  </div>
</template>

<script>
import Content from "@v2b/Content"
import Button from "@v2b/Button"
import App from "@v2b/baseApp"
export default {
  components: {
    // Content: () => import("@v2b/Content"),
    Content,
    Button,
    App
  },
  methods:{
    handleClick(){
      console.log('xxx')
    }
  }
};
</script>

<style scoped lang="scss">
.main {
  img {
    width: 200px;
  }

  h1 {
    font-family: Arial, Helvetica, sans-serif;
    font-size:60px;
    
  }
}
</style>
