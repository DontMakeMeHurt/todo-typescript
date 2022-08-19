import React, { useState } from 'react'
import { TodoList } from './components/TodoList';
import {Heading} from './components/Header';
import AddTodoForm from './components/AddTodoForm';
// import styled from '@stitches/react';

const initialTodos:Array<Todo > = [

]

const App: React.FunctionComponent = () => {
  const [todos, setTodos] = useState(initialTodos)
  
  const toggleTodo: ToggleTodo = (selectedTodo) => {
    
    const newTodos  = todos.map(todo => { 
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete
        }
      }
      return todo;
    })
    setTodos(newTodos)
  }

  const addTodo: AddTodo = (newTodo) => {
    if (newTodo !== '') {
    setTodos([...todos, {text: newTodo, complete: false, id: todos.length + 1}]);
      
    }
  }

  const removeTodo: RemoveTodo = ({ id}) => {
    let updateTodos: Array<Todo> = todos.filter(todo => {
      return todo.id !== id
    });
    setTodos(updateTodos);
  }

  return (
    <React.Fragment>
      <Heading label='Todo App' />
      <AddTodoForm addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} onRemoveTodo={removeTodo} />
  </React.Fragment>
  )
}
export default App