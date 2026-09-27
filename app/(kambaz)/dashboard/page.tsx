import CourseCard from "./CourseCard";

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (3)</h2> <hr />
      <div id="wd-dashboard-courses">
        <CourseCard
        id="5610"
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
      </div>
    </div>
  );
}
