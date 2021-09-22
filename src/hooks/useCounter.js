import {ref, reactive, readonly} from 'vue'

export default function useCounter(){

    const state1 = reactive({
        count: 0
    })

    const state2 = ref({
        count: 0
    })

    const methods = {
        decrease: ()=>{
            state1.count--
            console.log('decrease = '+state1.count);
        },
        increase: ()=>{
            state1.count++
            console.log('increase = '+state1.count);
        },
    }

    const getters = {
        count1:()=>{
            return state1;
        },
        count2:()=>{
            return state2;
        }
    }

    return {
        state1,
        state2,
        methods,
        getters,
    }

}


