<template lang="">
  <main>
    <h1>Box1</h1> 
    <br>
    <div>
      <button type="button" @click="next">next</button>
    </div>
  </main>
</template>
<script>
export default {
  setup(_, context){
    const next = ()=>{
      context.emit('next')
    }
    return {
      next
    }
  }
}
</script>
<style scoped>
main {
  background-color: green;
}
main {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
}

main h1 {
  color: white;
  background-color: #000;
  padding: 10px;    
}
  
</style>