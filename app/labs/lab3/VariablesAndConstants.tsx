export default function VariablesAndConstants() {
  var functionScoped = 2;
  let blockScoped = 5;
  const constant1 = functionScoped - blockScoped;
  // On my own
  let myName = "Diksha";
  const greeting = `Hello, ${myName}!`;
  // With AI
  const sampleSum = functionScoped + blockScoped;
  return (
    <div id="wd-variables-and-constants">
      <h4>Variables and Constants</h4>
      functionScoped = {functionScoped} <br />
      blockScoped = {blockScoped}       <br />
      constant1 = {constant1}           <br />
      {/* On my own */}
      myName = {myName}                 <br />
      greeting = {greeting}             <br />
      {/* With AI */}
      sampleSum = {sampleSum}
      <hr />
    </div>
  );
}
