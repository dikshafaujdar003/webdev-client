export default function Spreading() {
  const arr1 = [1, 2, 3];
  const arr2 = [...arr1, 4, 5, 6];
  const obj1 = { a: 1, b: 2, c: 3 };
  const obj2 = { ...obj1, d: 4, e: 5, f: 6 };
  const obj3 = { ...obj1, b: 4 };
  return (
    <div id="wd-spreading">
      <h4>Spread Operator</h4>
      <h5>Array Spread</h5>
      arr1 = [{arr1.join(", ")}] <br />
      arr2 = [{arr2.join(", ")}]
      <h5>Object Spread</h5>
      obj1 = {JSON.stringify(obj1)} <br />
      obj2 = {JSON.stringify(obj2)} <br />
      obj3 = {JSON.stringify(obj3)}
      <hr />
    </div>
  );
}
