export default function JsonStringify() {
  const squares = [1, 4, 16, 25, 36];
  // On my own
  const myCourse = { course: "CS5610", credits: 4 };
  return (
    <div id="wd-json-stringify">
      <h3>JSON Stringify</h3>
      squares = {JSON.stringify(squares)} <br />
      {/* With AI */}
      sampleCourse = {JSON.stringify({ course: "RS102", modules: 3 })} <br />
      {/* On my own */}
      myCourse = {JSON.stringify(myCourse)}
      <hr />
    </div>
  );
}
