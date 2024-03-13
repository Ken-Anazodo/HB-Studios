import { loadSwipers } from "./sliderPagination.js";
import { test } from "./test.js";

console.log(test)


const script = document.createElement("script");
script.src = "../src/projectEngine.js";
script.id = "engine";
document.head.appendChild(script);


// script.onload = () => {
//   console.log(projectAssets);

  const slider = () => {
    const itemDisplay = test.map((item, index) => {
      return `
			  <div key="${index}" class="swiper-slide relative" id="details">
			  <div class="swiper mySwiper2 swiper-inner">
				  <div class="swiper-wrapper brightness-[70%]">
					<div class="swiper-slide">
					  <img src="${item?.sliderAttr?.imageI}" alt=”left-down arrow”>
					</div>
	  
					<div class="swiper-slide">
					  <img src="${item?.sliderAttr?.imageII}" alt=”left-down arrow”>
					</div>
	  
					<div class="swiper-slide">
					  <img src="${item?.sliderAttr?.imageIII}" alt=”left-down arrow”>
					</div>
				  </div>
				  <div class="swiper-pagination"></div>
			  </div>
	  
			  <div class="absolute w-full h-full top-[2vw] md:top-[1.5vw] left-0 flex justify-end pr-[1.5vw] md:pr-[1vw] z-20">
				  <div class="h-[6vw] w-[6vw] sm:h-[4vw] sm:w-[4vw] md:h-[2.5vw] md:w-[2.5vw]">
					  <img src="${item?.sliderAttr?.logo}" class="h-full w-full object-contain" alt=”brand”>
				  </div>
			  </div>
	  
			  <div class="absolute h-full w-full top-0 left-0 flex items-end z-10">
				  <div class="projNameAndArr flex justify-between items-center w-full px-[2.1vw] lg:px-[1.3vw] pb-[2vw]">
					  <div class="name-proj ">
						  <h1 class="nameProj1">${item?.name}</h1>
						  <h1 class="nameProj2 uppercase">Projects</h1>
					  </div>
	  
					  <div class="projArr h-[3vw] w-[3vw] md:h-[1.7vw] md:w-[1.7vw]">
						  <img src="${item?.sliderAttr?.arrow}" class="h-full w-full object-contain" alt=”left-down arrow”>
					  </div>
				  </div>								
			  </div>
		  </div>
			  
			  `;
    });

    document.querySelector(".swiper-wrapper").innerHTML = itemDisplay.join("");
  };

  
// };
// if (test) {
	slider();
	loadSwipers();
// }

document.getElementById('details').addEventListener('click', ()=>{
	console.log('hi')
	console.log(document.getElementById('details'))
})

export const itemDetails = (id) => {
  console.log(id)

//   let artist = test.find((artist)=>{
//   	return artist.id == id;
//   })

//   let database = JSON.stringify(artist)
//   localStorage.setItem('database', database || 'empty')
//   window.location.href = `./projects.html?id=${id}`;
  // }
};
