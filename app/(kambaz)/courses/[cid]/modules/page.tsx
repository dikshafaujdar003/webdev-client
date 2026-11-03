"use client";
import "@/app/labs/lab2/tailwind/utilities.css";
import { useParams } from "next/navigation";
import Module from "./Module";
import Lesson from "./Lesson";
import ModulesControls from "./ModulesControls";
import { useModulesStore } from "../../../store/modulesStore";

export default function Modules() {
  const { cid } = useParams();
  const allModules = useModulesStore((state) => state.modules);
  const modules = allModules.filter((module) => module.course === cid);
  return (
    <div>
      <ModulesControls />
      <ul id="wd-modules" className="m-0 list-none p-0">
        {modules.map((module) => (
          <Module key={module._id} module={module}>
            {module.lessons?.map((lesson) => (
              <Lesson key={lesson._id} title={lesson.name}>
                {"items" in lesson && Array.isArray(lesson.items)
                  ? (lesson.items as string[]).map((item) => <li key={item}>{item}</li>)
                  : <li>{lesson.description}</li>}
              </Lesson>
            ))}
          </Module>
        ))}
      </ul>
    </div>
  );
}
