import Link from "next/link";

export default function Labs() {
  return (
    <div id="wd-labs">
      <h1>Labs</h1>
      <h2 id="wd-labs-name">Diksha Faujdar</h2>
      <ul>
        <li>
          <Link href="/labs/lab1">Lab 1: HTML Examples</Link>
        </li>
        <li>
          <Link href="/labs/lab2">Lab 2: CSS Basics</Link>
          {" "}(
          <Link href="/labs/lab2/tailwind">Tailwind sub-lab</Link>
          )
        </li>
        <li>
          <Link href="/labs/lab3">Lab 3: JavaScript Fundamentals</Link>
          {" "}(
          <Link href="/labs/lab3/types">TypeScript Types</Link>,{" "}
          <Link href="/labs/lab3/client-apis">Client-Only APIs</Link>,{" "}
          <Link href="/labs/lab3/server-apis">Server-Only APIs</Link>,{" "}
          <Link href="/labs/lab3/children">Composing Styles</Link>
          )
        </li>
        <li>
          <Link href="/labs/lab4" id="wd-lab4-link">
            Lab 4
          </Link>
        </li>
        <li>
          <Link href="/labs/lab5" id="wd-lab5-link">
            Lab 5
          </Link>
        </li>
        <li>
          <Link href="/" id="wd-kambaz-link">
            Kambaz
          </Link>
        </li>
        <li>
          <Link href="/dashboard" id="wd-kambaz-dashboard-link">
            Kambaz Dashboard
          </Link>
        </li>
      </ul>
      <a href="https://github.com/dikshafaujdar003/webdev-client" id="wd-github">
        GitHub Repository
      </a>
    </div>
  );
}
