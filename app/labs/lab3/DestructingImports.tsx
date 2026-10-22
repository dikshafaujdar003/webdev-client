import Math, { add, subtract, multiply, divide } from "./Math";
import * as Contained from "./Math";

export default function DestructingImports() {
  return (
    <div id="wd-destructing-imports">
      <h4>Destructing Imports</h4>
      <table border={1} cellPadding={4}>
        <thead>
          <tr>
            <th>Math</th>
            <th>Contained</th>
            <th>Destructed</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Math.add(2, 3) = {Math.add(2, 3)}</td>
            <td>Contained.add(2, 3) = {Contained.add(2, 3)}</td>
            <td>add(2, 3) = {add(2, 3)}</td>
          </tr>
          <tr>
            <td>Math.subtract(5, 1) = {Math.subtract(5, 1)}</td>
            <td>Contained.subtract(5, 1) = {Contained.subtract(5, 1)}</td>
            <td>subtract(5, 1) = {subtract(5, 1)}</td>
          </tr>
          <tr>
            <td>Math.multiply(3, 4) = {Math.multiply(3, 4)}</td>
            <td>Contained.multiply(3, 4) = {Contained.multiply(3, 4)}</td>
            <td>multiply(3, 4) = {multiply(3, 4)}</td>
          </tr>
          <tr>
            <td>Math.divide(8, 2) = {Math.divide(8, 2)}</td>
            <td>Contained.divide(8, 2) = {Contained.divide(8, 2)}</td>
            <td>divide(8, 2) = {divide(8, 2)}</td>
          </tr>
          <tr>
            <td>Math.add(10, 20) = {Math.add(10, 20)}</td>
            <td>Contained.add(10, 20) = {Contained.add(10, 20)}</td>
            <td>add(10, 20) = {add(10, 20)}</td>
          </tr>
        </tbody>
      </table>
      <hr />
    </div>
  );
}
