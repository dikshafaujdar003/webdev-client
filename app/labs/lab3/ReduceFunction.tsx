export default function ReduceFunction() {
  const numberArray1 = [1, 2, 4, 5, 6];
  const sum = numberArray1.reduce((total, a) => total + a, 0);
  const max = numberArray1.reduce((best, a) => (a > best ? a : best), numberArray1[0]);
  return (
    <div id="wd-reduce-function">
      <h4>Reduce function</h4>
      sum = {sum} <br />
      max = {max}
      <hr />
    </div>
  );
}
