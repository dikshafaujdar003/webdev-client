import Link from "next/link";

export default async function AssignmentEditor({
  params,
}: {
  params: Promise<{ cid: string }>;
}) {
  const { cid } = await params;
  const input = "w-full rounded border border-neutral-300 px-3 py-2";
  const label = "block mb-1 font-medium";
  return (
    <div id="wd-assignments-editor" className="max-w-2xl">
      <div className="mb-3">
        <label htmlFor="wd-name" className={label}>
          Assignment Name
        </label>
        <input id="wd-name" defaultValue="A1 - ENV + HTML" className={input} />
      </div>

      <div className="mb-3">
        <label htmlFor="wd-description" className={label}>
          Description
        </label>
        <textarea
          id="wd-description"
          rows={5}
          defaultValue="The assignment is available online Submit a link to the landing page of your Web application running on Vercel."
          className={input}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="wd-points" className={label}>
          Points
        </label>
        <input id="wd-points" defaultValue={100} className={input} />
      </div>

      <div className="mb-3">
        <label htmlFor="wd-group" className={label}>
          Assignment Group
        </label>
        <select id="wd-group" defaultValue="ASSIGNMENTS" className={input}>
          <option value="ASSIGNMENTS">ASSIGNMENTS</option>
          <option value="QUIZZES">QUIZZES</option>
          <option value="EXAMS">EXAMS</option>
          <option value="PROJECT">PROJECT</option>
        </select>
      </div>

      <div className="mb-3">
        <label htmlFor="wd-display-grade-as" className={label}>
          Display Grade as
        </label>
        <select
          id="wd-display-grade-as"
          defaultValue="PERCENTAGE"
          className={input}
        >
          <option value="PERCENTAGE">Percentage</option>
          <option value="POINTS">Points</option>
          <option value="LETTER">Letter Grade</option>
        </select>
      </div>

      <div className="mb-3">
        <label htmlFor="wd-submission-type" className={label}>
          Submission Type
        </label>
        <select id="wd-submission-type" defaultValue="ONLINE" className={input}>
          <option value="ONLINE">Online</option>
          <option value="ON_PAPER">On Paper</option>
          <option value="NO_SUBMISSION">No Submission</option>
        </select>

        <div className="mt-3 rounded border border-neutral-300 p-3">
          <div className="mb-2 font-medium">Online Entry Options</div>
          <div className="flex items-center gap-2 mb-1">
            <input type="checkbox" id="wd-text-entry" defaultChecked />
            <label htmlFor="wd-text-entry">Text Entry</label>
          </div>
          <div className="flex items-center gap-2 mb-1">
            <input type="checkbox" id="wd-website-url" defaultChecked />
            <label htmlFor="wd-website-url">Website URL</label>
          </div>
          <div className="flex items-center gap-2 mb-1">
            <input type="checkbox" id="wd-media-recordings" />
            <label htmlFor="wd-media-recordings">Media Recordings</label>
          </div>
          <div className="flex items-center gap-2 mb-1">
            <input type="checkbox" id="wd-student-annotation" />
            <label htmlFor="wd-student-annotation">Student Annotation</label>
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox" id="wd-file-upload" />
            <label htmlFor="wd-file-upload">File Uploads</label>
          </div>
        </div>
      </div>

      <div className="mb-3">
        <label htmlFor="wd-assign-to" className={label}>
          Assign to
        </label>
        <input id="wd-assign-to" defaultValue="Everyone" className={input} />
      </div>

      <div className="mb-3">
        <label htmlFor="wd-due-date" className={label}>
          Due
        </label>
        <input
          type="date"
          id="wd-due-date"
          defaultValue="2026-05-13"
          className={input}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="wd-available-from" className={label}>
          Available from
        </label>
        <input
          type="date"
          id="wd-available-from"
          defaultValue="2026-05-06"
          className={input}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="wd-available-until" className={label}>
          Until
        </label>
        <input
          type="date"
          id="wd-available-until"
          defaultValue="2026-05-20"
          className={input}
        />
      </div>

      <hr className="my-4" />

      <div className="flex justify-end gap-2">
        <Link
          href={`/courses/${cid}/assignments`}
          id="wd-cancel"
          className="rounded border border-neutral-300 px-4 py-2 text-sm no-underline"
        >
          Cancel
        </Link>
        <Link
          href={`/courses/${cid}/assignments`}
          id="wd-save"
          className="rounded bg-red-600 px-4 py-2 text-sm font-medium text-white no-underline"
        >
          Save
        </Link>
      </div>
    </div>
  );
}