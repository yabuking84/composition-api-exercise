<template>
<div class="slide-container">
  <transition :name="to" >
    <slot></slot>
  </transition>
</div>
  <br>
  <h1>
    <slot name="h1" :slideTo="to" ></slot>
  </h1>
  <h3>
    <slot name="h3" :slideTo="to" ></slot>
  </h3>
</template>

<script>
export default {
  props:{
    to: {
      type: String
    }
  },
  setup(props) {
    console.log(props.to)
  },
}
</script>
<style scoped>
.right-enter-active,
.right-leave-active,
.left-enter-active,
.left-leave-active {
  transition: all 0.3s ease;
}

.right-leave-from,
.left-leave-from {
  transform: translateX(0);
}

.right-enter-from,
.left-leave-to {
  transform: translateX(-100%);
}

.right-leave-to,
.left-enter-from {
  transform: translateX(100%);
}

.right-enter-to,
.left-enter-to {
  transform: translateX(0);
}

.right-enter-from,
.right-enter-to,
.right-enter-active,
.left-enter-from,
.left-enter-to,
.left-enter-active {
  position: absolute;
  top: 0;
}

.slide-container {
  position: relative;
}

</style>