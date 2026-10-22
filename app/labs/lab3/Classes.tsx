import "./index.css";

export default function Classes() {
  const color = "blue";
  const dangerous = true;
  return (
    <div id="wd-classes">
      <h2>Classes</h2>
      <div className="wd-box wd-bg-yellow wd-fg-black">Yellow background</div>
      <div className="wd-box wd-bg-blue wd-fg-black">Blue background</div>
      <div className="wd-box wd-bg-red wd-fg-black">Red background</div>
      <div className={`wd-box wd-bg-${color} wd-fg-black`}>Dynamic blue background</div>
      <div className={`wd-box ${dangerous ? "wd-bg-red" : "wd-bg-green"} wd-fg-black`}>
        Dangerous background
      </div>
      <div className="wd-box wd-bg-purple wd-fg-black">My own purple background</div>
      <hr />
    </div>
  );
}
