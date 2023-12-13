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
let socialNetwork = Array.from(document.querySelectorAll(".social"));
let circleText = document.querySelector(".circle");
let closeDiv = document.querySelector(".close-icon");
let closeCursor = document.querySelector(".closeCursor");
let letsTalkDiv = document.querySelector(".talk");
let emoji = document.querySelector(".emoji");

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

socialNetwork.forEach(social => {
	social.addEventListener("mouseover", () =>{
		innerCursor.classList.add("growLink");
		outerCursor.style.display ='none';
	})

	social.addEventListener("mouseleave", () =>{
		innerCursor.classList.remove("growLink");
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


// EMOJI ANIMATION
let mouseX;
let mouseY;


window.addEventListener('mousemove', e => {
	mouseX = e.clientX;
	mouseY = e.clientY;

	gsap.to(cursor, 0.3, {x: mouseX, y: mouseY})
})

letsTalkDiv.addEventListener("mouseenter", () => {
	gsap.to(emoji, 1, 
		{ 
			scale: 1, 
			opacity: 1, 
			top: "-5vw", 
			left: "-5vw", 
			rotate: 0,
			ease: Elastic.easeOut.config(1, 0.3) 
		})

		emoji.style.display ='block';
})

letsTalkDiv.addEventListener("mousemove", () => {
	gsap.to(emoji, 1, 
		{ 
			x: mouseX,
			y: mouseY
		})
})

letsTalkDiv.addEventListener("mouseleave", () => {
	gsap.to(emoji, 0.2, 
		{ 
			scale: 0, 
			opacity: 0, 
			top: "0.1vw", 
			left: "-0.5vw", 
			rotate: 45
		})

		emoji.style.display ='none';
})