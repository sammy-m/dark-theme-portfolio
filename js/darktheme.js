function al() {
	// body...
	'use strict';
	alert('hello');
}
window.onload = ()=>{
	var menuBtn = document.getElementById('menuBtn');
	var menu = document.getElementById('menuList');
	var nav = document.getElementsByTagName('nav');
	//navigation links
	var home = document.getElementById('home');
	var about = document.getElementById('about');
	var work = document.getElementById('work');
	var contacts = document.getElementById('contacts');
	//content-scroll
	var phome = document.getElementById('phome');
	var pabout = document.getElementById('pabout');
	var pwork = document.getElementById('pwork');
	var pcontacts = document.getElementById('pcontacts');

	//auto scrolls
	home.addEventListener('click', ()=>{
		phome.scrollIntoView({
			behavior: 'smooth'
		});
	});
	about.addEventListener('click', ()=>{
		pabout.scrollIntoView({
			behavior: 'smooth'
		});
	});
	work.addEventListener('click', ()=>{
		pwork.scrollIntoView({
			behavior: 'smooth'
		});
	});
	contacts.addEventListener('click', ()=>{
		console.log(pcontacts);
		//document.documentElement.scrollTop = pcontacts;
		pcontacts.scrollIntoView({
			behavior: 'smooth'
		});

	});

	console.log(menu);

	menuBtn.addEventListener('click', ()=>{
		//alert(menu.style.display);
		menu.classList.contains('visible-menu') ? setVisible(-1) : setVisible(1);
	});

	function setVisible(cond) {
			if (cond == 1) {
				//menu.style.display = 'block';
				menu.classList.add('visible-menu');
				nav[0].classList.add('nav-tinted');
			} else if (cond == -1) {
				//menu.style.display = '';
				menu.classList.remove('visible-menu');
				if (document.documentElement.scrollTop < nav[0].clientHeight){
				nav[0].classList.remove('nav-tinted');
				}
			}
	}

	if(document.documentElement.scrollTop > nav[0].clientHeight){
			nav[0].classList.add('nav-tinted'); }

	document.addEventListener('scroll', () =>{
		if(document.documentElement.scrollTop > nav[0].clientHeight){
			nav[0].classList.add('nav-tinted');
			//console.log(nav[0]);
		} else if (document.documentElement.scrollTop < nav[0].clientHeight){
			nav[0].classList.remove('nav-tinted');
		}
	});
}