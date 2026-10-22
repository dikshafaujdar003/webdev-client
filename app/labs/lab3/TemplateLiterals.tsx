export default function TemplateLiterals() {
  const five = 2 + 3;
  const result1 = "2 + 3 = " + five;
  const result2 = `2 + 3 = ${2 + 3}`;
  const username = "alice";
  const greeting1 = `Welcome home ${username}`;
  const loggedIn = false;
  const greeting2 = `Logged in: ${loggedIn ? "Yes" : "No"}`;
  // On my own
  const myName = "Diksha";
  const enrolled = true;
  const myGreeting = `${myName} is ${enrolled ? "enrolled in" : "not enrolled in"} CS5610`;
  // With AI
  const published = true;
  const courseStatus = `RS101 published: ${published ? "Yes" : "No"}`;
  return (
    <div id="wd-template-literals">
      <h4>Template Literals</h4>
      result1 = {result1}     <br />
      result2 = {result2}     <br />
      greeting1 = {greeting1} <br />
      greeting2 = {greeting2} <br />
      {/* With AI */}
      courseStatus = {courseStatus} <br />
      {/* On my own */}
      myGreeting = {myGreeting}
      <hr />
    </div>
  );
}
