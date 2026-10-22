import "@/app/labs/lab2/tailwind/utilities.css";
import Module from "./Module";
import Lesson from "./Lesson";
import { modules } from "../../../database";

export default function ModulesList({ cid }: { cid: string }) {
  const courseModules = modules.filter((module) => module.course === cid);
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
        {courseModules.length === 0 && <li>No modules for this course yet.</li>}
        {courseModules.map((module) => (
          <Module key={module._id} title={module.name}>
            {module.lessons.map((lesson) => (
              <Lesson key={lesson._id} title={lesson.name}>
                {lesson.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </Lesson>
            ))}
          </Module>
        ))}
      </ul>
    </div>
  );
}
