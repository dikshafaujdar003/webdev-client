function add(a: number, b: number) {
  return a + b;
}
// On my own
function subtract(a: number, b: number) {
  return a - b;
}
// With AI
function multiply(a: number, b: number) {
  return a * b;
}
export default function LegacyFunctions() {
  const twoPlusFour = add(2, 4);
  console.log(twoPlusFour);
  // On my own
  const tenMinusThree = subtract(10, 3);
  // With AI
  const threeTimesSeven = multiply(3, 7);
  console.log(threeTimesSeven);
  return (
    <div id="wd-legacy-functions">
      <h4>Functions</h4>
      <h5>Legacy ES5 functions</h5>
      twoPlusFour = {twoPlusFour} <br />
      add(2, 4) = {add(2, 4)}     <br />
      {/* On my own */}
      tenMinusThree = {tenMinusThree} <br />
      subtract(10, 3) = {subtract(10, 3)} <br />
      {/* With AI */}
      threeTimesSeven = {threeTimesSeven} <br />
      multiply(3, 7) = {multiply(3, 7)}
      <hr />
    </div>
  );
}
