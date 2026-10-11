export default function Padding() {
  return (
    <div id="wd-css-paddings">
      <h2>Padding</h2>
      <div className="wd-padded-top-left wd-border-fat wd-border-red wd-border-solid wd-bg-color-yellow">
        Padded top left
      </div>
      <div className="wd-padded-bottom-right wd-border-fat wd-border-blue wd-border-solid wd-bg-color-yellow">
        Padded bottom right
      </div>
      <div className="wd-padding-fat wd-border-fat wd-border-yellow wd-border-solid wd-bg-color-blue wd-fg-color-white">
        Padded all around
      </div>
      <div
        id="wd-ai-padded"
        className="wd-padding-top-only wd-border-fat wd-border-red wd-border-solid wd-bg-color-yellow"
      >
        Padded on top only
      </div>
      {/* On my own 2.1.10 */}
      <div
        id="wd-your-padded"
        className="wd-padding-fat wd-border-fat wd-border-blue wd-border-solid wd-bg-color-green wd-fg-color-white"
      >
        This is my own box, padded fat all around using the same padding
        class as the earlier example, just with different border and
        background colors.
      </div>
    </div>
  );
}