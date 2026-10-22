import todos from "./todos.json";
import TodoItem from "./TodoItem";

export default function TodoList() {
  return (
    <div id="wd-todo-list">
      <h3>Todo List</h3>
      <ul style={{ listStyle: "none", paddingLeft: 0 }}>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
      <hr />
    </div>
  );
}
