export default function ImpliedReturn() {
  const multiply = (a: number, b: number) => a * b;
  const fourTimesFive = multiply(4, 5);
  console.log(fourTimesFive);
  // On my own
  const square = (n: number) => n * n;
  // With AI
  const divide = (a: number, b: number) => a / b;
  return (
    <div id="wd-implied-return">
      <h4>Implied return</h4>
      fourTimesFive = {fourTimesFive} <br />
      multiply(4, 5) = {multiply(4, 5)} <br />
      {/* On my own */}
      square(9) = {square(9)} <br />
      {/* With AI */}
      divide(20, 4) = {divide(20, 4)}
      <hr />
    </div>
  );
}
