// The JSON files are the book's reference data (kambaz.dev/downloads/kambaz-database)
// plus the additions below. JSON has no comments, so they are listed here.
//
// On my own:
//   courses.json      - CS5610 Web Development and CS6120 Natural Language Processing (my courses)
//   modules.json      - lesson L104 "Rockets I Want to Build" in module M101;
//                       modules CM101-CM105 for CS5610 (my Chapter 2 modules);
//                       modules NM1-NM3 for CS6120
//   assignments.json  - CSA1, CSA2, CSA3, CSQ1, CSA9 for CS5610; NLA1-NLA3 for CS6120
//   users.json        - user 1000 (Diksha Faujdar)
//   enrollments.json  - _id 20: user 345 (Steve Rogers) in RS102;
//                       _id 21-25: CS5610 roster and me in RS101;
//                       _id 26-30: CS6120 roster, including me
//
// With AI:
//   courses.json      - "term" field on every course; RS104 Organic Chemistry
//   modules.json      - lesson L204 "Nozzle Design" in module M102
//   assignments.json  - A204 (A4) for RS102
//   enrollments.json  - _id 16: user 567 (Thor Odinson) in RS102
import courses from "./courses.json";
import modules from "./modules.json";
import assignments from "./assignments.json";
import users from "./users.json";
import enrollments from "./enrollments.json";
export { courses, modules, assignments, users, enrollments };
