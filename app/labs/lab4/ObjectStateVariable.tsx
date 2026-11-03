"use client";

import { useState } from "react";

export default function ObjectStateVariable() {
  // On my own: city
  const [person, setPerson] = useState({ name: "Peter", age: 24, city: "Boston" });
  return (
    <div id="wd-object-state-variables">
      <h2>Object State Variables</h2>
      <pre>{JSON.stringify(person, null, 2)}</pre>
      <input
        className="mb-2 block w-full max-w-sm rounded border border-neutral-300 px-3 py-1.5"
        value={person.name}
        onChange={(e) => setPerson({ ...person, name: e.target.value })}
        id="wd-person-name"
      />
      <input
        type="number"
        className="mb-2 block w-full max-w-sm rounded border border-neutral-300 px-3 py-1.5"
        value={person.age}
        onChange={(e) =>
          setPerson({ ...person, age: parseInt(e.target.value) || 0 })
        }
        id="wd-person-age"
      />
      {/* On my own (the With AI prompt asks for this same city field, so it is not repeated) */}
      <input
        className="block w-full max-w-sm rounded border border-neutral-300 px-3 py-1.5"
        value={person.city}
        onChange={(e) => setPerson({ ...person, city: e.target.value })}
        id="wd-person-city"
      />
      <hr />
    </div>
  );
}
