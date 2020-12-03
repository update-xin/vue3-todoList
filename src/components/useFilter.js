import {ref,onMounted,onUnmounted,computed} from 'vue';
import { filter } from '../util/todoStorage'

const vaildHash = ['all','active','completed']

export default function useFilter(todosRef){
    const visibilityRef = ref('all');
    const onHashChange = () =>{
        
        const hash = location.hash.replace(/#\/?/,'');
        if(vaildHash.includes(hash)){
            visibilityRef.value = hash;
        }else {
            location.hash = '';
            visibilityRef.value = 'all';
        }
    }

    onMounted(()=>{
        window.addEventListener('hashchange',onHashChange);
    })

    onUnmounted(()=>{
        window.removeEventListener('hashchange',onHashChange)
    })

    const filteredTodosRef = computed(()=>{
        return filter(todosRef.value,visibilityRef.value)
    })

    const remainingRef = computed(()=>{
        return filter(todosRef.value,'active').length
    })

    const completedRef = computed(()=>{
        return filter(todosRef.value,'completed').length
    })


    return {
        visibilityRef,
        filteredTodosRef,
        remainingRef,
        completedRef
    }
}