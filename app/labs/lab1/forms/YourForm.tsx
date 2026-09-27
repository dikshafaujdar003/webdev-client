export default function YourForm() {
  return (
    <div id="wd-your-form-wrapper">
      <h4>Student Profile</h4>
      <form
        id="wd-your-form"
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        {/* Text fields */}
        <label htmlFor="wd-your-form-first-name">First name:</label>
        <input
          type="text"
          id="wd-your-form-first-name"
          defaultValue="Diksha"
        />
        <br />
        <label htmlFor="wd-your-form-last-name">Last name:</label>
        <input
          type="text"
          id="wd-your-form-last-name"
          defaultValue="Faujdar"
        />
        <br />
        <label htmlFor="wd-your-form-password">Password:</label>
        <input
          type="password"
          id="wd-your-form-password"
          defaultValue="password123"
        />
        <br />

        {/* Textarea */}
        <label htmlFor="wd-your-form-bio">Why I am taking this course:</label>
        <br />
        <textarea
          id="wd-your-form-bio"
          cols={40}
          rows={5}
          defaultValue="I'm taking CS 5610 to build strong full stack skills with React, Next.js, and Node.js. Alongside CS 6120 Natural Language Processing, I want to learn how to build and deploy web apps that bring AI features to real users."
        />
        <br />

        {/* Radio buttons - class standing */}
        <label>Class standing:</label>
        <br />
        <input
          type="radio"
          name="your-form-standing"
          id="wd-your-form-standing-freshman"
        />
        <label htmlFor="wd-your-form-standing-freshman">Freshman</label>
        <br />
        <input
          type="radio"
          name="your-form-standing"
          id="wd-your-form-standing-sophomore"
        />
        <label htmlFor="wd-your-form-standing-sophomore">Sophomore</label>
        <br />
        <input
          type="radio"
          name="your-form-standing"
          id="wd-your-form-standing-junior"
        />
        <label htmlFor="wd-your-form-standing-junior">Junior</label>
        <br />
        <input
          type="radio"
          name="your-form-standing"
          id="wd-your-form-standing-senior"
        />
        <label htmlFor="wd-your-form-standing-senior">Senior</label>
        <br />
        <input
          type="radio"
          name="your-form-standing"
          id="wd-your-form-standing-graduate"
          defaultChecked
        />
        <label htmlFor="wd-your-form-standing-graduate">Graduate</label>
        <br />

        {/* Radio buttons - enrollment status */}
        <label>Enrollment status:</label>
        <br />
        <input
          type="radio"
          name="your-form-enrollment"
          id="wd-your-form-enrollment-fulltime"
          defaultChecked
        />
        <label htmlFor="wd-your-form-enrollment-fulltime">Full-time</label>
        <br />
        <input
          type="radio"
          name="your-form-enrollment"
          id="wd-your-form-enrollment-parttime"
        />
        <label htmlFor="wd-your-form-enrollment-parttime">Part-time</label>
        <br />

        {/* Checkboxes */}
        <label>Interests:</label>
        <br />
        <input
          type="checkbox"
          id="wd-your-form-interest-react"
          defaultChecked
        />
        <label htmlFor="wd-your-form-interest-react">React / Next.js</label>
        <br />
        <input
          type="checkbox"
          id="wd-your-form-interest-ai"
          defaultChecked
        />
        <label htmlFor="wd-your-form-interest-ai">AI / NLP</label>
        <br />
        <input
          type="checkbox"
          id="wd-your-form-interest-cloud"
          defaultChecked
        />
        <label htmlFor="wd-your-form-interest-cloud">Cloud deployment</label>
        <br />
        <input type="checkbox" id="wd-your-form-interest-node" />
        <label htmlFor="wd-your-form-interest-node">Node.js / APIs</label>
        <br />

        {/* Dropdown - single select */}
        <label htmlFor="wd-your-form-major">Major:</label>
        <br />
        <select id="wd-your-form-major" defaultValue="CS">
          <option value="CS">Computer Science</option>
          <option value="DS">Data Science</option>
          <option value="AI">Artificial Intelligence</option>
          <option value="IS">Information Systems</option>
        </select>
        <br />

        {/* Dropdown - multiple select */}
        <label htmlFor="wd-your-form-topics">
          Topics I want to deepen this term:
        </label>
        <br />
        <select
          multiple
          id="wd-your-form-topics"
          defaultValue={["NEXTJS", "NLP"]}
        >
          <option value="NEXTJS">Next.js</option>
          <option value="NLP">Natural Language Processing</option>
          <option value="NODE">Node.js</option>
          <option value="MONGODB">MongoDB</option>
          <option value="CLOUD">Cloud / AWS</option>
        </select>
        <br />

        {/* Typed fields */}
        <label htmlFor="wd-your-form-email">School email:</label>
        <input
          type="email"
          id="wd-your-form-email"
          defaultValue="faujdar.d@northeastern.edu"
        />
        <br />
        <label htmlFor="wd-your-form-grad-year">Expected graduation year:</label>
        <input
          type="number"
          id="wd-your-form-grad-year"
          defaultValue={2027}
          min={2026}
          max={2030}
        />
        <br />
        <label htmlFor="wd-your-form-start-date">Program start date:</label>
        <input
          type="date"
          id="wd-your-form-start-date"
          defaultValue="2025-09-02"
        />
        <br />
        <label htmlFor="wd-your-form-excitement">
          How excited am I about this course (0-10):
        </label>
        <input
          type="range"
          id="wd-your-form-excitement"
          defaultValue={9}
          min={0}
          max={10}
        />
        <br />

        {/* Buttons */}
        <button id="wd-your-form-save" type="submit">
          Save
        </button>
        <button id="wd-your-form-cancel" type="button">
          Cancel
        </button>
      </form>
    </div>
  );
}