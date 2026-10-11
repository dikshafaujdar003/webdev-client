export default function Borders() {
  return (
    <div id="wd-css-borders">
      <h2>Borders</h2>
      <p className="wd-border-fat wd-border-red wd-border-solid">
        Solid fat red border
      </p>
      <p className="wd-border-thin wd-border-blue wd-border-dashed">
        Dashed thin blue border
      </p>
      <p id="wd-ai-border" className="wd-border-fat wd-border-dashed wd-border-yellow">
        Dashed fat yellow border
      </p>
      {/* On my own 2.1.9 */}
      <p id="wd-your-border" className="wd-border-fat wd-border-dashed wd-border-yellow">
        This is my own fat, dashed, yellow border, using the same border
        classes as the example above it.
      </p>
    </div>
  );
}