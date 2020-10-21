function toggleMenu() {
	var icon = document.getElementById('menuIcon');
	icon.classList.toggle('fa-bars');
	icon.classList.add('fa-times');

	var menu = document.getElementById('mobileMenu');
	menu.classList.toggle('hidden');
}

// http://joelcalifa.com/blog/revisiting-visited
localStorage.setItem('visited-' + window.location.pathname, true);
var links = document.getElementsByTagName('a');
for (i = 0; i < links.length; i++) {
	var link = links[i];
	if (
		(link.host == window.location.host && localStorage.getItem('visited-' + link.pathname)) ||
		localStorage.getItem('visited-' + link.pathname + '/')
	) {
		link.dataset.visited = true;
	}
}

const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
if (prefersDarkScheme.matches) {
	document.body.classList.add('dark-theme');
} else {
	document.body.classList.remove('dark-theme');
}
