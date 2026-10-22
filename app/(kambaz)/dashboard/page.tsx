import "@/app/labs/lab2/tailwind/utilities.css";
import CourseCard from "./CourseCard";
import { courses } from "../database";

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2>
      <hr />
      <div
        id="wd-dashboard-courses"
        className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4"
      >
        {courses.map((course) => (
          <CourseCard
            key={course._id}
            id={course._id}
            title={course.name}
            subtitle={course.description}
            image={course.image}
          />
        ))}
      </div>
    </div>
  );
}
