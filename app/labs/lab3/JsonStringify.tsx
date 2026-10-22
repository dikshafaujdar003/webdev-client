export default function JsonStringify() {
  const course = {
    number: "CS5610",
    name: "Web Development",
    instructor: { first: "Jose", last: "Annunziato" },
    topics: ["HTML", "CSS", "JavaScript"],
  };
  return (
    <div id="wd-json-stringify">
      <h4>JSON Stringify</h4>
      squares = {JSON.stringify([1, 4, 16, 25, 36])} <br />
      <pre>{JSON.stringify(course, null, 2)}</pre>
      <hr />
    </div>
  );
}
