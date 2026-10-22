export default function WorkingWithConsole() {
  const course = { number: "CS5610", credits: 4 };
  console.log("Lab 3 course:", course);
  console.table([course]);
  return (
    <div id="wd-working-with-console">
      <h4>Writing to the Console</h4>
      Open the browser or terminal console to see console.log and console.table output.
      <hr />
    </div>
  );
}
