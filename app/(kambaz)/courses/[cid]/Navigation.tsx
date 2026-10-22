"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "@/app/labs/lab2/tailwind/utilities.css";
import "../../kambaz.css";

export default function CourseNavigation({ cid }: { cid: string }) {
  const pathname = usePathname() ?? "";
  const links = [
    { label: "Home", path: "home" },
    { label: "Modules", path: "modules" },
    { label: "Piazza", path: "piazza" },
    { label: "Zoom", path: "zoom" },
    { label: "Assignments", path: "assignments" },
    { label: "Quizzes", path: "quizzes" },
    { label: "Grades", path: "grades" },
    { label: "People", path: "people/table" },
  ];

  return (
    <div id="wd-courses-navigation" className="wd list-group rounded-none text-lg">
      {links.map(({ label, path }) => {
        const href = `/courses/${cid}/${path}`;
        const active = pathname === href || pathname.startsWith(href + "/");
        return (
          <Link
            key={label}
            href={href}
            id={`wd-course-${label.toLowerCase()}-link`}
            aria-current={active ? "page" : undefined}
            className={
              active
                ? "list-group-item active border-0"
                : "list-group-item border-0 text-red-600"
            }
          >
            {label}
          </Link>
        );
      })}
    </div>
  );
}
