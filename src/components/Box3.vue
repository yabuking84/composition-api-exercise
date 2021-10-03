<template lang="">
  <main>
    <h1>Box3</h1> 
    <br>
    <button type="button" @click="next">next</button>
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
  background-color: yellow;
}
main {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

main h1 {
  color: white;
  background-color: #000;
  padding: 10px;  
}
  
</style>