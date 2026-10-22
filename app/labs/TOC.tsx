"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function TOC() {
  const pathname = usePathname() ?? "";
  const labs = [
    { label: "Lab 1", path: "/labs/lab1" },
    { label: "Lab 2", path: "/labs/lab2" },
    { label: "Lab 3", path: "/labs/lab3" },
    { label: "Lab 4", path: "/labs/lab4" },
    { label: "Lab 5", path: "/labs/lab5" },
  ];
  const isActive = (path: string) =>
    pathname === path || pathname.startsWith(path + "/");
  return (
    <ul>
      <li>
        <Link
          href="/labs"
          id="wd-home-link"
          className={pathname === "/labs" ? "wd-active-link" : undefined}
          aria-current={pathname === "/labs" ? "page" : undefined}
        >
          Home
        </Link>
      </li>
      {labs.map((lab) => (
        <li key={lab.path}>
          <Link
            href={lab.path}
            id={`wd-${lab.path.split("/").pop()}-toc-link`}
            className={isActive(lab.path) ? "wd-active-link" : undefined}
            aria-current={isActive(lab.path) ? "page" : undefined}
            style={isActive(lab.path) ? { fontWeight: "bold", color: "#dc2626" } : undefined}
          >
            {lab.label}
          </Link>
        </li>
      ))}
      <li>
        <Link href="/" id="wd-kambaz-link">
          Kambaz
        </Link>
      </li>
      <li>
        <Link href="/dashboard" id="wd-toc-dashboard-link">
          Kambaz Dashboard
        </Link>
      </li>
      <li>
        <a href="https://kambaz.dev/book/ch3" id="wd-toc-book-link">
          Chapter 3
        </a>
      </li>
      <li>
        <a href="https://github.com/dikshafaujdar003/webdev-client" id="wd-toc-github">
          GitHub Repository
        </a>
      </li>
      <li id="wd-toc-name">
        Diksha Faujdar
        <br />
        <em>Build it, break it, learn it.</em>
      </li>
    </ul>
  );
}
