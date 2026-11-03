"use client";
import "@/app/labs/lab2/tailwind/utilities.css";
import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { FaPlus, FaSearch } from "react-icons/fa";
import AssignmentItem from "./AssignmentItem";
import { useAssignmentsStore } from "../../../store/assignmentsStore";

// On my own (§4.10.6): assignments come from the store, filtered by cid
export default function Assignments() {
  const { cid } = useParams();
  const courseId = String(cid);
  const router = useRouter();
  const allAssignments = useAssignmentsStore((state) => state.assignments);
  const deleteAssignment = useAssignmentsStore((state) => state.deleteAssignment);
  const assignments = allAssignments.filter(
    (assignment) => assignment.course === courseId,
  );
  const [pendingDelete, setPendingDelete] = useState<string | null>(null);
  const pendingTitle = assignments.find((a) => a._id === pendingDelete)?.title;
  return (
    <div id="wd-assignments">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
        <div className="relative">
          <FaSearch className="pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 text-neutral-500" />
          <input
            placeholder="Search for Assignments"
            id="wd-search-assignment"
            className="rounded border py-1.5 pr-3 pl-9 text-sm"
          />
        </div>
        <div className="flex gap-2">
          <button
            id="wd-add-assignment-group"
            type="button"
            className="inline-flex items-center gap-1 rounded border px-3 py-1.5 text-sm"
          >
            <FaPlus /> Group
          </button>
          <button
            id="wd-add-assignment"
            type="button"
            onClick={() => router.push(`/courses/${courseId}/assignments/new`)}
            className="inline-flex items-center gap-1 rounded bg-red-600 px-3 py-1.5 text-sm font-medium text-white"
          >
            <FaPlus /> Assignment
          </button>
        </div>
      </div>
      <h3
        id="wd-assignments-title"
        className="mb-3 flex items-center justify-between rounded bg-neutral-200 p-3 text-lg"
      >
        <span>ASSIGNMENTS 40% of Total</span>
        <button type="button" className="rounded border bg-white px-2 py-0.5 text-sm">
          <FaPlus />
        </button>
      </h3>
      <ul id="wd-assignment-list" className="m-0 list-none p-0">
        {assignments.map((assignment) => (
          <AssignmentItem
            key={assignment._id}
            cid={courseId}
            aid={assignment._id}
            title={assignment.title}
            details={`Multiple Modules | Not available until ${assignment.available} | Due ${assignment.due} | ${assignment.points} pts`}
            onDelete={() => setPendingDelete(assignment._id)}
          />
        ))}
      </ul>
      {pendingDelete && (
        <div
          id="wd-delete-assignment-dialog"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
        >
          <div className="w-full max-w-sm rounded-lg bg-white p-4 shadow-lg">
            <p className="mb-4">
              Are you sure you want to remove <strong>{pendingTitle}</strong>?
            </p>
            <div className="flex justify-end gap-2">
              <button
                type="button"
                id="wd-delete-assignment-no"
                className="rounded border border-neutral-300 px-3 py-1.5 text-sm"
                onClick={() => setPendingDelete(null)}
              >
                No
              </button>
              <button
                type="button"
                id="wd-delete-assignment-yes"
                className="rounded bg-red-600 px-3 py-1.5 text-sm font-medium text-white"
                onClick={() => {
                  deleteAssignment(pendingDelete);
                  setPendingDelete(null);
                }}
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}