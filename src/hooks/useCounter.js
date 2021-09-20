import {reactive, readonly} from 'vue'

const state = reactive({
    count: 0
})

const methods = {
    decrease: ()=>{
        console.log('decrease = '+state.count);
        state.count--
    },
    increase: ()=>{
        console.log('increase = '+state.count);
        state.count++
    },
}

export default {
    state: readonly(state),
    methods,
}