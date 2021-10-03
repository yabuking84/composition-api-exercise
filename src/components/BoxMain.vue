<template>

<!-- 
  <button @click="data.crntPage=0">restart</button>
  <br>
  <button @click="prev">prev</button>
  <button @click="next">next</button>
  <br> -->
  <!-- <div class="slide-container">
      <component :is="'Box1'"></component>
      <component :is="'Box2'"></component>
  </div>
  <br>
  <br> -->
    <!-- <template v-slot:h1>
      extra111
    </template>
    <template #h3="slotProps">
      extra222 {{slotProps.slideTo}}
    </template> -->

    
  <Slide :to="data.slideTo" @prev="prev" @next="next">
    <keep-alive>
      <component :is="data.pages[data.crntPage]" @prev="prev" @next="next"></component>
    </keep-alive>
  </Slide>
</template>

<script>
import {reactive} from 'vue';
// import Home from './components/Home.vue'
// import Adder from './components/Adder.vue'
import Slide from '@/components/Slide.vue'
import Box1 from '@/components/Box1.vue'
import Box2 from '@/components/Box2.vue'
import Box3 from '@/components/Box3.vue'


export default {
  name: 'BoxMain',
  components: {
    // Home,
    // Adder,
    Box1,
    Box2,
    Box3,    
    Slide,
  },
  setup(){
    const data = reactive({
      pages: [
        'Box1',
        'Box2',
        'Box3',
      ],
      crntPage: 0,
      slideTo: 'left'
    });
    const prev = ()=>{
      data.slideTo = 'right'
      if(data.crntPage>0)
      data.crntPage--
      else
      data.crntPage = data.pages.length-1
    }
    const next = ()=>{
      data.slideTo = 'left'
      if(data.crntPage<data.pages.length-1)
      data.crntPage++
      else 
      data.crntPage = 0
    }
    return {
      data,
      prev,
      next,
    }
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
  margin-top: 60px;
}
button {
  margin: 10px 20px;
  padding: 20px;
}
.slide-container {
  display: flex;
}

</style>
