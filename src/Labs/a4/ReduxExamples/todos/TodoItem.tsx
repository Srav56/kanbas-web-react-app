import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, setTodo } from "./todosReducer";
interface Todo {
    id: string;
    title: string;
    // Add other properties as needed
  }
  
  // Use the Todo type for the prop
  interface TodoItemProps {
    todo: Todo;
  }
  
  function TodoItem({ todo }: TodoItemProps) {
    const dispatch = useDispatch();
    return (
      <li key={todo.id} className="list-group-item">
        <button onClick={() => dispatch(deleteTodo(todo.id))}> Delete </button>
        <button onClick={() => dispatch(setTodo(todo))}> Edit </button>
        {todo.title}
      </li>
    );
  }
  export default TodoItem;
    