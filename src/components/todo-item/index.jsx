import "./style.css";
import TodoCheckBox from "../icons/todo-check-box";
import TodoRemove from "../icons/todo-remove";
import TodoEdit from "../icons/todo-edit";
import { useState } from "react";
import TodoEditInput from "../inputs/todo-edit-input";

const TodoItem = ({ todo, checkTodo, removeTodo, updateTodo }) => {
  const [isEditActive, setIsEditActive] = useState(false);
  return (
    <div className={todo.completed ? "TodoItem Completed" : "TodoItem"}>
      <TodoCheckBox isActive={todo.completed} checkTodo={checkTodo} />
      {isEditActive ? (
        <TodoEditInput
          value={todo.task}
          setEditFalse={() => setIsEditActive(false)}
          updateTodo={updateTodo}
          removeTodo={removeTodo}
        />
      ) : (
        <p>{todo.task}</p>
      )}
      {isEditActive || <TodoEdit toggleEdit={() => setIsEditActive(true)} />}

      <TodoRemove removeTodo={removeTodo} />
    </div>
  );
};

export default TodoItem;
