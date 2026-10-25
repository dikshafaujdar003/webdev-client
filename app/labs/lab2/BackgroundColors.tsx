export default function BackgroundColors() {
  return (
    <div id="wd-css-background-colors">
      <h2 className="wd-bg-color-blue wd-fg-color-white">Background color</h2>
      <p className="wd-bg-color-red wd-fg-color-black">
        This background of this paragraph is red but{" "}
        <span className="wd-bg-color-green wd-fg-color-white">
          the background of this text is green and the foreground white
        </span>
      </p>
      <p id="wd-ai-bg" className="wd-bg-color-yellow wd-fg-color-black">
        This paragraph has a yellow background with dark text so it stays
        readable.
      </p>
      {/* On my own 2.1.8 */}
      <p id="wd-your-bg" className="wd-bg-color-yellow wd-fg-color-black">
        This is my own yellow-background paragraph. I kept the text dark
        here too, so it is easy to read.
      </p>
    </div>
  );
}