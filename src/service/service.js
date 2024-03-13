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






// Nav Narration Display
let homeIcon = document.querySelector(".iconNav");
let homeDisplay = document.querySelector(".hmeCont");
let hbNav = document.querySelector(".hbNav");
let welcomeToHb = document.querySelector(".welcomeCont");
let menuIcon = document.querySelector(".menu-icon");
let navImgDisplay = document.querySelector(".navContt");

// Home Icon
homeIcon.addEventListener("mouseover", () =>{
	gsap.fromTo(".hmeCont", {y: '1.5vw'}, {y: 0, duration: 0.3,
		scrollTrigger:{
			trigger: ".hmeCont",
		}
	})
	homeDisplay.style.display ='flex';
})

homeIcon.addEventListener("mouseleave", () =>{
	homeDisplay.style.display = 'none';
})


// HB Studios Icon
hbNav.addEventListener("mouseover", () =>{
	gsap.fromTo(".welcomeCont", {y: '3vw'}, {y: 0, duration: 0.3,
		scrollTrigger:{
			trigger: ".welcomeCont",
		}
	})
	welcomeToHb.style.display ='flex';
})

hbNav.addEventListener("mouseleave", () =>{
	welcomeToHb.style.display = 'none';
})

// MENU ICON
menuIcon.addEventListener("mouseover", () => {
	gsap.fromTo(
	  ".navContt",
	  { y: "1.5vw" },
	  {
		y: 0,
		duration: 0.3,
		scrollTrigger: {
		  trigger: ".hmeCont",
		},
	  }
	);
	navImgDisplay.style.display = "flex";
  });
  
  menuIcon.addEventListener("mouseleave", () => {
	navImgDisplay.style.display = "none";
  });







// CIRCLE ROTATE TEXT

// Instantiate `CircleType` with an HTML element.
// Small Screen
const circleType = new CircleType(document.getElementById("myElement"));
circleType.radius();
circleType.forceHeight();
circleType.forceWidth(true);
circleType.refresh();

// Large Screen
const circleType1 = new CircleType(document.getElementById("myElement1"));
circleType1.radius();
circleType1.forceHeight();
circleType1.forceWidth(true);
circleType1.refresh();

// Circle Text in body
const circleType2 = new CircleType(document.getElementById("myElement2"));
circleType2.radius(100);
circleType2.forceHeight();
circleType2.forceWidth(true);
circleType2.refresh();

// Circle Text in body
const circleType3 = new CircleType(document.getElementById("myElement3"));
circleType3.radius(100);
circleType3.forceHeight();
circleType3.forceWidth(true);
circleType3.refresh();


// Circle Cursor Change
circleText.addEventListener("mouseover", () =>{
	innerCursor.classList.add("grow");
	outerCursor.classList.add("grow");
})

circleText.addEventListener("mouseleave", () =>{
	innerCursor.classList.remove("grow");
	outerCursor.classList.remove("grow");
})



// OFFERINGS
let serviceNav = Array.from(document.querySelectorAll(".serviceNav"));
let tintCont = Array.from(document.querySelectorAll(".tintCont"));


// tintCont.addEventListener("mouseenter", () => {
// 	serviceNav.forEach(serviceNav => {
// 		serviceNav.classList.add("serviceNav:hover::after");
// 	})	

// 	gsap.to('.tint-1', 0.5, 
// 		{  
// 			width: "100%", 
// 			ease: 'power3.easeIn',
// 			duration: 0.3
// 		})
// })

// tintCont.addEventListener("mouseleave", () => {
// 	serviceNav.forEach(serviceNav => {
// 		serviceNav.classList.remove("serviceNav:hover::after");
// 	})	
	
// 	gsap.to('.tint-1', 0.5, 
// 		{  
// 			width: "0%", 
// 			ease: 'power3.easeIn',
// 			duration: 0.3,
// 			// x: '40vw'
// 		})
// })



// PERSONAL STYLE
let stylePage = document.getElementById('personalStylePage');
let closeSign = document.getElementById('ex');
let readStylePage = document.getElementById('pstyle-readMore')
let partition1 = document.getElementById('partition1')
let tint1 = document.getElementById('tint1')



let closePersonalStylePage = () => {
	stylePage.style.right = "100vw";
	closeSign.style.display = "none";
}

let openPersonalStylePage = () => {
	stylePage.style.right = "0";
	closeSign.style.display = "block";
}

// Green Effect
partition1.addEventListener("mouseenter", () => {
	gsap.to('.tint-1', 0.5, 
		{  
			width: "100%", 
			ease: 'power3.easeIn',
			duration: 0.3
		})
})

// Green Effect
partition1.addEventListener("mouseleave", () => {
	gsap.to('.tint-1', 0.5, 
		{  
			width: "0%", 
			ease: 'power3.easeIn',
			duration: 0.3,
			// x: '40vw'
		})
})


// GROOMING & APPEARANCE
let groomingPage = document.getElementById('groomingPage');
let closeSign1 = document.getElementById('ex1');
let readGroomingPage = document.getElementById('grooming-readMore')
let partition2 = document.getElementById('partition2')
let tint2 = document.getElementById('tint2')


let closeGroomingPage = () => {
	groomingPage.style.right = "100vw";
	closeSign1.style.display = "none";
}

let openGroomingPage = () => {
	groomingPage.style.right = "0";
	closeSign1.style.display = "block";
}

// Green Effect
partition2.addEventListener("mouseenter", () => {
	gsap.to('.tint-2', 0.5, 
		{  
			width: "100%", 
			ease: 'power3.easeIn',
			duration: 0.3
		})
})

// Green Effect
partition2.addEventListener("mouseleave", () => {
	gsap.to('.tint-2', 0.5, 
		{  
			width: "0%", 
			ease: 'power3.easeIn',
			duration: 0.3
		})
})







// PERSONAL BRANDING
let personalBrandingPage = document.getElementById('personalBrandingPage');
let closeSign2 = document.getElementById('ex2');
let readpersonalBrandingPage = document.getElementById('grooming-readMore')
let partition3 = document.getElementById('partition3')
let tint3 = document.getElementById('tint3')


let closePersonalBrandingPage = () => {
	personalBrandingPage.style.right = "100vw";
	closeSign2.style.display = "none";
}

let openPersonalBrandingPage = () => {
	personalBrandingPage.style.right = "0";
	closeSign2.style.display = "block";
}


// Green Effect
partition3.addEventListener("mouseenter", () => {
	gsap.to('.tint-3', 0.5, 
		{  
			width: "100%", 
			ease: 'power3.easeIn',
			duration: 0.3
		})
})

// Green Effect
partition3.addEventListener("mouseleave", () => {
	gsap.to('.tint-3', 0.5, 
		{  
			width: "0%", 
			ease: 'power3.easeIn',
			duration: 0.3
		})
})







// COLOR ANALYSIS
let colorAnalysisPage = document.getElementById('colorAnalysisPage');
let closeSign3 = document.getElementById('ex3');
let readcolorAnalysisPage = document.getElementById('grooming-readMore')
let partition4 = document.getElementById('partition4')
let tint4 = document.getElementById('tint4')


let closeColorAnalysisPage = () => {
	colorAnalysisPage.style.right = "100vw";
	closeSign3.style.display = "none";
}

let openColorAnalysisPage = () => {
	colorAnalysisPage.style.right = "0";
	closeSign3.style.display = "block";
}


// Green Effect
partition4.addEventListener("mouseenter", () => {
	gsap.to('.tint-4', 0.5, 
		{  
			width: "100%", 
			ease: 'power3.easeIn',
			duration: 0.3
		})
})

// Green Effect
partition4.addEventListener("mouseleave", () => {
	gsap.to('.tint-4', 0.5, 
		{  
			width: "0%", 
			ease: 'power3.easeIn',
			duration: 0.3
		})
})





// Navigation Image Display Animation
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










