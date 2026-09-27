export default function Images() {
  return (
    <div id="wd-images">
      <h4>Image tag</h4>
      Loading an image from the internet:
      <br />
      <img
        id="wd-starship"
        width="400px"
        alt="Starship"
        src="https://www.staradvertiser.com/wp-content/uploads/2021/08/web1_Starship-gap2.jpg"
      />
      <br />
      Loading a local image:
      <br />
      <img
        id="wd-teslabot"
        src="/images/teslabot.jpg"
        height="200px"
        alt="Tesla Bot (Optimus) humanoid robot"
      />
      <br />
      On your own: an image that matters to me:
      <br />
      <img
        id="wd-your-image"
        src="https://placehold.co/300x200?text=Boston+Skyline"
        width="300px"
        alt="Boston skyline near Northeastern University"
      />
      <br />
      With AI: extra sample image:
      <br />
      <img
        id="wd-ai-image"
        src="https://www.nasa.gov/wp-content/uploads/2023/03/pia25476.jpg"
        width="200px"
        alt="Sample NASA image"
      />
    </div>
  );
}
