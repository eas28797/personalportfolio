let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('nav a');

window.onscroll = () => {
	sections.forEach(sec => {
		let top = window.scrollY;
		let offset = sec.offsetTop - 150;
		let height = sec.offsetHeight;
		let id = sec.getAttribute('id');
		
		if (top > offset && top < offset + height) {
			navLinks.forEach(links => {
				links.classList.remove('active');
				document.querySelector('nav a [href*=' + id + ']').classList.add("active");
			});
			
		};
		
	});
	
};
var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}

const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');


openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);
function show(){
	mainMenu.style.display='flex';
	mainMenu.style.top='0';
	
}

function close(){
	mainMenu.style.top = '-100%';
}
