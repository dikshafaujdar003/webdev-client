"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "@/app/labs/lab2/tailwind/utilities.css";
import "../kambaz.css";

export default function AccountNavigation() {
  const pathname = usePathname() ?? "";

  const cls = (href: string) =>
    pathname === href
      ? "list-group-item active border-0"
      : "list-group-item border-0 text-red-600";

  return (
    <div id="wd-account-navigation" className="wd list-group rounded-none text-lg">
      <Link href="/account/signin" id="wd-account-signin-link" className={cls("/account/signin")}>
        Sign in
      </Link>
      <Link href="/account/signup" id="wd-account-signup-link" className={cls("/account/signup")}>
        Sign up
      </Link>
      <Link href="/account/profile" id="wd-account-profile-link" className={cls("/account/profile")}>
        Profile
      </Link>
    </div>
  );
}