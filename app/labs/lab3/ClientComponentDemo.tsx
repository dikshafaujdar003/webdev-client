"use client";
import { usePathname } from "next/navigation";

export default function ClientComponentDemo() {
  const pathname = usePathname() ?? "";
  return (
    <div id="wd-client-component">
      <h4>Client Component</h4>
      <p>Current pathname: {pathname}</p>
      <p>Pathname length: {pathname.length}</p>
    </div>
  );
}
