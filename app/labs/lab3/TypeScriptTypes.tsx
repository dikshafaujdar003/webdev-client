type Course = {
  number: string;
  credits: number;
};

interface Student {
  name: string;
  email?: string;
}

type Role = "STUDENT" | "TA" | "FACULTY";

enum Weekday {
  Monday = "MON",
  Wednesday = "WED",
  Friday = "FRI",
}

type BinaryOp = (a: number, b: number) => number;

function TypedGreeting({ name, excited = false }: { name: string; excited?: boolean }) {
  return <span>Hello, {name}{excited ? "!" : "."}</span>;
}

function describe(value: string | null | undefined) {
  if (value == null) return "nothing";
  return `${value.length} characters`;
}

function describeUnknown(value: unknown) {
  if (typeof value === "number") return `number ${value.toFixed(1)}`;
  if (typeof value === "string") return `string "${value}"`;
  return "something else";
}

export default function TypeScriptTypes() {
  const count: number = 3;
  const label: string = "Lab 3";
  const done: boolean = false;
  const course: Course = { number: "CS5610", credits: 4 };
  const student: Student = { name: "Diksha" };
  const role: Role = "STUDENT";
  const today: Weekday = Weekday.Wednesday;
  const multiply: BinaryOp = (a, b) => a * b;
  const looseValue: any = "anything goes";
  const draft: Partial<Course> = { number: "CS5800" };
  const credits: Record<Role, number> = { STUDENT: 4, TA: 2, FACULTY: 0 };
  const key: keyof Course = "credits";
  return (
    <div id="wd-typescript-types">
      <h3>TypeScript Types</h3>
      <h4>Type Annotations</h4>
      count = {count}, label = {label}, done = {done + ""}
      <h4>Object Types and Type Aliases</h4>
      course = {JSON.stringify(course)}
      <h4>Interfaces</h4>
      student.name = {student.name}, student.email ?? &quot;n/a&quot; = {student.email ?? "n/a"}
      <h4>Union and Literal Types</h4>
      role = {role}
      <h4>Enums</h4>
      today = {today}
      <h4>Function Types</h4>
      multiply(6, 7) = {multiply(6, 7)}
      <h4>Typing React Props</h4>
      <TypedGreeting name="Diksha" excited />
      <h4>Null, Undefined, and Narrowing</h4>
      describe(null) = {describe(null)}, describe(&quot;hello&quot;) = {describe("hello")}
      <h4>any vs unknown</h4>
      looseValue = {looseValue}, describeUnknown(3) = {describeUnknown(3)}
      <h4>Utility Types: Partial, Record, and keyof</h4>
      draft = {JSON.stringify(draft)} <br />
      credits = {JSON.stringify(credits)} <br />
      course[key] = {course[key]}
      <hr />
    </div>
  );
}
