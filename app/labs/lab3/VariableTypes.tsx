export default function VariableTypes() {
  let numberVariable = 123;
  let floatingPointNumber = 234.345;
  let stringVariable = "Hello World!";
  let booleanVariable = true;
  let isNumber = typeof numberVariable;
  let isString = typeof stringVariable;
  let isBoolean = typeof booleanVariable;
  // On my own
  let courseCode = "CS5610";
  let creditHours = 4;
  // With AI
  let sampleCount = 42;
  let sampleLabel = "Lab 3";
  return (
    <div id="wd-variable-types">
      <h4>Variables Types</h4>
      numberVariable = {numberVariable}           <br />
      floatingPointNumber = {floatingPointNumber} <br />
      stringVariable = {stringVariable}           <br />
      booleanVariable = {booleanVariable + ""}    <br />
      isNumber = {isNumber}                       <br />
      isString = {isString}                       <br />
      isBoolean = {isBoolean}                     <br />
      {/* On my own */}
      courseCode = {courseCode}, typeof courseCode = {typeof courseCode}    <br />
      creditHours = {creditHours}, typeof creditHours = {typeof creditHours} <br />
      {/* With AI */}
      sampleCount = {sampleCount}, typeof sampleCount = {typeof sampleCount} <br />
      sampleLabel = {sampleLabel}, typeof sampleLabel = {typeof sampleLabel}
      <hr />
    </div>
  );
}
