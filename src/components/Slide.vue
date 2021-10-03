<template>
<div class="slide-container" @touchstart="touchStart">
  <transition :name="to" 
    @after-enter="enableTouch"
    @before-leave="disableTouch"
  >
    <slot></slot>
  </transition>
</div>
</template>

<script>
import {ref} from "vue"
import useTouch from "@/hooks/useTouch"
export default {
  props:{
    to: {
      type: String
    }
  },
  setup(props,context) {
    const touch = useTouch()

    const touchStart = (ev)=>{
      touch.start(ev, {
        swipeleft: next,
        swiperight: prev,
      })
    }

    const next = ()=>context.emit('next') 
    const prev = ()=>context.emit('prev') 


    return {
      touchStart,
      enableTouch: touch.enableTouch,
      disableTouch: touch.disableTouch,
    }
  },
}
</script>
<style scoped>


.slide-toucharea {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: #ff000078;
  /* background-color: transparent; */
  border: 1px solid red;
  z-index: 2;

}

.slide-container {
  position: relative;
  overflow: hidden;
  height: 80vh;
  width: 80vw;
}


.right-enter-active,
.right-leave-active,
.left-enter-active,
.left-leave-active {
  transition: all 0.3s ease;
  position: absolute;
  top: 0;
}



.left-enter-from { transform: translateX(100%); }
.left-enter-to { transform: translateX(0); }

.left-leave-from { transform: translateX(0); }
.left-leave-to { transform: translateX(-100%); }


.right-enter-from { transform: translateX(-100%); }
.right-enter-to { transform: translateX(0); }

.right-leave-from { transform: translateX(0); }
.right-leave-to { transform: translateX(100%); }

</style>