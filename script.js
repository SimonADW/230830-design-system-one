// Accordion section //

const accordion__button = document.getElementById("accordion__button");
const accordion__content = document.getElementById("accordion__content");
const accordion__symbol = document.getElementById("accordion__symbol");

accordion__button.addEventListener("click", () => {
	console.log("testing testin")
	accordion__content.classList.toggle("accordion__content--expanded");
	accordion__symbol.classList.toggle("symbol");
})


// Toast section 

const toastExample = document.querySelector(".toast__example");
const toastTriggerButton = document.querySelector("#toast__example-button");

toastTriggerButton.addEventListener("click", ()=> {
	toastExample.classList.add("toast__example--visible");
	setTimeout(function() {
		toastExample.classList.remove("toast__example--visible")
	}, 4000);
})







