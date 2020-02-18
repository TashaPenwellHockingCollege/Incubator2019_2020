<template>
  <div class="top-bar">
    <h2 class="page-title">{{ msg }}</h2>
  </div>
</template>

<script>
export default {
  name: 'TopBar',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .top-bar {
    background-color: #222222;
  }
  .page-title {
    margin: 0;
    padding: 0;
    color: white;
  }
</style>
