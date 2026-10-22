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
  const links = [
    { label: "Account", path: "/account", match: "/account", icon: FaRegCircleUser },
    { label: "Dashboard", path: "/dashboard", match: "/dashboard", icon: AiOutlineDashboard },
    { label: "Courses", path: "/dashboard", match: "/courses", icon: FaBookOpen },
    { label: "Calendar", path: "/calendar", match: "/calendar", icon: FaRegCalendar },
    { label: "Inbox", path: "/inbox", match: "/inbox", icon: FaInbox },
    { label: "Labs", path: "/labs", match: "/labs", icon: FaFlask },
  ];
  const isActive = (match: string) =>
    pathname === match || pathname.startsWith(match + "/");

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
      {links.map(({ label, path, match, icon: Icon }) => {
        const active = isActive(match);
        return (
          <Link
            key={label}
            href={path}
            id={`wd-${label.toLowerCase()}-link`}
            aria-current={active ? "page" : undefined}
            className={`block py-3 text-center text-sm no-underline ${
              active ? "active bg-white text-red-600" : "bg-black text-white"
            }`}
          >
            <Icon
              className={`inline-block text-3xl ${
                label === "Account" ? (active ? "text-neutral-500" : "text-white") : "text-red-600"
              }`}
            />
            <br />
            {label}
          </Link>
        );
      })}
    </nav>
  );
}
