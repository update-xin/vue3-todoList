<template>
  <div id="app">
    <section class="todoapp">
      <header class="header">
        <h1>update-todos</h1>
        <input
          class="new-todo"
          autocomplete="off"
          placeholder="What needs to be done?"
          v-model="newTodoRef"
          @keyup.enter="addTodo"
        />
      </header>
      <section class="main" v-show="todosRef.length>0">
        <input id="toggle-all" class="toggle-all" type="checkbox" v-model="allDoneRef" />
        <label for="toggle-all">Mark all as complete</label>
        <ul class="todo-list">
          <li class="todo" 
            v-for="todo in filteredTodosRef" 
            :key="todo.id" 
            :class="{ completed:todo.completed, editing:todo === editingTodoRef }">
            <div class="view">
              <input class="toggle" type="checkbox" v-model="todo.completed" />
              <label @dblclick="editTodo(todo)">{{todo.title}}</label>
              <button class="destroy" @click="remove(todo)"></button>
            </div>
            <input class="edit" type="text"
              v-model="todo.title"
              @blur="doneEdit(todo)"
              @keyup.enter="doneEdit(todo)"
              @keyup.escape="cancelEdit(todo)"
              />
          </li>
        </ul>
      </section>
      <footer class="footer" v-show="todosRef.length>0">
        <span class="todo-count">
          <strong>{{remainingRef}}</strong>
          <span>item{{ remainingRef === 1 ? '' : 's'}} left</span>
        </span>
        <ul class="filters">
          <li><a href="#/all" :class="{ selected: visibilityRef === 'all'}">All</a></li>
          <li><a href="#/active" :class="{ selected: visibilityRef === 'active'}">Active</a></li>
          <li><a href="#/completed" :class="{ selected: visibilityRef === 'completed'}">Completed</a></li>
        </ul>
        <button class="clear-completed" v-show="completedRef>0" @click="removeCompleted">
          Clear completed
        </button>
      </footer>
    </section>
  </div>
</template>

<script>
import useTodoList from './components/useTodoList'
import useNewTodo from './components/useNewTodo'
import useFilter from './components/useFilter'
import useEditTodo from './components/useEditTodo'
import useRemoveTodo from './components/useRomoveTodo'

export default {
  setup () {
    const { todosRef } = useTodoList()
    const { filteredTodosRef } = useFilter(todosRef)
    return {
      todosRef,
      ...useNewTodo(todosRef),
      ...useFilter(todosRef),
      ...useEditTodo(filteredTodosRef,todosRef),
      ...useRemoveTodo(todosRef),
    }
  }
}
</script>

<style>

</style>
