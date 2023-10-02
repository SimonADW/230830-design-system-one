// Accordion section //

const accordion__button = document.getElementById("accordion__button");
const accordion__content = document.getElementById("accordion__content");
const accordion__symbol = document.getElementById("accordion__symbol");

accordion__button.addEventListener("click", () => {
	console.log("testing testin")
	accordion__content.classList.toggle("accordion__content--expanded");
	accordion__symbol.classList.toggle("symbol");
})







