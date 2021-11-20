<template>
  <div class="hello">
      <h1>state1 = {{ state1.count }}</h1>
      <h1>state1= {{ state1.bonus.points }}</h1>
      <h1>count1= {{ count1 }}</h1>
      <br>
      <h1>state2 = {{ state2.count }}</h1>
      <h1>state2= {{ state2.bonus.points }}</h1>
      <br>
      <h1>hoho= {{ hoho }}</h1>
      stateArr1
      <pre>{{counter.stateArr1.arrs}}</pre>
      <br>
      stateArr2
      <pre>{{stateArr2.arrs}}</pre>
      <br>
      Vuex.data1 = {{counter.data1}}
      <br>
      <button type="button" @click="changeButton">{{button}}</button>
      <button type="button" @click="changeButton">{{button2}}</button>

  </div>
</template>

<script>
import {ref,toRefs,computed, reactive} from 'vue'
import useCounter from "@/hooks/useCounter.js"
import {store} from '@/store'
export default {
  setup() {
      const counter = useCounter(); 

      const hoho = computed(()=>{
        return counter.state2.value.count;
      })

      console.log("counter.state2.value.count = ",hoho.value);

      const data1 = counter.data1


      const state = reactive({
        button: 'ohllalala',
        button2: 'mmmmm'
      }) 

      const changeButton = ()=>{
        state.button2 = state.button
        state.button = 'asdsadsd'
      }

      return {
        counter,
        stateArr2: counter.stateArr2,
        state1: counter.state1,
        state2: counter.state2,
        count1: counter.state1.count,
        hoho,
        data1,
        ...toRefs(state),
        changeButton,
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1{
  font-size: 20px;
  margin: 10px;
}
</style>
