import Link from "next/link";
import "./index.css";
import ForegroundColors from "./ForegroundColors";
import BackgroundColors from "./BackgroundColors";
import Borders from "./Borders";
import Padding from "./Padding";
import Margins from "./Margins";
import BoxModel from "./BoxModel";
import Corners from "./Corners";
import Dimensions from "./Dimensions";
import Display from "./Display";
import Positions from "./Positions";
import Zindex from "./Zindex";
import Float from "./Float";
import GridLayout from "./GridLayout";
import Flex from "./Flex";
import MediaQueriesDemo from "./MediaQueriesDemo";
import ReactIconsSampler from "./ReactIconsSampler";

export default function Lab2() {
  return (
    <div id="wd-lab2">
      <h2>Lab 2 - Cascading Style Sheets</h2>
      <p>
        <Link href="/labs/lab2/tailwind">Tailwind CSS sub-lab (§2.3)</Link>
      </p>

      <h3>Styling with the STYLE attribute</h3>
      <p style={{ backgroundColor: "blue", color: "white" }}>
        Style attribute allows configuring look and feel right on the
        element. Although it&apos;s very convenient it is considered bad
        practice and you should avoid using the style attribute
      </p>
      {/* On my own 2.1.1 */}
      <p style={{ backgroundColor: "green", color: "yellow" }}>
        This is my own paragraph using the style attribute directly, with a
        green background and yellow text, just to show I can set it inline
        even though it&apos;s not best practice.
      </p>

      <div id="wd-css-id-selectors">
        <h3>ID selectors</h3>
        <p id="wd-id-selector-1">
          Instead of changing the look and feel of all the
          elements of the same name, e.g., P, we can refer to a
          specific element by its ID
        </p>
        <p id="wd-id-selector-2">
          Here&apos;s another paragraph using a different ID and a
          different look and feel
        </p>
        {/* On my own 2.1.3 */}
        <p id="wd-id-selector-3">
          This is my own third paragraph. It has its own id, so it gets its
          own look that is separate from the two id-styled examples above
          it.
        </p>
      </div>

      <div id="wd-css-class-selectors">
        <h3>Class selectors</h3>
        <p className="wd-class-selector">
          Instead of using IDs to refer to elements, you can use an
          element&apos;s CLASS attribute
        </p>
        <h4 className="wd-class-selector">
          This heading has same style as paragraph above
        </h4>
        {/* On my own 2.1.4 */}
        <p className="wd-your-class">
          This paragraph and the heading right below it both share a class
          that I made myself, so even though one is a paragraph and the
          other is a heading, they end up looking exactly the same.
        </p>
        <h4 className="wd-your-class">
          This heading is using that same personal class as the paragraph
          above.
        </h4>
      </div>

      <div id="wd-css-document-structure">
        <div className="wd-selector-1">
          <h3>Document structure selectors</h3>
          <div className="wd-selector-2">
            Selectors can be combined to refer elements in particular
            places in the document
            <p className="wd-selector-3">
              This paragraph&apos;s red background is referenced as
              <br />
              .selector-2 .selector3
              <br />
              meaning the descendant of some ancestor.
              <br />
              <span className="wd-selector-4">
                Whereas this span is a direct child of its parent
              </span>
              <br />
              You can combine these relationships to create specific
              styles depending on the document structure
              <br />
              <span className="wd-ai-selector-5">
                This extra span is still a descendant of .wd-selector-1,
                just styled with a different rule
              </span>
              <br />
              {/* On my own 2.1.5 */}
              <span className="wd-your-selector-5">
                This is my own span, added here so I could write a new
                descendant selector rule of my own, in addition to the
                document-structure examples above.
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* 2.1.6 - tag vs class vs id specificity, id rule should win */}
      <p id="wd-ai-cascade" className="wd-ai-cascade">
        The id rule wins this three-way conflict between tag, class, and id.
      </p>
      {/* On my own 2.1.6 */}
      <p id="wd-your-cascade" className="wd-your-cascade">
        I made my own version of this three-way conflict too, between a tag
        rule, a class rule, and an id rule, and the id rule wins here as
        well, just like it did in the example above.
      </p>

      <ForegroundColors />
      <BackgroundColors />
      <Borders />
      <Padding />
      <Margins />
      <BoxModel />
      <Corners />
      <Dimensions />
      <Display />
      <Positions />
      <Zindex />
      <Float />
      <GridLayout />
      <Flex />
      <MediaQueriesDemo />
      <ReactIconsSampler />
    </div>
  );
}