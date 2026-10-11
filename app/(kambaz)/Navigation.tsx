"use client";
import { AiOutlineDashboard } from "react-icons/ai";
import {
  FaRegCircleUser,
  FaBookOpen,
  FaRegCalendar,
  FaInbox,
  FaFlask,
} from "react-icons/fa6";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "@/app/labs/lab2/tailwind/utilities.css";

export default function KambazNavigation() {
  const pathname = usePathname() ?? "";

  const idle =
    "block bg-black py-3 text-center text-sm text-white no-underline";
  const active =
    "block bg-white py-3 text-center text-sm text-red-600 no-underline";

  const tile = (href: string) =>
    pathname === href || pathname.startsWith(href + "/") ? active : idle;

  const iconColor = (href: string) =>
    pathname === href || pathname.startsWith(href + "/")
      ? "text-red-600"
      : "text-red-500";

  return (
    <nav
      id="wd-kambaz-navigation"
      className="fixed bottom-0 top-0 z-20 hidden w-[120px] bg-black md:block"
    >
      <a
        href="https://www.northeastern.edu/"
        id="wd-neu-link"
        target="_blank"
        rel="noreferrer"
        className="block bg-black py-3 text-center text-xs font-bold text-red-500 no-underline"
      >
        Northeastern
      </a>
      <Link href="/account" id="wd-account-link" className={tile("/account")}>
        <FaRegCircleUser className="inline-block text-3xl text-white" />
        <br />
        Account
      </Link>
      <Link
        href="/dashboard"
        id="wd-dashboard-link"
        className={tile("/dashboard")}
      >
        <AiOutlineDashboard
          className={`inline-block text-3xl ${iconColor("/dashboard")}`}
        />
        <br />
        Dashboard
      </Link>
      <Link href="/dashboard" id="wd-course-link" className={idle}>
        <FaBookOpen className="inline-block text-3xl text-red-500" />
        <br />
        Courses
      </Link>
      <Link
        href="/calendar"
        id="wd-calendar-link"
        className={tile("/calendar")}
      >
        <FaRegCalendar
          className={`inline-block text-3xl ${iconColor("/calendar")}`}
        />
        <br />
        Calendar
      </Link>
      <Link href="/inbox" id="wd-inbox-link" className={tile("/inbox")}>
        <FaInbox className={`inline-block text-3xl ${iconColor("/inbox")}`} />
        <br />
        Inbox
      </Link>
      <Link href="/labs" id="wd-labs-link" className={tile("/labs")}>
        <FaFlask className={`inline-block text-3xl ${iconColor("/labs")}`} />
        <br />
        Labs
      </Link>
    </nav>
  );
}
