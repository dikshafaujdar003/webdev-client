"use client";
import { useState } from "react";
import { useParams } from "next/navigation";
import { FaUserCircle } from "react-icons/fa";
import * as db from "../../../../database";
import { emptyUser, type User } from "../../../../account/AccountContext";
import { useEnrollmentsStore } from "../../../../store/enrollmentsStore";

// On my own (§4.10.7): the roster reads the enrollments store, and new people start from emptyUser
export default function PeopleTable() {
  const { cid } = useParams();
  const courseId = String(cid);
  const enrollments = useEnrollmentsStore((state) => state.enrollments);
  const enroll = useEnrollmentsStore((state) => state.enroll);
  const unenroll = useEnrollmentsStore((state) => state.unenroll);
  const [users, setUsers] = useState<User[]>(db.users);
  const [newUser, setNewUser] = useState<User>(emptyUser);
  const enrolled = users.filter((usr) =>
    enrollments.some(
      (enrollment) => enrollment.user === usr._id && enrollment.course === courseId,
    ),
  );
  const addPerson = () => {
    if (!newUser.firstName.trim() && !newUser.lastName.trim()) return;
    const user = { ...newUser, _id: crypto.randomUUID() };
    setUsers([...users, user]);
    enroll(user._id, courseId);
    setNewUser(emptyUser);
  };
  const input = "rounded border border-neutral-300 px-2 py-1 text-sm";
  return (
    <div id="wd-people-table" className="overflow-x-auto">
      <div id="wd-add-person" className="mb-3 flex flex-wrap items-center gap-2">
        <input
          id="wd-new-person-first-name"
          placeholder="First name"
          className={input}
          value={newUser.firstName}
          onChange={(e) => setNewUser({ ...newUser, firstName: e.target.value })}
        />
        <input
          id="wd-new-person-last-name"
          placeholder="Last name"
          className={input}
          value={newUser.lastName}
          onChange={(e) => setNewUser({ ...newUser, lastName: e.target.value })}
        />
        <select
          id="wd-new-person-role"
          className={input}
          value={newUser.role}
          onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
        >
          <option value="STUDENT">Student</option>
          <option value="TA">TA</option>
          <option value="FACULTY">Faculty</option>
        </select>
        <button
          type="button"
          id="wd-add-person-click"
          onClick={addPerson}
          className="rounded bg-red-600 px-3 py-1.5 text-sm font-medium text-white"
        >
          + People
        </button>
      </div>
      <table className="w-full border-collapse text-left text-sm">
        <thead>
          <tr className="border-b border-neutral-300">
            <th className="p-2">Name</th>
            <th className="p-2">Login ID</th>
            <th className="p-2">Section</th>
            <th className="p-2">Role</th>
            <th className="p-2">Last Activity</th>
            <th className="p-2">Total Activity</th>
            <th className="p-2"></th>
          </tr>
        </thead>
        <tbody>
          {enrolled.map((user) => (
            <tr key={user._id} className="odd:bg-neutral-50">
              <td className="wd-full-name p-2 text-nowrap">
                <FaUserCircle className="me-2 inline text-4xl text-neutral-500" />
                <span className="wd-first-name">{user.firstName}</span>{" "}
                <span className="wd-last-name">{user.lastName}</span>
              </td>
              <td className="wd-login-id p-2">{user.loginId}</td>
              <td className="wd-section p-2">{user.section}</td>
              <td className="wd-role p-2">{user.role}</td>
              <td className="wd-last-activity p-2">{user.lastActivity}</td>
              <td className="wd-total-activity p-2">{user.totalActivity}</td>
              <td className="p-2">
                <button
                  type="button"
                  className="wd-unenroll-person rounded bg-red-600 px-2 py-0.5 text-xs text-white"
                  onClick={() => unenroll(user._id, courseId)}
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
