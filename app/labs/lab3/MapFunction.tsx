export default function MapFunction() {
  let numberArray1 = [1, 2, 3, 4, 5, 6];
  const square = (a: number) => a * a;
  const todos = [
    "Buy milk",
    "Feed the pets",
    // On my own
    "Study for Q3",
    // With AI
    "Email the TA",
  ];
  const squares = numberArray1.map(square);
  const cubes = numberArray1.map((a) => a * a * a);
  // With AI
  const doubles = numberArray1.map((a) => a * 2);
  return (
    <div id="wd-map-function">
      <h4>Map Function</h4>
      squares = {squares} <br />
      cubes = {cubes}     <br />
      {/* With AI */}
      doubles = {doubles} <br />
      Todos:
      <ol>
        {todos.map((todo) => (
          <li key={todo}>{todo}</li>
        ))}
      </ol>
      <hr />
    </div>
  );
}
