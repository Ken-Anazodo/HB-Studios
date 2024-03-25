// import  { displayNav } from './nav.js';
// let navDisplayed = displayNav();
// document.getElementById("showNav").innerHTML = navDisplayed;


gsap.registerPlugin(ScrollTrigger);

// NAVIGATION (Display On Scroll Up)
const showAnim = gsap
  .from(".nav-sec-container", {
    yPercent: -100,
    paused: true,
    duration: 0.2,
  })
  .progress(1);

ScrollTrigger.create({
  start: "top top",
  end: 99999,
  onUpdate: (self) => {
    self.direction === -1 ? showAnim.play() : showAnim.reverse();
  },
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

// OPEN AND CLOSE NAV
let menu = document.getElementById("menu-wrapper");
let logoAndCloseMenu = document.getElementById("logoAndClose");



let tl = gsap.timeline()


const closeMenu = () => {
	tl.fromTo(menu, {top: '0'}, {top: '-150vh', duration: 0.7, ease: "power4.in"},)
	  .fromTo(".gNav", {y: 0}, {y: '15vw', duration: 0.5, ease: "power4.in", transition: 1 }, "1")
    .fromTo(".navReveal", {height: "0%"}, {height: "100%", duration: 2, ease: 'power2.in', transition: 1}, "1")
    // menubtn.style.display = "block";
	logoAndCloseMenu.style.display = "none";
}

const openMenu = () => {
	tl.fromTo(menu, {top: '-150vh'}, {top: '0', duration: 0.5, ease: "power4.in"})
	  .fromTo(".gNav", {y: '15vw'}, {y: 0, duration: 0.5, ease: "power4.in", transition: 1 }, "1")
    .fromTo(".navReveal", {height: "100%"}, {height: "0%", duration: 1, ease: 'power4.in'}, "1")
    .fromTo(".navImgg", {scale: 1.3}, {scale: 1, duration: 2.5,}, "2") 
	  .fromTo(".navImgg1", {scale: 1.3}, {scale: 1, duration: 2.5,}, "2") 
    .fromTo(".hr", {width: "0"}, {width: '100%', duration: 2, ease: "power4.out"}, "2")  
    // menubtn.style.display = "none";
    logoAndCloseMenu.style.display = "flex";
}

// LOADER ANIMATION AND COUNTER
const startLoader = () => {
  let counterElement = document.querySelector(".counter");
  let currentValue = 0;

  const updateCounter = () => {
    if (currentValue === 100) {
      return;
    }

    currentValue += Math.floor(Math.random() * 10) + 1;

    if (currentValue > 100) {
      currentValue = 100;
    }

    counterElement.textContent = currentValue;

    let delay = Math.floor(Math.random() * 200) + 50;
    setTimeout(updateCounter, delay);
  };

  updateCounter();
};

startLoader();

// BARS INTRO EFFECT AFTER COUNTER

// COUNTER
gsap.to(".counter", 0.25, { delay: 3.6, opacity: 0 });

// BARS
gsap.to(".bar", 1.5, {
  delay: 3.5,
  height: 0,
  top: "-200vw",
  stagger: {
    amount: 5,
  },
  ease: "power4 inOut",
});

// COUNTER BACKGROUND
gsap.to(".counter", 0.25, { delay: 10.5, top: "-300vw" });

// OVERLAY BACKGROUND
gsap.to(".overlay", 1.5, { delay: 10.5, top: "-300vw" });

// CURSOR ANIMATION
let innerCursor = document.querySelector(".inner-cursor");
let outerCursor = document.querySelector(".outer-cursor");

document.addEventListener("mousemove", moveCursor);

function moveCursor(e) {
  let x = e.clientX;
  let y = e.clientY;

  console.log(x, y);

  innerCursor.style.left = `${x}px`;
  innerCursor.style.top = `${y}px`;
  outerCursor.style.left = `${x}px`;
  outerCursor.style.top = `${y}px`;
}

let links = Array.from(document.querySelectorAll("a"));
let navConnect = Array.from(document.querySelectorAll(".navConnect"));
let circleTexts = Array.from(document.querySelectorAll(".circle"));
// let menuCursor = document.querySelector(".menuCursor");
let closeDiv = document.querySelector(".close-icon");
let closeCursor = document.querySelector(".closeCursor");

// Nav Narration Display
let homeIcon = document.querySelector(".iconNav");
let homeDisplay = document.querySelector(".hmeCont");
let hbNav = document.querySelector(".hbNav");
let welcomeToHb = document.querySelector(".welcomeCont");
let menuIcon = document.querySelector(".menu-icon");
let navImgDisplay = document.querySelector(".navContt");

// Home Icon
homeIcon.addEventListener("mouseover", () => {
  gsap.fromTo(
    ".hmeCont",
    { y: "1.5vw" },
    {
      y: 0,
      duration: 0.3,
      scrollTrigger: {
        trigger: ".hmeCont",
      },
    }
  );
  homeDisplay.style.display = "flex";
});

homeIcon.addEventListener("mouseleave", () => {
  homeDisplay.style.display = "none";
});

// HB Studios Icon
hbNav.addEventListener("mouseover", () => {
  gsap.fromTo(
    ".welcomeCont",
    { y: "3vw" },
    {
      y: 0,
      duration: 0.3,
      scrollTrigger: {
        trigger: ".welcomeCont",
      },
    }
  );
  welcomeToHb.style.display = "flex";
});

hbNav.addEventListener("mouseleave", () => {
  welcomeToHb.style.display = "none";
});

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


// CURSOR ANIMATION
links.forEach((link) => {
  link.addEventListener("mouseover", () => {
    innerCursor.classList.add("grow");
    outerCursor.style.display = "none";
  });

  link.addEventListener("mouseleave", () => {
    innerCursor.classList.remove("grow");
    outerCursor.style.display = "block";
  });
});

navConnect.forEach((navConnect) => {
  navConnect.addEventListener("mouseover", () => {
    innerCursor.classList.add("grow");
    outerCursor.style.display = "none";
  });

  navConnect.addEventListener("mouseleave", () => {
    innerCursor.classList.remove("grow");
    outerCursor.style.display = "block";
  });
});

circleTexts.forEach((circleText) => {
  circleText.addEventListener("mouseover", () => {
    innerCursor.classList.add("grow");
    outerCursor.classList.add("grow");
  });

  circleText.addEventListener("mouseleave", () => {
    innerCursor.classList.remove("grow");
    outerCursor.classList.remove("grow");
  });
});

// GIANT LOGO ROTATION
gsap.fromTo(
  ".giantLogo",
  { x: "30vw" },
  {
    x: 0,
    rotation: 180,
    duration: 30,
    scrollTrigger: {
      trigger: ".giantLogo",
      scrub: true,
    },
  },
  "0.5"
);

// Navigation Images

let navImg1 = document.querySelector(".navImage-display1");
let navImg2 = document.querySelector(".navImage-display2");
let navImg3 = document.querySelector(".navImage-display3");
let navChild1 = document.querySelector(".navChild1");
let navChild2 = document.querySelector(".navChild2");
let navChild3 = document.querySelector(".navChild3");

let mouseX;
let mouseY;

window.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;

  gsap.to(cursor, 0.3, { x: mouseX, y: mouseY });
});

// About
navChild1.addEventListener("mouseenter", () => {
  gsap.to(navImg1, 1, {
    scale: 1,
    opacity: 1,
    top: "-5vw",
    left: "-5vw",
    rotate: 0,
    ease: Elastic.easeOut.config(1, 0.3),
  });

  navImg1.style.display = "block";
});

navChild1.addEventListener("mousemove", () => {
  gsap.to(navImg1, 1, {
    x: mouseX,
    y: mouseY,
  });
});

navChild1.addEventListener("mouseleave", () => {
  gsap.to(navImg1, 0.2, {
    scale: 0,
    opacity: 0,
    top: "0.1vw",
    left: "-0.5vw",
    rotate: 45,
  });

  navImg1.style.display = "none";
});

// Service
navChild2.addEventListener("mouseenter", () => {
  gsap.to(navImg2, 1, {
    scale: 1,
    opacity: 1,
    top: "-5vw",
    left: "-5vw",
    rotate: 0,
    ease: Elastic.easeOut.config(1, 0.3),
  });

  navImg2.style.display = "block";
});

navChild2.addEventListener("mousemove", () => {
  gsap.to(navImg2, 1, {
    x: mouseX,
    y: mouseY,
  });
});

navChild2.addEventListener("mouseleave", () => {
  gsap.to(navImg2, 0.2, {
    scale: 0,
    opacity: 0,
    top: "0.1vw",
    left: "-0.5vw",
    rotate: 45,
  });

  navImg2.style.display = "none";
});

// Contacts
navChild3.addEventListener("mouseenter", () => {
  gsap.to(navImg3, 1, {
    scale: 1,
    opacity: 1,
    top: "-5vw",
    left: "-5vw",
    rotate: 0,
    ease: Elastic.easeOut.config(1, 0.3),
  });

  navImg3.style.display = "block";
});

navChild3.addEventListener("mousemove", () => {
  gsap.to(navImg3, 1, {
    x: mouseX,
    y: mouseY,
  });
});

navChild3.addEventListener("mouseleave", () => {
  gsap.to(navImg3, 0.2, {
    scale: 0,
    opacity: 0,
    top: "0.1vw",
    left: "-0.5vw",
    rotate: 45,
  });

  navImg3.style.display = "none";
});






// The Impact of style on Music
  // tl1 = gsap.timeline()
  // let revealImg = document.querySelector(".impactReveal")

          // const impactReveal = document.querySelector('.impactReveal');
          // const viewportHeight = window.innerHeight;
          // const revealTop = impactReveal.getBoundingClientRect().top;
          
      
          const revealElement = (cloak, element) => {
          gsap.fromTo(cloak, {height: "30%"}, {height: "0%", duration: 8, ease: 'power4.out', 
          scrollTrigger:{
          trigger: element,
          start: "10px 100%",
          toggleActions: 'play reverse play reverse',
          }})
        }


          revealElement(".impactReveal", ".impactImg");
          revealElement(".stylAndMusReveal1", ".stylAndMusImg1");
          revealElement(".stylAndMusReveal2", ".stylAndMusImg2");
          revealElement(".revoluReveal", ".revoluImg");

          // Increase height when impactReveal div reaches 0% of viewport after 2 seconds
          
          // gsap.fromTo(".impactReveal", {height: "0%"}, { duration: 3, height: '100%', ease: 'power4.in',
          //     scrollTrigger:{
          //       trigger: ".impactImg",
          //       start: "10px 0%",
          //     }
          //   }, ".2");
         
    
             // Scroll event listener
            //  window.addEventListener('scroll', () => {
            //   const scrollPosition = window.scrollY;
            
            //   // Decrease height again when impactReveal div reaches 0% of viewport
            //   if (revealTop >= viewportHeight * 2) {
            //     gsap.to(impactReveal, { duration: 3, height: '0%', ease: 'power4.out' });
            //   }
            // });






            
        
      // Define the parallax effect function
      function createParallax(element) {
        gsap.to(element, {
            yPercent: -50,
            ease: "none",
            scrollTrigger: {
                trigger: element,
                start: "top bottom",
                end: "bottom top",
                scrub: true
            }
        });
      }

      // Call the parallax effect function on the image element
      createParallax(".parallax-image");
              



