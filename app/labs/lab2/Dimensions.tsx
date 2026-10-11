export default function Dimensions() {
  return (
    <div id="wd-css-dimensions">
      <h2>Dimension</h2>
      <div>
        <div className="wd-dimension-portrait wd-bg-color-yellow">Portrait</div>
        <div className="wd-dimension-landscape wd-bg-color-blue wd-fg-color-white">
          Landscape
        </div>
        <div className="wd-dimension-square wd-bg-color-red">Square</div>
        <div id="wd-ai-dimension" className="wd-ai-dimension wd-bg-color-yellow">
          This box keeps its declared 120x60 size even with a much longer
          sentence of text inside it.
        </div>
        {/* On my own 2.1.12 */}
        <div id="wd-your-dimension" className="wd-your-dimension wd-bg-color-green wd-fg-color-white">
          This is my own box with a sentence long enough to prove the box
          keeps its fixed size no matter how much text I cram into it.
        </div>
      </div>
    </div>
  );
}