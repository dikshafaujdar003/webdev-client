"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "@/app/labs/lab2/tailwind/utilities.css";
import "../../kambaz.css";

export default function CourseNavigation({ cid }: { cid: string }) {
  const pathname = usePathname() ?? "";
  const home = `/courses/${cid}/home`;
  const modules = `/courses/${cid}/modules`;
  const piazza = `/courses/${cid}/piazza`;
  const zoom = `/courses/${cid}/zoom`;
  const assignments = `/courses/${cid}/assignments`;
  const quizzes = `/courses/${cid}/quizzes`;
  const grades = `/courses/${cid}/grades`;
  const people = `/courses/${cid}/people/table`;

  const cls = (href: string) =>
    pathname === href || pathname.startsWith(href + "/")
      ? "list-group-item active border-0"
      : "list-group-item border-0 text-red-600";

  return (
    <div id="wd-courses-navigation" className="wd list-group rounded-none text-lg">
      <Link href={home} id="wd-course-home-link" className={cls(home)}>
        Home
      </Link>
      <Link href={modules} id="wd-course-modules-link" className={cls(modules)}>
        Modules
      </Link>
      <Link href={piazza} id="wd-course-piazza-link" className={cls(piazza)}>
        Piazza
      </Link>
      <Link href={zoom} id="wd-course-zoom-link" className={cls(zoom)}>
        Zoom
      </Link>
      <Link href={assignments} id="wd-course-assignments-link" className={cls(assignments)}>
        Assignments
      </Link>
      <Link href={quizzes} id="wd-course-quizzes-link" className={cls(quizzes)}>
        Quizzes
      </Link>
      <Link href={grades} id="wd-course-grades-link" className={cls(grades)}>
        Grades
      </Link>
      <Link href={people} id="wd-course-people-link" className={cls(people)}>
        People
      </Link>
    </div>
  );
}
