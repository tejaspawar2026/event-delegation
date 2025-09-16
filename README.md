# Description

This project demonstrates event delegation in JavaScript using addEventListener(). Event delegation is a technique where a single event listener is added to a parent element to manage events triggered by its child elements. This is especially useful for dynamically generated elements or improving performance by reducing the number of event listeners in the DOM.

# Code Example

/* JS */

document.getElementById("grandparent").addEventListener("click", (event) => {
  alert("Grandparent clicked!");
  console.log("Clicked element:", event.target);
});


/* HTML */

<div id="grandparent">
  <div class="parent">
    <div class="child">Click Me</div>
  </div>
</div>


# How It Works

- The click event listener is added only to the #grandparent element.
- When any of its child elements such as .child, .parent are clicked, the event bubbles up to #grandparent.
- The event listener on #grandparent will catch the event.
- We can use event.target to identify which child element was actually clicked.