import "./style.css";
import TodoCheckBox from "./components/todo-check-box";
import TodoRemove from "./components/todo-remove";
import TodoEdit from "./components/todo-edit";
import { useState } from "react";

const TodoItem = ({ todo, checkTodo, removeTodo }) => {
  const [isEditActive, setIsEditActive] = useState(false);
  return (
    <div className={todo.completed ? "TodoItem Completed" : "TodoItem"}>
      <TodoCheckBox isActive={todo.completed} checkTodo={checkTodo} />
      {isEditActive ? <input /> : <p>{todo.task}</p>}
      <TodoEdit toggleEdit={() => setIsEditActive(!isEditActive)} />
      <TodoRemove removeTodo={removeTodo} />
    </div>
  );
};

export default TodoItem;
