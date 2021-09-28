<template>
    <div>
        <button @click="dec">-</button>
        <button @click="inc">+</button>
            <br><br>
        <button @click="change">change</button>
            <br>
        <button @click="change2">change2</button>
    </div>
</template>

<script>
import useCounter from "@/hooks/useCounter.js"
import { onMounted,toRefs } from 'vue';

export default {
  props:{
    hey: {
      type: String
    }
  },
  setup(props) {
      const counter = useCounter();
      const dec = ()=>{
          counter.methods.decrease();
      }
      const inc = ()=>{
          counter.methods.increase();
      }

      onMounted(()=>{
        console.log("props = ",props);
        console.log("props.hey = ",props.hey);
        const yo = toRefs(props);
        console.log("yo = ",yo.hey.value);
      })

      const change = ()=>{
        //   console.log("counter.state1",counter.state1);
        //   console.log("counter.state2",counter.state2);
        //   console.log(`xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`);
        //   console.log("counter.state1.count = ",counter.state1.count);
        //   console.log("counter.state2.bonus = ",counter.state1.bonus);
        //   console.log(`xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`);
        //   console.log("counter.state2 = ",counter.state2);
        //   console.log("counter.state2.value.bonus = ",counter.state2.value.bonus);
        //   console.log("counter.state2.value.bonus.value.points = ",counter.state2);

          console.log("counter.state1.bonus = ",counter.state1.bonus);
          console.log("counter.state2.value.bonus = ",counter.state2.value.bonus);
          console.log(`xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`);
          console.log("counter.state1.bonus = ",counter.state1.bonus.points);
          console.log("counter.state2.value.bonus = ",counter.state2.value.bonus.points);


      };

      const change2 = ()=>{
          counter.state1.bonus.points = 55555;
          counter.state2.value.bonus.points = 33333;
      };

      return {
          dec,
          inc,
          change,
          change2
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
button {
    margin: 20px 50px;
    padding: 5px 10px;
    font-size: 30px;
}
</style>
