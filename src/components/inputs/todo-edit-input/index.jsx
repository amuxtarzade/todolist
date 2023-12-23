import { useRef, useState } from "react";
import "./style.css";
import TodoSave from "../../icons/todo-save/index.jsx";

const TodoEditInput = ({ value, setEditFalse, updateTodo, removeTodo }) => {
  const [text, setText] = useState(value);
  const inputRef = useRef();

  function onChange() {
    setText(inputRef.current.value);
  }

  function saveTodo() {
    if (text.trim() === "") {
      removeTodo();
    } else {
      updateTodo(text);
    }

    setEditFalse();
  }

  function onKeyUp(e) {
    if (e.key === "Enter") {
      saveTodo();
    }
  }

  return (
    <>
      <input
        ref={inputRef}
        type="text"
        className="TodoEditInput"
        defaultValue={value}
        autoFocus
        onChange={onChange}
        onKeyUp={onKeyUp}
      />
      <TodoSave saveTodo={saveTodo} />

    </>
  );
};

export default TodoEditInput;
