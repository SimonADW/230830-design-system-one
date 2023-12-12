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

// Scroll to top button

const scrollToTopButton = document.querySelector(".to-top-link");

const displayButtonOnScroll = ()=> {
	if (window.scrollY > 800) {
		scrollToTopButton.style.display = "flex";
	} else {
		scrollToTopButton.style.display = "none";
	}
}

const scrollToTopSmooth = ()=> {
	window.scroll({
		top: 0,
		left: 0,
		behavior: "smooth",
	});
};

window.addEventListener("scroll", displayButtonOnScroll);
scrollToTopButton.addEventListener("click", scrollToTopSmooth);







