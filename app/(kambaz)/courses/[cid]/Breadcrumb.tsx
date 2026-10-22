"use client";
import { usePathname } from "next/navigation";

export default function Breadcrumb({ courseName }: { courseName: string }) {
  const pathname = usePathname() ?? "";
  const section = pathname.split("/")[3] ?? "home";
  const label = section.charAt(0).toUpperCase() + section.slice(1);
  return (
    <h2 id="wd-course-breadcrumb" className="text-xl font-bold mb-2 text-red-600">
      {courseName} &gt; {label}
    </h2>
  );
}
