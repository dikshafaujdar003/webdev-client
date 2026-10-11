export default function ForegroundColors() {
  return (
    <div id="wd-css-colors">
      <h2>Colors</h2>
      <h3 className="wd-fg-color-blue">Foreground color</h3>
      <p className="wd-fg-color-red">
        The text in this paragraph is red but{" "}
        <span className="wd-fg-color-green">this text is green</span>
      </p>
      <p id="wd-ai-fg" className="wd-fg-color-blue">
        This whole sentence is blue, except{" "}
        <span className="wd-fg-color-black">this part, which is black</span>.
      </p>
      {/* On my own 2.1.7 */}
      <p id="wd-your-fg" className="wd-fg-color-blue">
        This is my own sentence, also blue, except{" "}
        <span className="wd-fg-color-black">this part, which I made black</span>.
      </p>
    </div>
  );
}