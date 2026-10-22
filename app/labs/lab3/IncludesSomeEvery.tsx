export default function IncludesSomeEvery() {
  const numberArray1 = [1, 2, 4, 5, 6];
  const hasFour = numberArray1.includes(4);
  const someGreaterThan5 = numberArray1.some((a) => a > 5);
  const allPositive = numberArray1.every((a) => a > 0);
  const allEven = numberArray1.every((a) => a % 2 === 0);
  return (
    <div id="wd-includes-some-every">
      <h4>Includes, some, and every</h4>
      hasFour = {hasFour + ""} <br />
      someGreaterThan5 = {someGreaterThan5 + ""} <br />
      allPositive = {allPositive + ""} <br />
      allEven = {allEven + ""}
      <hr />
    </div>
  );
}
