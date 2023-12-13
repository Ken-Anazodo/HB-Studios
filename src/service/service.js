gsap.registerPlugin(ScrollTrigger);


// NAVIGATION (Display On Scroll Up)
const showAnim = gsap.from('.nav-sec-container', { 
	yPercent: -100,
	paused: true,
	duration: 0.2
  }).progress(1);
  
  ScrollTrigger.create({
	start: "top top",
	end: 99999,
	onUpdate: (self) => {
	  self.direction === -1 ? showAnim.play() : showAnim.reverse()
	}
  });

  

  // OPEN AND CLOSE NAV
let menu = document.getElementById('menu-wrapper');

const closeMenu = () => {
	menu.style.top = "-150vh";
}

const openMenu = () => {
	menu.style.top = "0";
}



// CURSOR ANIMATION
let innerCursor = document.querySelector(".inner-cursor");
let outerCursor = document.querySelector(".outer-cursor");

document.addEventListener("mousemove", moveCursor);

function moveCursor(e) {
	let x = e.clientX;
	let y = e.clientY;

	console.log(x, y)

	innerCursor.style.left = `${x}px`;
	innerCursor.style.top = `${y}px`;
	outerCursor.style.left = `${x}px`;
	outerCursor.style.top = `${y}px`;
}

let links = Array.from(document.querySelectorAll("a"));
let navConnect = Array.from(document.querySelectorAll(".navConnect"));
let circleText = document.querySelector(".circle");
// let menuCursor = document.querySelector(".menuCursor");
let closeDiv = document.querySelector(".close-icon");
let closeCursor = document.querySelector(".closeCursor");

links.forEach(link => {
	link.addEventListener("mouseover", () =>{
		innerCursor.classList.add("grow");
		outerCursor.style.display ='none';
	})

	link.addEventListener("mouseleave", () =>{
		innerCursor.classList.remove("grow");
		outerCursor.style.display = 'block';
	})
})

navConnect.forEach(navConnect => {
	navConnect.addEventListener("mouseover", () =>{
		innerCursor.classList.add("grow");
		outerCursor.style.display ='none';
	})

	navConnect.addEventListener("mouseleave", () =>{
		innerCursor.classList.remove("grow");
		outerCursor.style.display = 'block';
	})
})


// CIRCLE ROTATE TEXT
const text = document.querySelector('.text p');
text.innerHTML = text.innerText.split('').map(
	(char, i) =>
	`<span style="transform:rotate(${i * 8.3}deg)">${char}</span>`
).join('');



// OFFERINGS

// PERSONAL STYLE
let stylePage = document.getElementById('personalStylePage');
let closeSign = document.getElementById('ex');
let readStylePage = document.getElementById('pstyle-readMore')


let closePersonalStylePage = () => {
	stylePage.style.right = "100vw";
	closeSign.style.display = "none";
}

let openPersonalStylePage = () => {
	stylePage.style.right = "0";
	closeSign.style.display = "block";
}



// GROOMING & APPEARANCE
let groomingPage = document.getElementById('groomingPage');
let closeSign1 = document.getElementById('ex1');
let readGroomingPage = document.getElementById('grooming-readMore')


let closeGroomingPage = () => {
	groomingPage.style.right = "100vw";
	closeSign1.style.display = "none";
}

let openGroomingPage = () => {
	groomingPage.style.right = "0";
	closeSign1.style.display = "block";
}




// PERSONAL BRANDING
let personalBrandingPage = document.getElementById('personalBrandingPage');
let closeSign2 = document.getElementById('ex2');
let readpersonalBrandingPage = document.getElementById('grooming-readMore')


let closePersonalBrandingPage = () => {
	personalBrandingPage.style.right = "100vw";
	closeSign2.style.display = "none";
}

let openPersonalBrandingPage = () => {
	personalBrandingPage.style.right = "0";
	closeSign2.style.display = "block";
}




// PERSONAL BRANDING
let colorAnalysisPage = document.getElementById('colorAnalysisPage');
let closeSign3 = document.getElementById('ex3');
let readcolorAnalysisPage = document.getElementById('grooming-readMore')


let closeColorAnalysisPage = () => {
	colorAnalysisPage.style.right = "100vw";
	closeSign3.style.display = "none";
}

let openColorAnalysisPage = () => {
	colorAnalysisPage.style.right = "0";
	closeSign3.style.display = "block";
}
