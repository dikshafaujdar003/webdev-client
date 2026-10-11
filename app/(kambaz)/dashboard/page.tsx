import "@/app/labs/lab2/tailwind/utilities.css";
import CourseCard from "./CourseCard";

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      <h2 id="wd-dashboard-published">Published Courses (4)</h2>
      <hr />
      <div
        id="wd-dashboard-courses"
        className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4"
      >
        <CourseCard
          id="1234"
          title="CS5610 Web Development"
          subtitle="Full stack development with React and Next.js"
          image="/images/cs5610.jpg"
        />
        <CourseCard
          id="6120"
          title="CS6120 Natural Language Processing"
          subtitle="Language models and text processing"
          image="/images/cs6120.jpg"
        />
        <CourseCard
          id="5800"
          title="CS5800 Algorithms"
          subtitle="Design and analysis of algorithms"
          image="/images/cs5800.jpg"
        />
        <CourseCard
          id="9999"
          title="CS9999 Sample Course"
          subtitle="Assistant-generated sample - not my course"
          image="/images/teslabot.jpg"
        />
      </div>
    </div>
  );
}
