<template>

  <CountMain/>
  <BoxMain  v-if="false"/>

</template>

<script>
import BoxMain from '@/components/BoxMain.vue'
import CountMain from '@/components/CountMain.vue'


export default {
  name: 'App',
  components: {
    CountMain,
    BoxMain,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;

  display: flex;
  justify-content: center;
  align-items: center;  
}
</style>
