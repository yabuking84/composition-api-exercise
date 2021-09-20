<template>
  <div class="hello">
      <h1>{{ toto.count }}</h1>
  </div>
</template>

<script>
import {toRefs} from 'vue'
import useCounter from "@/hooks/useCounter.js"
export default {
  setup() {
      const {state:stateCounter } = useCounter;

      return {
        toto: toRefs(stateCounter),
        stateCounter: stateCounter
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1{
  font-size: 50px;
  margin: 20px;
}
</style>
