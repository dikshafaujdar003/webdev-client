export type Todo = {
  id: number;
  title: string;
  done: boolean;
  status: string;
};

export default function TodoItem({ todo }: { todo: Todo }) {
  return (
    <li className="wd-todo-item">
      <input type="checkbox" defaultChecked={todo.done} id={`wd-todo-${todo.id}`} />{" "}
      <label htmlFor={`wd-todo-${todo.id}`}>
        {todo.title} ({todo.status})
      </label>
    </li>
  );
}
