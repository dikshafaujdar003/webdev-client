export default function AnchorTag() {
  return (
    <>
      <h4>Anchor tag</h4>
      Please{" "}
      <a href="https://www.lipsum.com" id="wd-lipsum">
        click here
      </a>{" "}
      to get dummy text
      <br />
      <a href="https://github.com/dfaujdar/webdev-client" id="wd-github">
        GitHub
      </a>
      <br />
      {/* On your own: a site I visit often */}
      <a href="https://northeastern.instructure.com" id="wd-your-link">
        MDN Web Docs
      </a>
      <br />
      {/* On your own: my own GitHub profile, opens in a new tab */}
      <a
        href="https://github.com/dikshafaujdar003"
        id="wd-your-github"
        target="_blank"
        rel="noreferrer"
      >
        My GitHub profile
      </a>
      <br />
      {/* With AI: sample docs link */}
      <a
        href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table"
        id="wd-ai-link"
      >
        MDN: table element
      </a>
    </>
  );
}
