<template>
  <div class="home">
    <TopBar msg="Enviroments"/>
    <Enviroments/>
  </div>
</template>

<script>
// @ is an alias to /src
import TopBar from '@/components/TopBar.vue'
import Enviroments from '@/components/Enviroments.vue'

export default {
  name: 'Home',
  components: {
    TopBar,
    Enviroments
  }
}
</script>

<style scoped>
  .home {
    display: grid;
    grid-template-rows: 6vh 1fr;
  }
</style>
