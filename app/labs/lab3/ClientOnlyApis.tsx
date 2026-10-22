"use client";
import { useEffect, useState } from "react";

export default function ClientOnlyApis() {
  const [width, setWidth] = useState<number | null>(null);
  useEffect(() => {
    const update = () => setWidth(window.innerWidth);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  return (
    <div id="wd-client-only-apis">
      <h4>More Client-Only APIs</h4>
      <p>Window width: {width ?? "measuring..."}</p>
    </div>
  );
}
