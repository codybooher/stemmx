function ready(fn) {
	if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
		fn();
	} else {
		document.addEventListener('DOMContentLoaded', fn);
	}
}

ready(function() {
	var menuToggle = document.getElementById('menu-toggle'),
			menuElem = document.getElementById('menu'),
			open = false;

	menuToggle.addEventListener('click', function() {
		open = !open
		this.setAttribute("aria-pressed", open)
		this.classList.toggle("open")
		menuElem.classList.toggle("open")
		menuElem.setAttribute("aria-expanded", open)
		document.body.classList.toggle("no-scroll")
	})
})