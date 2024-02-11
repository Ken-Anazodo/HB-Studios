
 const artisteInfoArray = [
	{	
		id: 1,
		imageI: '../src/assets/img/Johnny/john.jpg',
		imageII: '../src/assets/img/Johnny/john1.jpg',
		imageIII:'../src/assets/img/Johnny/john2.jpg',

		name: 'Johnny Drille',
		arrow: '../src/assets/img/arrow2.png',
		logo: '../src/assets/img/logo.png'

	},

	{	
		id: 2,
		imageI: '../src/assets/img/bayanni/bayanni1.jpg',
		imageII: '../src/assets/img/bayanni/bayanni2.jpg',
		imageIII:'../src/assets/img/bayanni/bayanni3.jpg',

		name: 'Bayanni',
		arrow: '../src/assets/img/arrow2.png',
		logo: '../src/assets/img/logo.png'

	},

	{	
		id: 3,
		imageI: '../src/assets/img/mrEazi/eazi3.jpg',
		imageII: '../src/assets/img/mrEazi/eazi2.jpg',
		imageIII:'../src/assets/img/mrEazi/eazi1.jpg',

		name: 'Mr Eazi',
		arrow: '../src/assets/img/arrow2.png',
		logo: '../src/assets/img/logo.png'

	},

	{
		id: 4,
		imageI: '../src/assets/img/remy/remy.jpg',
		imageII: '../src/assets/img/remy/remy1.jpg',
		imageIII:'../src/assets/img/remy/remy2.jpg',

		name: 'Remy',
		arrow: '../src/assets/img/arrow2.png',
		logo: '../src/assets/img/logo.png'

	},

	{
		id: 5,
		imageI: '../src/assets/img/prettyboydo/prettyboydo.jpg',
		imageII: '../src/assets/img/prettyboydo/prettyboydo1.jpg',
		imageIII:'../src/assets/img/prettyboydo/prettyboydo2.jpg',

		name: 'Prettyboydo',
		arrow: '../src/assets/img/arrow2.png',
		logo: '../src/assets/img/logo.png'

	},

	{
		id: 6,
		imageI: '../src/assets/img/toniDada/toni1.jpg',
		imageII: '../src/assets/img/toniDada/toni2.jpg',
		imageIII:'../src/assets/img/toniDada/toni3.jpg',

		name: 'Toni Dada',
		arrow: '../src/assets/img/arrow2.png',
		logo: '../src/assets/img/logo.png'

	},
]



const slider = () => {


	const itemDisplay = artisteInfoArray.map((item, index)=>{
		return`
		<div key="${index}" class="swiper-slide relative" onclick="itemDetails(${item.id})">
		<div class="swiper mySwiper2 swiper-inner">
			<div class="swiper-wrapper brightness-[70%]">
			  <div class="swiper-slide">
				<img src="${item.imageI}" alt=”left-down arrow”>
			  </div>

			  <div class="swiper-slide">
				<img src="${item.imageII}" alt=”left-down arrow”>
			  </div>

			  <div class="swiper-slide">
				<img src="${item.imageIII}" alt=”left-down arrow”>
			  </div>
			</div>
			<div class="swiper-pagination"></div>
		</div>

		<div class="absolute w-full h-full top-[2vw] md:top-[1.5vw] left-0 flex justify-end pr-[1.5vw] md:pr-[1vw] z-20">
			<div class="h-[6vw] w-[6vw] sm:h-[4vw] sm:w-[4vw] md:h-[2.5vw] md:w-[2.5vw]">
				<img src="${item.logo}" class="h-full w-full object-contain" alt=”brand”>
			</div>
		</div>

		<div class="absolute h-full w-full top-0 left-0 flex items-end z-10">
			<div class="flex justify-between items-center w-full px-[2.1vw] lg:px-[1.3vw] pb-[2vw]">
				<div class="name-proj ">
					<h1 class="nameProj1">${item.name}</h1>
					<h1 class="nameProj2 uppercase">Projects</h1>
				</div>

				<div class="h-[3vw] w-[3vw] md:h-[1.7vw] md:w-[1.7vw]">
					<img src="${item.arrow}" class="h-full w-full object-contain" alt=”left-down arrow”>
				</div>
			</div>								
		</div>
	</div>
		
		`
	})

	document.querySelector('.swiper-wrapper').innerHTML = itemDisplay.join('')


}

slider();







const itemDetails = (id) => {
	// if(id){

		let artist = artisteInfoArray.find((artist)=>{
			return artist.id == id;
		})

		let database = JSON.stringify(artist)
		localStorage.setItem('database', database)
		window.location.href = `./projects.html?id=${id}`;
	// }
 
}
