import {ref, onMounted, reactive, readonly, computed} from 'vue'
import {store} from '@/store'

const state1 = reactive({
    count: 1,
    bonus: {
        points: 11
    }        
})

const state2 = ref({
    count: 2,
    bonus: {
        points: 22
    }
})

const stateArr1 = reactive({
    arrs: []
})

const arrayReactive = reactive([])
const arrayRef = ref([])

const stateArr2 = ref({
    arrs: []
})

export default function useCounter(){

    const data1 = computed(()=>{
        return store.getters['data1']
    }) 

    // const data1 = store.getters['data1']

    const methods = {
        decrease: ()=>{
            state1.count--
            state2.value.count--
            console.log('decrease = '+state1.count);

            console.log('state1 = ',state1);
            console.log('state2 = ',state2);
            console.log('state2 = ',state2.value.count);

            stateArr1.arrs = ['decrease1','decrease2'];
            stateArr2.value.arrs = ['decrease1','decrease2'];

            arrayReactive.push(['decrease1','decrease2']);
            arrayRef.value = ['decrease1','decrease2'];

            store.dispatch('setData1',state1.count);

        },
        increase: ()=>{
            state1.count++
            state2.value.count++
            console.log('increase = '+state1.count);

            store.dispatch('setData1',state1.count);
        },

    }

    // onMounted(()=>{
    //     console.log('Counter Mounted');
    // });

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
        stateArr1,
        stateArr2,
        methods,
        getters,
        arrayReactive,
        arrayRef,
        data1,
    }

}


