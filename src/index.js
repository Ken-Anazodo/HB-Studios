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
  

// CIRCLE ROTATE TEXT
const text = document.querySelector('.text p');
text.innerHTML = text.innerText.split('').map(
	(char, i) =>
	`<span style="transform:rotate(${i * 8.3}deg)">${char}</span>`
).join('');



// OPEN AND CLOSE NAV
let menu = document.getElementById('menu-wrapper');

const closeMenu = () => {
	menu.style.top = "-150vh";
}

const openMenu = () => {
	menu.style.top = "0";
}


// LOADER ANIMATION AND COUNTER
const startLoader = () => {
	let counterElement = document.querySelector(".counter");
	let currentValue = 0;

	const updateCounter = () => {
		if (currentValue === 100) {
			return;
		}

		currentValue += Math.floor(Math.random() * 10) +1;

		if (currentValue > 100) {
			currentValue = 100;
		}

		counterElement.textContent = currentValue;

		let delay = Math.floor(Math.random() * 200) +50;
		setTimeout(updateCounter, delay);
	}

	updateCounter();
}

startLoader();





// BARS INTRO EFFECT AFTER COUNTER

// COUNTER
gsap.to(".counter", 0.25, {delay: 3.6, opacity: 0});

// BARS
gsap.to(".bar", 1.5, {delay: 3.5, height: 0, top: '-200vw', 
stagger: {
	amount: 5
},
ease: "power4 inOut"
});

// COUNTER BACKGROUND
gsap.to(".counter", 0.25, {delay: 10.5, top: '-200vw'});

// OVERLAY BACKGROUND
gsap.to(".overlay", 1.5, {delay: 10.5, top: '-200vw'});




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

circleText.addEventListener("mouseover", () =>{
	innerCursor.classList.add("grow");
	outerCursor.classList.add("grow");
})

circleText.addEventListener("mouseleave", () =>{
	innerCursor.classList.remove("grow");
	outerCursor.classList.remove("grow");
})



// GIANT LOGO ROTATION
gsap.fromTo(".giantLogo", {x: '30vw'}, {x: 0, rotation: 180, duration: 30, 
	scrollTrigger:{
		trigger: ".giantLogo",
		scrub: true
	}
}, "0.5")



// SLIDERS
// OUTER SLIDER
let swiper = new Swiper(".mySwiper", {
	slidesPerView: 3,
	spaceBetween: 30,
	loop: true,
	autoplay: {
		delay: 4000,
		disableOnInteraction: false
	  },
  });

//   INNER SLIDER
  let swiper2 = new Swiper(".mySwiper2", {
	loop: true,
	autoplay: {
		delay: 7000,
		disableOnInteraction: false
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true
	}
  });

