"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "@/app/labs/lab2/tailwind/utilities.css";
import "../kambaz.css";
import { useAccountContext } from "./AccountContext";

export default function AccountNavigation() {
  const { currentUser } = useAccountContext();
  const links = currentUser
    ? (["profile"] as const)
    : (["signin", "signup"] as const);
  const pathname = usePathname() ?? "";

  const cls = (href: string) =>
    pathname === href
      ? "list-group-item active border-0"
      : "list-group-item border-0 text-red-600";

  return (
    <div id="wd-account-navigation" className="wd list-group rounded-none text-lg">
      {links.map((link) => (
        <Link
          key={link}
          href={`/account/${link}`}
          id={`wd-account-${link}-link`}
          className={cls(`/account/${link}`)}
        >
          {link === "signin"
            ? "Sign in"
            : link === "signup"
              ? "Sign up"
              : "Profile"}
        </Link>
      ))}
    </div>
  );
}
