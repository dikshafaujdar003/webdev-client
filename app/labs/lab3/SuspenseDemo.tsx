import { Suspense } from "react";

async function SlowMessage() {
  await new Promise((resolve) => setTimeout(resolve, 500));
  return <p>Loaded after a short server delay.</p>;
}

export default function SuspenseDemo() {
  return (
    <div id="wd-suspense">
      <h4>Suspense</h4>
      <Suspense fallback={<p>Loading...</p>}>
        <SlowMessage />
      </Suspense>
    </div>
  );
}
