const card = document.querySelector(".box");
const mainLink = card.querySelector(".main-link");
const clickableElements = Array.from(card.querySelectorAll(".clickable")); //we are using 'a' here for simplicity but ideally you should put a class like 'clickable' on every clickable element inside card(a, button) and use that in query selector

clickableElements.forEach((ele) =>
  ele.addEventListener("click", (e) => e.stopPropagation())
);

function handleClick(event) {
  const noTextSelected = !window.getSelection().toString();

  if (noTextSelected) {
    mainLink.click();
  }
}

card.addEventListener("click", handleClick);