<template>
  <div class="hello">
      <h1>count1 = {{ count1 }}</h1>
      <h1>count2 = {{ count2 }}</h1>
      <br>
      <button @click="log">LOG</button>
  </div>
</template>

<script>
import {ref,toRefs} from 'vue'
import useCounter from "@/hooks/useCounter.js"
export default {
  setup() {
      const counter = useCounter(); 

      const log = ()=>{
          console.log("counter.state",counter.state1);
          console.log("counter.state2",counter.state2);
          console.log(`xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`);
          console.log("counter.state.count = ",counter.state1.count);
          console.log("counter.state2.count = ",counter.state2.value.count);

          counter.state1.count = 555;
          counter.state2.value.count = 4444;
      };

      const hey = {
        setup : ()=>{
          console.log('setup')
        }

      };

      hey.setup();

      return {
        log,
        count1: counter.state1,
        count2: counter.state2
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
