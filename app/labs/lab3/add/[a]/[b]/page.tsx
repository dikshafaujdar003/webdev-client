import Link from "next/link";

export default async function AddPathParameters({
  params,
}: {
  params: Promise<{ a: string; b: string }>;
}) {
  const { a, b } = await params;
  return (
    <div id="wd-add-path-parameters">
      <h4>Add Path Parameters</h4>
      {a} + {b} = {Number(a) + Number(b)}
      <br />
      <Link href="/labs/lab3">Back to Lab 3</Link>
    </div>
  );
}
