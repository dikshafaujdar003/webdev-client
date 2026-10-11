import "@/app/labs/lab2/tailwind/utilities.css";
import Module from "./Module";
import Lesson from "./Lesson";

export default function Modules() {
  return (
    <div>
      <div className="mb-3 flex flex-wrap items-center gap-2">
        <button type="button" className="rounded border border-neutral-300 bg-white px-3 py-1.5 text-sm">
          Collapse All
        </button>
        <button type="button" className="rounded border border-neutral-300 bg-white px-3 py-1.5 text-sm">
          View Progress
        </button>
        <select defaultValue="publish-all" className="rounded border border-neutral-300 bg-white px-3 py-1.5 text-sm">
          <option value="publish-all">Publish All</option>
        </select>
        <button type="button" className="rounded border border-red-600 bg-red-600 px-3 py-1.5 text-sm font-medium text-white">
          + Module
        </button>
      </div>
      <ul id="wd-modules" className="m-0 list-none p-0">
        <Module title="Week 1, Lecture 1 - Course Introduction, Syllabus, Agenda">
          <Lesson title="LEARNING OBJECTIVES">
            <li>Introduction to the course</li>
            <li>Learn what is Web Development</li>
          </Lesson>
          <Lesson title="READING">
            <li>Full Stack Developer - Chapter 1 - Introduction</li>
            <li>Full Stack Developer - Chapter 2 - Creating User Interfaces</li>
          </Lesson>
          <Lesson title="SLIDES">
            <li>Introduction to Web Development</li>
            <li>Creating an HTTP server with Node.js</li>
            <li>Creating a React Application</li>
          </Lesson>
        </Module>

        <Module title="Week 2, Lecture 2 - HTML and the App Router">
          <Lesson title="LEARNING OBJECTIVES">
            <li>Learn how to create user interfaces with HTML</li>
          </Lesson>
        </Module>

        <Module title="Week 3, Lecture 3 - CSS and Tailwind">
          <Lesson title="LEARNING OBJECTIVES">
            <li>CSS Styling</li>
          </Lesson>
        </Module>

        {/* On my own */}
        <Module title="Week 4, Lecture 4 - JavaScript and ES6">
          <Lesson title="LEARNING OBJECTIVES">
            <li>Review core JavaScript syntax and ES6 language features</li>
            <li>Use ES6 variables, functions, arrays, strings, and destructuring</li>
            <li>Build Single Page Applications with React components</li>
          </Lesson>
          <Lesson title="READING">
            <li>
              Developing Full Stack MERN Web Applications - Chapter 3 - Creating
              Single Page Applications with React
            </li>
          </Lesson>
          <Lesson title="SLIDES">
            <li>Introduction to JavaScript</li>
            <li>ES6 Variables and Functions</li>
            <li>ES6 Arrays and Strings</li>
            <li>ES6 Object and Array Destructuring</li>
            <li>ES6 Modules and Classes</li>
            <li>Dynamic Styling</li>
            <li>Parameterizing Components</li>
            <li>Dynamic Navigation</li>
            <li>Data Driven Dashboard, Courses, Modules, and People Screens</li>
          </Lesson>
          <Lesson title="KAMBAZ">
            <li>Data Driven Kambaz Navigation</li>
            <li>Implementing a Data Driven Kambaz Application</li>
          </Lesson>
          <Lesson title="DUE">
            <li>A3 - Chapter 3 (JS / React SPA), due Oct 25</li>
            <li>Q3 - JavaScript, due Nov 1</li>
          </Lesson>
        </Module>

        {/* AI sample */}
        <Module title="Sample module (AI)">
          <Lesson title="Sample lesson (AI)">
            <li>Sample lesson content added by the assistant</li>
          </Lesson>
        </Module>
      </ul>
    </div>
  );
}