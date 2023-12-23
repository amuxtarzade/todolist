import "./style.css";
import TodoItem from "../todo-item";
import TodoEmpty from "../todo-empty";

const TodoList = ({ todos, checkTodo, removeTodo, searchText, updateTodo }) => {
  let filteredTodos = todos.filter((todo) =>
    todo.task.trim().toLowerCase().includes(searchText)
  );
  return filteredTodos.length ? (
    <div className="TodoList">
      {filteredTodos.map((todo) => {
        return (
          <TodoItem
            todo={todo}
            key={todo.id}
            checkTodo={() => checkTodo(todo.id)}
            removeTodo={() => removeTodo(todo.id)}
            updateTodo={(todoText) => updateTodo(todoText, todo.id)}
          />
        );
      })}
    </div>
  ) : (
    <TodoEmpty />
  );
};
export default TodoList;
