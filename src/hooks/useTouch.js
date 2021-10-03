import {ref} from 'vue'
// context.emit("update:modelValue", !props.modelValue);

export default function useTouch(){
  const sensitivity = 10;
  const toucharea = ref(true)
  
  const start = (touchEvent, events)=>{
    // this if condition stops app from detecting touch
    if(toucharea.value) {
      touchEvent.stopPropagation();
      // console.log('useTouch');
      if (touchEvent.changedTouches.length !== 1) {
        return;
      }
      const pos = {
        x:touchEvent.changedTouches[0].clientX,
        y:touchEvent.changedTouches[0].clientY
      }
      
      for (const event in events) {
        let func = null 
        if(event==='swipedown')
        func = (touchEvent) => swipeHandler(touchEvent, events[event], pos, swipeDown)
        // func = (touchEvent) => swipeDown(touchEvent, events[event], pos)
        else if(event==='swipeup')
        func = (touchEvent) => swipeHandler(touchEvent, events[event], pos, swipeUp)
        // func = (touchEvent) => swipeUp(touchEvent, events[event], pos)
        else if(event==='swipeleft')
        func = (touchEvent) => swipeHandler(touchEvent, events[event], pos, swipeLeft)
        // func = (touchEvent) => swipeLeft(touchEvent, events[event], pos)
        else if(event==='swiperight')
        func = (touchEvent) => swipeHandler(touchEvent, events[event], pos, swipeRight)
        // func = (touchEvent) => swipeRight(touchEvent, events[event], pos)
        else 
        func = ()=> null

        window.addEventListener(
          "touchend",
          func,
          { once: true }
        );         
      }
    } return;
  }

  const setToucharea = (data)=>{
    toucharea.value = data
  }

  const enableTouch = ()=>{
    toucharea.value = true
  }

  const disableTouch = ()=>{
    toucharea.value = false
  }

  const swipeHandler = (touchEvent, handle, pos, swipeHandle)=>{
    touchEvent.stopPropagation();
    if (touchEvent.changedTouches.length !== 1) {
      return;
    }
    swipeHandle(touchEvent, handle, pos)
  }

  // swipe left
  /////////////////////////////////////////////////////
  const swipeLeft = (touchEvent, handle, pos) => {
    const posXEnd = touchEvent.changedTouches[0].clientX;
    if (pos.x > posXEnd+sensitivity) {
      handle()
    }
  }  
  /////////////////////////////////////////////////////
  // swipe left

  // swipe right
  /////////////////////////////////////////////////////
  const swipeRight = (touchEvent, handle, pos) => {
    const posXEnd = touchEvent.changedTouches[0].clientX;
    if (pos.x < posXEnd-sensitivity) {
      handle()
    }
  }  
  /////////////////////////////////////////////////////
  // swipe right


  // swipe down
  /////////////////////////////////////////////////////
  const swipeDown = (touchEvent, handle, pos) => {
    const posYEnd = touchEvent.changedTouches[0].clientY;
    if (pos.y < posYEnd-sensitivity) {
      handle()
    }
  }
  /////////////////////////////////////////////////////
  // swipe down

  // swipe up
  /////////////////////////////////////////////////////
  const swipeUp = (touchEvent, handle, pos) => {
    const posYEnd = touchEvent.changedTouches[0].clientY;
    if (pos.y+sensitivity > posYEnd) {
      handle()
    }
  }
  /////////////////////////////////////////////////////
  // swipe up


  return {
    start,
    setToucharea,
    enableTouch,
    disableTouch,
  }

}
