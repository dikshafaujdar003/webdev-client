import { useState } from "react";
import { useTodosContext } from "./todosContext";

export default function ReactContextTodoList() {
  const { todos, addTodo, updateTodo, deleteTodo } = useTodosContext();
  const [title, setTitle] = useState("Learn React Context");
  const [editingId, setEditingId] = useState<string | null>(null);
  const save = () => {
    if (!title.trim()) return;
    if (editingId) {
      updateTodo({ id: editingId, title });
      setEditingId(null);
    } else {
      addTodo(title);
    }
    setTitle("");
  };
  return (
    <div id="wd-context-todo-list">
      <h3>React Context Todo List</h3>
      <div className="mb-2 flex flex-wrap gap-2">
        <input
          id="wd-context-todo-title"
          className="rounded border border-neutral-300 px-3 py-1.5"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button
          type="button"
          id="wd-context-add-todo-click"
          onClick={save}
          className="rounded bg-green-600 px-3 py-1.5 text-sm font-medium text-white"
        >
          {editingId ? "Update" : "Add"}
        </button>
      </div>
      <ul className="m-0 max-w-lg list-none p-0">
        {todos.map((todo) => (
          <li
            key={todo.id}
            id={`wd-context-todo-${todo.id}`}
            className="mb-1 flex items-center justify-between rounded border border-neutral-200 px-3 py-1"
          >
            <span>{todo.title}</span>
            <span className="flex gap-2">
              <button
                type="button"
                onClick={() => {
                  setTitle(todo.title);
                  setEditingId(todo.id);
                }}
                className="rounded bg-yellow-400 px-2 py-0.5 text-sm"
              >
                Edit
              </button>
              <button
                type="button"
                onClick={() => deleteTodo(todo.id)}
                className="rounded bg-red-600 px-2 py-0.5 text-sm font-medium text-white"
              >
                Delete
              </button>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
