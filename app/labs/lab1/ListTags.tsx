export default function ListTags() {
  return (
    <div id="wd-lists">
      <h4>List Tags</h4>
      <h5>Ordered List Tag</h5>
      How to make pancakes:
      <ol id="wd-pancakes">
        <li>Mix dry ingredients.</li>
        <li>Add wet ingredients.</li>
        <li>Stir to combine.</li>
        <li>Heat a skillet or griddle.</li>
        <li>Pour batter onto the skillet.</li>
        <li>Cook until bubbly on top.</li>
        <li>Flip and cook the other side.</li>
        <li>Serve and enjoy!</li>
      </ol>
      <h5>Unordered List Tag</h5>
      My favorite books (in no particular order)
      <ul id="wd-my-books">
        <li>Dune</li>
        <li>Lord of the Rings</li>
        <li>Ender&apos;s Game</li>
        <li>Red Mars</li>
        <li>The Forever War</li>
      </ul>

      My favorite recipe (chai):
      <ol id="wd-your-favorite-recipe">
        <li>Boil water with grated ginger and crushed cardamom.</li>
        <li>Add loose black tea leaves and simmer for two minutes.</li>
        <li>Pour in milk and bring back to a gentle boil.</li>
        <li>Strain into a cup and add sugar to taste.</li>
      </ol>

      My favorite books (mine):
      <ul id="wd-your-books">
        <li>Carrie</li>
        <li>IT</li>
        <li>The Mist</li>
      </ul>

      <h5>With AI: sample HTML tags</h5>
      <ul id="wd-ai-html-tags">
        <li>h1 - top level heading</li>
        <li>p - paragraph of text</li>
        <li>div - generic block container</li>
        <li>span - generic inline container</li>
        <li>ol - ordered (numbered) list</li>
        <li>ul - unordered (bulleted) list</li>
        <li>li - a single list item</li>
        <li>table - tabular data</li>
        <li>img - embeds an image</li>
        <li>form - collects user input</li>
        <li>a - creates a hyperlink</li>
      </ul>
    </div>
  );
}
