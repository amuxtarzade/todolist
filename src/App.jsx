import { useEffect, useState } from "react";
import "./App.css";
import Logo from "./components/icons/logo";
import TodoInput from "./components/inputs/todo-input";
import random from "./utility/random";
import TodoList from "./components/todo-list";
import ListInfo from "./components/list-info";

function App() {
  const [todos, setTodos] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const localTodos = JSON.parse(localStorage.getItem("todos"));
    if (localTodos) setTodos(localTodos);
  }, []);

  function addTodo(todoText) {
    updateTodos([
      ...todos,
      {
        id: random(100000, 999999),
        task: todoText,
        completed: false,
      },
    ]);
  }

  function checkTodo(todoId) {
    let newTodos = todos.map((todo) => {
      if (todo.id === todoId) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    updateTodos(newTodos);
  }

  function deleteTodo(todoId) {
    let newTodos = todos.filter((todo) => todo.id !== todoId);
    updateTodos(newTodos);
  }
  function updateTodo(todoText, todoId) {
    let todoIndex = todos.findIndex((todo) => todo.id === todoId);
    let todo = todos[todoIndex];
    todo.task = todoText;
    let newTodos = [...todos];
    newTodos[todoIndex] = todo;
    updateTodos(newTodos);
  }

  function updateSearchText(text) {
    setSearchText(text.trim().toLowerCase());
  }

  function updateTodos(todos) {
    setTodos(todos);
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  return (
    <div className="App">
      <div className="Strake"></div>
      <Logo />
      <TodoInput addTodo={addTodo} searchTodo={updateSearchText} />
      <ListInfo
        count={todos.length}
        completed={todos.filter((todo) => todo.completed).length}
      />
      <TodoList
        todos={todos}
        searchText={searchText}
        checkTodo={checkTodo}
        removeTodo={deleteTodo}
        updateTodo={updateTodo}
      />
    </div>
  );
}

export default App;
