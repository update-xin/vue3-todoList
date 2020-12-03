const LOCAL_KEY = 'todomvc'

export function generateId () {
  return Date.now() + Math.random().toString(16).substr(2, 4)
}

export function fetch () {
  const result = localStorage.getItem(LOCAL_KEY)
  if (result) {
    
    return JSON.parse(result)
  }
  return []
}

export function save (todos) {
  localStorage.setItem(LOCAL_KEY, JSON.stringify(todos))
}

export function filter(todos,visivility = 'all'){
  if(visivility === 'all'){
    return todos;
  }else if(visivility === 'active'){
    return todos.filter(it => !it.completed)
  }else if(visivility === 'completed'){
    return todos.filter(it => it.completed)
  }
  throw new Error('invalid visibility value')
}
