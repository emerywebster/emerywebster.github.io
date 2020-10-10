function toggleMenu() {
	var icon = document.getElementById('menuIcon');
	icon.classList.toggle('fa-bars');
	icon.classList.add('fa-times');

	var menu = document.getElementById('mobileMenu');
	menu.classList.toggle('hidden');
}
