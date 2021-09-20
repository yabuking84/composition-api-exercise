<template>
    <div>
        <button @click="dec">-</button>
        <button @click="inc">+</button>
    </div>
</template>

<script>
import useCounter from "@/hooks/useCounter.js"

export default {
  setup() {
      const {methods:methodsCounter } = useCounter;

      const dec = ()=>{
          useCounter.methods.decrease();
      }
      const inc = ()=>{
          useCounter.methods.increase();
      }
      return {
          dec,
          inc
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
button {
    margin: 20px;
    font-size: 50px;
}
</style>
