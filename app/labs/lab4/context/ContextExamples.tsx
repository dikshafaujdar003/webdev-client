"use client";

import { CounterProvider } from "./CounterContext";
import ContextCounterRead from "./ContextCounterRead";
import ContextCounterWrite from "./ContextCounterWrite";
import { TodosProvider } from "./todosContext";
import ReactContextTodoList from "./ReactContextTodoList";

export default function ContextExamples() {
  return (
    <div id="wd-context-examples">
      <h2>React Context</h2>
      <p>
        Two siblings share one counter without the parent passing props
        through the middle.
      </p>
      <CounterProvider>
        <ContextCounterRead />
        <ContextCounterWrite />
      </CounterProvider>
      {/* On my own (the With AI prompt asks for this same list, so it is not repeated) */}
      <TodosProvider>
        <ReactContextTodoList />
      </TodosProvider>
      <hr />
    </div>
  );
}
