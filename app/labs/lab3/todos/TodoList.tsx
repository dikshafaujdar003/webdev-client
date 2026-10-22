import TodoItem from "./TodoItem";
// todos.json: "Finish A3" is my own fourth todo; "Email the TA" was added with AI
import todos from "./todos.json";
export default function TodoList() {
  // On my own
  console.log(todos);
  return (
    <>
      <h3>Todo List</h3>
      <ul className="list-none p-0">
        {todos.map((todo) => (
          <TodoItem key={todo.title} todo={todo} />
        ))}
      </ul>
      <hr />
    </>
  );
}
