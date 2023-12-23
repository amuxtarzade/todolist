import { useRef, useState } from "react";
import PlusIcon from "../../../assets/icons/plus.svg";
import "./style.css";
import AppInput from "../app-input";

const TodoInput = ({ addTodo, searchTodo }) => {
  const [isDisable, setIsDisable] = useState(true);
  const [todoText, setTodoText] = useState("");
  const todoInputRef = useRef();
  const searchInputRef = useRef();

  function onClick() {
    if (!isDisable) {
      addTodo(todoText);
      todoInputRef.current.value = "";
      setTodoText("");
      setIsDisable(true);
    }
  }

  function todoInputOnChange() {
    if (todoInputRef.current.value.trim() === "") {
      setIsDisable(true);
    } else {
      setIsDisable(false);
    }
    setTodoText(todoInputRef.current.value);
  }

  function todoInputOnKeyUp(e) {
    if (e.key === "Enter") {
      onClick();
    }
  }

  function onSearch() {
    searchTodo(searchInputRef.current.value);
  }

  return (
    <div className="TodoInput">
      <AppInput
        inputRef={todoInputRef}
        type="text"
        placeholder="Enter a task"
        onChange={todoInputOnChange}
        onKeyUp={todoInputOnKeyUp}
      />

      <AppInput
        inputRef={searchInputRef}
        type="text"
        placeholder="Search task"
        onChange={onSearch}
      />

      <button onClick={onClick} className={isDisable ? "Disabled" : undefined}>
        <p>Add Todo</p>
        <img src={PlusIcon} alt="" />
      </button>
    </div>
  );
};

export default TodoInput;
