import React from "react";
// import { format } from "date-fns";
import ExampleComponent from "./ExampleComponent";
import TestComponent from "./TestComponent";

// Add your code own within the return statement
function App() {
  return (
    <div className="App">
      <h1>Now</h1>
      <p className="App-intro">
      As I've been trying to do my due diligence and learn practical matters of computer science, I hadn't spent much time learning about CSS. I knew basic styling verbage, but as I learned more and more I was delighted by the power of CSS making things happen without the need for JavaScript. Using pseudoselectors, you can essentially circumvent the need for callbacks, and script some pretty neat functionality. For example, the :hover pseudoselector combined with <span>this.whatever</span> kung-fu, and you can have some really nifty events occur on your page.
I am learning that the key to harnessing the power of CSS is making use of varying levels of specificity; the potential for reusable code and elegance in form is dizzying when looking at the code of those who know their stuff. In particular, one blog post from Kyle Brumm on mouseover effects left me furiously googling and scratchiIng my head.
<a href='https://codepen.io/kjbrum/pen/wBBLXx'> You can see the code here. </a>
In this post, he displays some awesome features using (mostly) CSS (the exception being button six, which has a bunch of javascript accompanying).
On line 61, the author sets rules for every element that starts with 'btn-', and effortlessly handles potentially redundant code. Right off the bat, I noticed that there was strange shorthand using the ampersand as a pseudoselector. &:before and &:after make clear two stages of animation, and here is where you can attempt to decipher the internal workings of the nifty buttons.
I have only just started down this rabbit-hole of knowledge, and I am excited to try out these tricks on projects of my own.
      </p>
      <ExampleComponent />
      <TestComponent />
    </div>
  );
}

export default App;
