import {ref,computed} from 'vue';

export default function useEditTodo(filteredTodosRef,todosRef){
    const editingTodoRef = ref(null);
    let originTitle = null;
    const editTodo = (todo) => {
        originTitle = todo.title
        editingTodoRef.value = todo; 
    }
    const doneEdit = (todo)=> {
        editingTodoRef.value = null;
        const title = todo.title.trim()
        if(title){
            todo.title = title
        }else{
            const index = todosRef.value.indexOf(todo)
            if(index >= 0){
                todosRef.value.splice(index,1)
            }
        }
    }
    const cancelEdit = (todo) => {
        editingTodoRef.value = null;
        todo.title = originTitle;
    }
    const allDoneRef = computed({
        get(){
            return filteredTodosRef.value.filter(it => !it.completed).length === 0;
        },
        set(checked){
            filteredTodosRef.value.forEach(todo => {
                todo.completed = checked
            })
        }
    })
    return {
        editingTodoRef,
        editTodo,
        doneEdit,
        cancelEdit,
        allDoneRef
    }
}