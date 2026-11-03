"use client";

const hello = () => {
  alert("Hello World!");
};
// On my own
const greetMe = () => {
  alert("Hi, I'm Diksha Faujdar!");
};
// With AI
const goodbye = () => {
  alert("Goodbye World!");
};

export default function ClickEvent() {
  return (
    <div id="wd-click-event">
      <h2>Click Event</h2>
      <button
        type="button"
        onClick={hello}
        id="wd-onclick-hello"
        className="rounded bg-red-600 px-3 py-1.5 text-sm font-medium text-white"
      >
        Click Hello
      </button>
      {/* On my own */}
      <button
        type="button"
        onClick={greetMe}
        id="wd-onclick-my-greeting"
        className="ms-2 rounded bg-purple-600 px-3 py-1.5 text-sm font-medium text-white"
      >
        Greet Diksha
      </button>
      {/* With AI */}
      <button
        type="button"
        onClick={goodbye}
        id="wd-onclick-goodbye"
        className="ms-2 rounded bg-neutral-600 px-3 py-1.5 text-sm font-medium text-white"
      >
        Click Goodbye
      </button>
      <hr />
    </div>
  );
}
