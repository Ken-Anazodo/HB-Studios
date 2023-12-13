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

circleText.addEventListener("mouseover", () =>{
	innerCursor.classList.add("grow");
	outerCursor.classList.add("grow");
})

circleText.addEventListener("mouseleave", () =>{
	innerCursor.classList.remove("grow");
	outerCursor.classList.remove("grow");
})


// CIRCLE ROTATE TEXT
const text = document.querySelector('.text p');
text.innerHTML = text.innerText.split('').map(
	(char, i) =>
	`<span style="transform:rotate(${i * 8.3}deg)">${char}</span>`
).join('');




// EMOJI ANIMATION
let bayanni = document.querySelector(".bayanni");
let emoji = document.querySelector(".emoji");


let mouseX;
let mouseY;

window.addEventListener('mousemove', e => {
	mouseX = e.clientX;
	mouseY = e.clientY;

	gsap.to(cursor, 0.3, {x: mouseX, y: mouseY})
})



bayanni.addEventListener("mouseenter", () => {
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

bayanni.addEventListener("mousemove", () => {
	gsap.to(emoji, 1, 
		{ 
			x: mouseX,
			y: mouseY
		})
})

bayanni.addEventListener("mouseleave", () => {
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





// <!-- Initialize Swiper -->

    let swiper = new Swiper(".mySwiper", {
      effect: "coverflow",
      grabCursor: true,
	  loop: true,
      centeredSlides: true,
      slidesPerView: "auto",
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },
	  autoplay: {
		delay: 2000,
		disableOnInteraction: false
	  },
      pagination: {
        el: ".swiper-pagination",
		clickable: true
      },
    });


// SLIDERS
// OUTER SLIDER
// let swiper = new Swiper(".mySwiper", {
// 	slidesPerView: 3,
// 	spaceBetween: 30,
// 	loop: true,
// 	autoplay: {
// 		delay: 4000,
// 		disableOnInteraction: false
// 	  },
//   });

// //   INNER SLIDER
//   let swiper2 = new Swiper(".mySwiper2", {
// 	loop: true,
// 	autoplay: {
// 		delay: 7000,
// 		disableOnInteraction: false
// 	},
// 	pagination: {
// 		el: '.swiper-pagination',
// 		clickable: true
// 	}
//   });



