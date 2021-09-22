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
      const counter = useCounter();
      const dec = ()=>{
          counter.methods.decrease();
      }
      const inc = ()=>{
          counter.methods.increase();
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
