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
let logoAndCloseMenu = document.getElementById('logoAndClose');

const closeMenu = () => {
	menu.style.top = "-150vh";
	logoAndCloseMenu.style.display = "none";
}

const openMenu = () => {
	menu.style.top = "0";
	logoAndCloseMenu.style.display = "flex";
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
let texts = Array.from(document.querySelectorAll(".text p"));

texts.forEach(text => {
	text.innerHTML = text.innerText.split('').map(
		(char, i) =>
		`<span style="transform:rotate(${i * 8.3}deg)">${char}</span>`
	).join('');
})


// Circle Cursor Change
circleText.addEventListener("mouseover", () =>{
	innerCursor.classList.add("grow");
	outerCursor.style.display = 'none';
})

circleText.addEventListener("mouseleave", () =>{
	innerCursor.classList.remove("grow");
	outerCursor.style.display = 'block';
})




// First Video Display
gsap.to('.iframeCont1', {width: '100%', duration: 10, ease: 'power2.easeInOut', tansition: 2, 
  scrollTrigger: {
    trigger: '.iframeCont1',
    start: "10px 80%",
    scrub: true
  }}, .2)


let tl= gsap.timeline();
tl.fromTo('.memorable-brand', {y: '5vw'}, {y: 0, ease: "power3.easeOut", delay: 0.5, transition: 1, duration: 1, 
    scrollTrigger:{
    trigger: '.memorable-brand',
    start: "10px 80%",
	// scrub: true
    }},"0.2" )


.fromTo('.craft1', {x: '-80vw'}, {x: 0, duration: 2, transition: 0.2, 
	scrollTrigger:{
		trigger: '.craft1',
		scrub: true
	}
}, "0.5")

.fromTo('.lasting', {x: 0}, {x: '-70vw', duration: 2, transition: 0.2, 
	scrollTrigger:{
		trigger: '.lasting',
		scrub: true
	}
}, "0.5")




// Swiper Section
const progressCircle = document.querySelector(".autoplay-progress svg");
const progressContent = document.querySelector(".autoplay-progress span");
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
	delay: 3500,
	disableOnInteraction: false
  },
  pagination: {
	el: ".swiper-pagination",
	clickable: true
  },
  on: {
	autoplayTimeLeft(s, time, progress) {
	  progressCircle.style.setProperty("--progress", 1 - progress);
	  progressContent.textContent = `${Math.ceil(time / 1000)}s`;
	}
  }
});






// Toggle BIO
let mainBio = Array.from(document.querySelectorAll(".mainBio"));
let profile = document.querySelector(".profile-container");
let profile1 = document.querySelector(".profile-container1");
let bioContainer = document.querySelector(".bio-container");
let bioContainer1 = document.querySelector(".bio-container1");
let bio = document.querySelector(".bio");

profile.addEventListener("click", () => {
	bioContainer.classList.toggle("active");
})

profile1.addEventListener("click", () => {
	bioContainer1.classList.toggle("active");
})

// MainBio Cursor Change
mainBio.forEach(mainBio => {
	mainBio.addEventListener("mouseover", () =>{
		innerCursor.classList.add("grow");
		outerCursor.style.display ='none';
	})

	mainBio.addEventListener("mouseleave", () =>{
		innerCursor.classList.remove("grow");
		outerCursor.style.display = 'block';
	})
})








// NAVIGATION IMAGE DISPLAY, BIO-IMG & EMOJI ANIMATION
let callToAction = document.querySelector(".callToAction-container");
let emoji = document.querySelector(".emoji");
let bioImg1 = document.querySelector(".bio-img1");
let bioImg2 = document.querySelector(".bio-img2");
let pro1 = document.querySelector(".pro1");
let pro2 = document.querySelector(".pro2");
let navImg1 = document.querySelector(".navImage-display1");
let navImg2 = document.querySelector(".navImage-display2");
let navImg3 = document.querySelector(".navImage-display3");
let navChild1 = document.querySelector(".navChild1");
let navChild2 = document.querySelector(".navChild2");
let navChild3 = document.querySelector(".navChild3");


let mouseX;
let mouseY;

window.addEventListener('mousemove', e => {
	mouseX = e.clientX;
	mouseY = e.clientY;

	gsap.to(cursor, 0.3, {x: mouseX, y: mouseY})
})





// Navigation Images

// About
navChild1.addEventListener("mouseenter", () => {
	gsap.to(navImg1, 1, 
		{ 
			scale: 1, 
			opacity: 1, 
			top: "-5vw", 
			left: "-5vw", 
			rotate: 0,
			ease: Elastic.easeOut.config(1, 0.3) 
		})

		navImg1.style.display ='block';
})

navChild1.addEventListener("mousemove", () => {
	gsap.to(navImg1, 1, 
		{ 
			x: mouseX,
			y: mouseY
		})
})

navChild1.addEventListener("mouseleave", () => {
	gsap.to(navImg1, 0.2, 
		{ 
			scale: 0, 
			opacity: 0, 
			top: "0.1vw", 
			left: "-0.5vw", 
			rotate: 45
		})

		navImg1.style.display ='none';
})



// Service
navChild2.addEventListener("mouseenter", () => {
	gsap.to(navImg2, 1, 
		{ 
			scale: 1, 
			opacity: 1, 
			top: "-5vw", 
			left: "-5vw", 
			rotate: 0,
			ease: Elastic.easeOut.config(1, 0.3) 
		})

		navImg2.style.display ='block';
})

navChild2.addEventListener("mousemove", () => {
	gsap.to(navImg2, 1, 
		{ 
			x: mouseX,
			y: mouseY
		})
})

navChild2.addEventListener("mouseleave", () => {
	gsap.to(navImg2, 0.2, 
		{ 
			scale: 0, 
			opacity: 0, 
			top: "0.1vw", 
			left: "-0.5vw", 
			rotate: 45
		})

		navImg2.style.display ='none';
})



// Contacts
navChild3.addEventListener("mouseenter", () => {
	gsap.to(navImg3, 1, 
		{ 
			scale: 1, 
			opacity: 1, 
			top: "-5vw", 
			left: "-5vw", 
			rotate: 0,
			ease: Elastic.easeOut.config(1, 0.3) 
		})

		navImg3.style.display ='block';
})

navChild3.addEventListener("mousemove", () => {
	gsap.to(navImg3, 1, 
		{ 
			x: mouseX,
			y: mouseY
		})
})

navChild3.addEventListener("mouseleave", () => {
	gsap.to(navImg3, 0.2, 
		{ 
			scale: 0, 
			opacity: 0, 
			top: "0.1vw", 
			left: "-0.5vw", 
			rotate: 45
		})

		navImg3.style.display ='none';
})






// BIO-IMG ANIMATION (NEZODO)
pro1.addEventListener("mouseenter", () => {
	gsap.to(bioImg1, 1, 
		{ 
			scale: 1, 
			opacity: 1, 
			top: "-5vw", 
			left: "-5vw", 
			rotate: 0,
			ease: Elastic.easeOut.config(1, 0.3) 
		})

		bioImg1.style.display ='block';
})

pro1.addEventListener("mousemove", () => {
	gsap.to(bioImg1, 1, 
		{ 
			x: mouseX,
			y: mouseY
		})
})

pro1.addEventListener("mouseleave", () => {
	gsap.to(bioImg1, 0.2, 
		{ 
			scale: 0, 
			opacity: 0, 
			top: "0.1vw", 
			left: "-0.5vw", 
			rotate: 45
		})

		bioImg1.style.display ='none';
})






// BIO-IMG ANIMATION (COSMOS)
pro2.addEventListener("mouseenter", () => {
	gsap.to(bioImg2, 1, 
		{ 
			scale: 1, 
			opacity: 1, 
			top: "-5vw", 
			left: "-5vw",  
			rotate: 0,
			ease: Elastic.easeOut.config(1, 0.3) 
		})

		bioImg2.style.display ='block';
})

pro2.addEventListener("mousemove", () => {
	gsap.to(bioImg2, 1, 
		{ 
			x: mouseX,
			y: mouseY
		})
})

pro2.addEventListener("mouseleave", () => {
	gsap.to(bioImg2, 0.2, 
		{ 
			scale: 0, 
			opacity: 0, 
			top: "0.1vw", 
			left: "-0.5vw", 
			rotate: 45
		})

		bioImg2.style.display ='none';
})





// EMOJI ANIMATION
callToAction.addEventListener("mouseenter", () => {
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

callToAction.addEventListener("mousemove", () => {
	gsap.to(emoji, 1, 
		{ 
			x: mouseX,
			y: mouseY
		})
})

callToAction.addEventListener("mouseleave", () => {
	gsap.to(emoji, 0.2, 
		{ 
			scale: 0, 
			opacity: 0, 
			top: "0.1vw", 
			left: "-0.5vw", 
			rotate: 45,
		})

		emoji.style.display ='none';
})


