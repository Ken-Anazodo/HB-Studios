
let projectAssets = [
	{	
		id: 1,
		imageI: '../src/assets/img/Johnny/john.jpg',
		imageII: '../src/assets/img/Johnny/john1.jpg',
		imageIII:'../src/assets/img/Johnny/john2.jpg',

		name: 'Johnny Drille',
		arrow: '../src/assets/img/arrow2.png',
		logo: '../src/assets/img/logo.png',

		creditSubhead1: 'Styling & Costume Designs',
		creditAns1: 'HeadBorn Studios',

		creditSubhead2: 'Photography',
		creditAns2: 'Dara Banjo',

		creditSubhead3: 'Photography',
		creditAns3: 'Dara Banjo'

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





const project1Display = () => {



	const displayProject1 = projectAssets.map((_, index) => {

	return `
			<div class="px-[3vw] xl:px-0 w-full pt-[20vw] xl:pt-[8vw]">
			<div class="w-full">
				<div class="bayanni navConnect text-[29vw] leading-[29vw] xl:text-[31vw] xl:leading-[31vw] text-center bg-white text-black w-full">
					<h1>${_.name}</h1>
					
					<div class="emoji min-h-[12vw] h-[12vw] w-[12vw] z-[10000000] rounded-full">
						<img src="${_.imageII}" class="h-full w-full object-cover brightness-[30%] rounded-full sepi" alt=”Image”>
					</div>
				</div>



				<div class="xl:flex justify-between">
					<div class="no1 text-[5.2vw] leading-[5.2vw] xl:text-[2vw] xl:leading-[2vw] mt-[15vw] xl:mt-[3vw] text-stone-200">
						<h1>/PROJECT 01</h1>
					</div>

					<div class="w-full xl:w-[46vw] mt-[6vw] xl:mt-0">
						<div class="uppercase">
							<div class=" border-t-[0.1vw] mt-[1vw]"></div>
							
							<div class="credit text-[8vw] leading-normal md:text-[7vw] xl:text-[4vw] xl:leading-[4vw] my-[0.8vw]">
								<span>credits</span>
							</div>

							<div class=" border-y-[0.1vw] mt-[-0.2vw]">

								<div>
									<div class="credit-subhead text-[4.2vw] leading-[3.6vw] sm:text-[20px] sm:leading-[24px] lg:text-[25px] lg:leading-[29px] xl:text-[1.5vw] xl:leading-[1.5vw] mt-[3vw] sm:mt-[2vw] xl:mt-[1vw]">Styling & Costume Designs:</div>
									<div class="flex justify-between items-center">
										<div class="credit-ans text-[4.2vw] sm:text-[20px] lg:text-[25px] xl:text-[1.5vw]">HeadB0rn Studios</div>

										<div class="h-[4vw] w-[4vw] sm:h-[3vw] sm:w-[3vw] xl:h-[1.3vw] xl:w-[1.3vw]">
											<img src="../src/assets/img/arrow4.png" class="h-full w-full object-contain" alt=”right-down arrow”>
										</div>
									</div>												
								</div>

								<div class="w-full border-t-[0.1vw] mt-[1vw] xl:mt-[0.5vw]"></div>

								<div>
									<div class="credit-subhead text-[4.2vw] leading-[3.6vw] sm:text-[20px] sm:leading-[24px] lg:text-[25px] lg:leading-[29px] xl:text-[1.5vw] xl:leading-[1.5vw] mt-[3vw] sm:mt-[2vw] xl:mt-[1vw]">Photography:</div>
									<div class="flex justify-between items-center">
										<div class="credit-ans text-[4.2vw] sm:text-[20px] lg:text-[25px] xl:text-[1.5vw]">Dara Banjo</div>

										<div class="h-[4vw] w-[4vw] sm:h-[3vw] sm:w-[3vw] xl:h-[1.3vw] xl:w-[1.3vw]">
											<img src="../src/assets/img/arrow4.png" class="h-full w-full object-contain" alt=”right-down arrow”>
										</div>
									</div>												
								</div>

								<div class="w-full border-t-[0.1vw] mt-[1vw] xl:mt-[0.5vw]"></div>

								<div>
									<div class="credit-subhead text-[4.2vw] leading-[3.6vw] sm:text-[20px] sm:leading-[24px] lg:text-[25px] lg:leading-[29px] xl:text-[1.5vw] xl:leading-[1.5vw] mt-[3vw] sm:mt-[2vw] xl:mt-[1vw]">Directed By:</div>
									<div class="flex justify-between items-center">
										<div class="credit-ans text-[4.2vw] sm:text-[20px] lg:text-[25px] xl:text-[1.5vw]">Dir. K</div>

										<div class="h-[4vw] w-[4vw] sm:h-[3vw] sm:w-[3vw] xl:h-[1.3vw] xl:w-[1.3vw]">
											<img src="../src/assets/img/arrow4.png" class="h-full w-full object-contain" alt=”right-down arrow”>
										</div>
									</div>										
								</div>				
							</div>
						</div>
					</div>
				</div>



				<div class="flex justify-between items-end mt-[15vw] xl:mt-[4vw]">
					<div>
						<div class=" mb-[15vw]">
							<h1 class="ta text-[4.8vw] leading-[4.8vw] xl:text-[2vw] xl:leading-[2vw] uppercase">Ta Ta Ta Remix</h1>
							<h1 class="film1 text-[3vw] leading-[3vw] xl:text-[1.6vw] xl:leading-[1.6vw] mt-[1.3vw] xl:mt-[0.09vw] uppercase underline">Music Film</h1>
						</div>

						<div class="h-[24vw] min-h-[24vw] w-[17vw] md:h-[22vw] md:min-h-[22vw] md:w-[19vw] xl:h-[40vh] xl:min-h-[40vh] xl:w-[20vw]">
							<img src="../src/assets/img/bayanni/bayanni7.jpg" class="h-full w-full object-cover brightness-50" alt=”left-down arrow”>
						</div>
					</div>

					<div class="h-[76vw] min-h-[76vw] w-[65vw] md:h-[72vw] md:min-h-[72vw] md:w-[72vw] xl:h-screen xl:min-h-screen xl:w-[46vw]">
						<img src="../src/assets/img/bayanni/bayanni1.jpg" class="h-full w-full object-cover brightness-50" alt=”left-down arrow”>
					</div>
				</div>




				<div class="mt-[12vw] xl:mt-[7vw]">
					<div class="styl-dir text-[10vw] leading-[10.2vw] xl:text-[6vw] xl:leading-[6vw] uppercase xl:w-[60vw]">
						<h1>Style direction and costume design for Bayanni</h1>
					</div>

					<!-- Large Screen -->
					<div class="w-[46.5vw] justify-end mt-[2vw] [display:none] xl:flex">
						<div class="h-[3.5vw] w-[3.5vw]">
							<img src="../src/assets/img/arrow2.png" class="h-full w-full object-contain" alt=”left-down arrow”>
						</div>
					</div>

					<!-- Small Screen -->
					<div class="mt-[5vw] h-[7vw] w-[7vw] xl:[display:none]">
						<img src="../src/assets/img/arrow2.png" class="h-full w-full object-contain" alt=”left-down arrow”>
					</div>
				</div>
			
				
				<div class="xl:flex justify-center mt-[10vw] md:mt-[8vw] xl:mt-[5vw]">
					<div class="flex flex-col justify-center xl:items-center">
						<div class="subHead text-[6vw] leading-[7vw] md:text-[30px] md:leading-[36px] xl:text-[3.6vw] xl:leading-[4.2vw] w-[45vw] xl:w-[30vw]">
							<div class="xl:text-center">Our Visionary Techniques</div>	
						</div>


						<div class="subBody mt-[4vw] xl:mt-[3vw]">
							<div class="xl:text-center leading-6 text-[15px] sm:leading-7 md:text-[12px] md:leading-[18px] xl:text-[1.1vw] xl:leading-normal w-[65vw] xl:w-[27vw] text-stone-300">
								Develop a stage look that enhances performance, 
								leaving a lasting impression on fans and industry professionals.
								We leverage fashion to shape artists' unique identities, fuelling fan devotion 
								and inspiring subcultures. 
							</div>
						</div>
					</div>
				</div>

				<div class="mt-[10vw] xl:mt-[7vw]">
					<div class="flex justify-around">
						<div class="blackWhite h-[22vw] min-h-[22vw] w-[19vw] xl:h-[47vh] xl:min-h-[47vh] xl:w-[22vw] mt-[47vw] xl:mt-[24vw] relative">
							<img src="../src/assets/img/bayanni/bayanni2.jpg" class="bwImg h-full w-full object-cover brightness-50 grayscale absolute top-0 left-0" alt=”left-down arrow”>
						</div>

						<div class="blackWhite h-[70vw] min-h-[70vw] w-[45vw] xl:h-[90vh] xl:min-h-[90vh] xl:w-[44vw] relative">
							<img src="../src/assets/img/bayanni/bayanni3.jpg" class="bwImg h-full w-full object-cover brightness-50 grayscale absolute top-0 left-0" alt=”left-down arrow”>
						</div>

						<div class="blackWhite h-[22vw] min-h-[22vw] w-[19vw] xl:h-[47vh] xl:min-h-[47vh] xl:w-[22vw] relative">
							<img src="../src/assets/img/bayanni/bayanni4.jpg" class="bwImg h-full w-full object-cover brightness-50 grayscale absolute top-0 left-0" alt=”left-down arrow”>
						</div>
					</div>
				</div>

				<div class="flex justify-center items-center mt-[15vw] xl:mt-[7vw]">
					<div>
						<div>
							<div class="integrate text-[7vw] leading-[7.5vw] xl:text-[4vw] xl:leading-[4.5vw] xl:w-[80vw]">
								/We integrate cohesive fashion and style that directly integrates seamlessly 
								into the personal style and vision for the music videos and content, 
								reinforcing brand identity through visuals.
							</div>
							<p class="n italic text-[5.5vw] xl:text-[2.5vw] mt-[1.5vw] xl:mt-0">(N)</p>
						</div>

						<!-- Large Screen -->
						<div class="justify-around text-[1.4vw] leading-[1.4vw] uppercase mt-[1vw] px-[6vw] [display:none] xl:flex">
							<div class="btn-orange">Identity</div>
							<div class="btn-orange">Fashion</div>
							<div class="btn-orange">Lifestyle</div>
							<div class="btn-orange">Trends</div>
						</div>


						<!-- Small Screen -->
						<div class="flex flex-col items-center text-[3.6vw] leading-[3.6vw] xl:text-[1.4vw] xl:leading-[1.4vw] uppercase mt-[10vw] px-[6vw] xl:[display:none]">
							<div class="flex justify-between w-[70vw]">
								<div class="btn-orange">Identity</div>
								<div class="btn-orange">Fashion</div>
							</div>
							
							<div class="flex justify-between w-[45vw] mt-[5vw]">
								<div class="btn-orange">Lifestyle</div>
								<div class="btn-orange">Trends</div>
							</div>
						</div>
					</div>
				</div>


				<div class="flex justify-end mt-[15vw] xl:mt-[7vw]">
					<div class="blackWhite h-[80vw] min-h-[80vw] w-[65vw] sm:w-[60vw] xl:h-[93vh] xl:min-h-[93vh] xl:w-[44vw] relative">
						<img src="../src/assets/img/bayanni/bayanni9.jpg" class="bwImg h-full w-full object-cover brightness-50 grayscale absolute top-0 left-0" alt=”left-down arrow”>
					</div>
				</div>

				<div class="mt-[25vw] xl:mt-[7vw]">
					<div>
						<div class="sd text-[12vw] leading-[12.5vw] xl:text-[8vw] xl:leading-[8.5vw] uppercase">
							<h1>Style Direction</h1>
							<h1>Style Direction</h1>
							<h1>Style Direction</h1>
						</div>

						<div class="flex justify-end mt-[17vw]">
							<div class="cd text-[12vw] leading-[12.5vw] xl:text-[8vw] xl:leading-[8.5vw] uppercase">
								<h1>Costume Designs</h1>
								<h1>Costume Designs</h1>
								<h1>Costume Designs</h1>
							</div>
						</div>
					</div>
				</div>


				
				<div class="flex justify-center mt-[15vw] xl:mt-[7vw]">
					<div class="flex flex-col justify-center xl:items-center">
						<div class="subHead text-[6vw] leading-[7vw] xl:text-[3.6vw] xl:leading-[4.2vw] w-[50vw] xl:w-[30vw]">
							<div class="xl:text-center">Adaptability to Trends</div>	
						</div>


						<div class="subBody mt-[3vw]">
							<div class="xl:text-center text-[15px] leading-6 xl:text-[1.1vw] xl:leading-normal w-[70vw] xl:w-[27vw] text-stone-300">
								While staying true to your personal style, being adaptable to current fashion trends 
								ensures that your visuals remain relevant and engaging. It allows you to infuse 
								freshness into your content while retaining the core elements of your brand identity. 
							</div>
						</div>
					</div>
				</div>



				<div class="mt-[15vw] xl:mt-[7vw] mb-[10vw] flex items-center">
					<div class="xl:flex justify-between items-center w-[58vw] mr-[5vw]">
						<div class="blackWhite h-[70vw] min-h-[70vw] w-[55vw] xl:h-[57vh] xl:min-h-[57vh] xl:w-[27vw] mb-[6vw] relative">
							<img src="../src/assets/img/bayanni/bayanni8.jpg" class="bwImg h-full w-full object-cover brightness-50 grayscale absolute top-0 left-0" alt=”left-down arrow”>
						</div>

						<div>
							<div class="blackWhite h-[70vw] min-h-[70vw] w-[55vw] xl:h-[57vh] xl:min-h-[57vh] xl:w-[27vw] mb-[5vw] relative">
								<img src="../src/assets/img/bayanni/bayanni.JPEG" class="bwImg h-full w-full object-cover brightness-50 grayscale absolute top-0 left-0" alt=”left-down arrow”>
							</div>

							<div class="blackWhite h-[70vw] min-h-[70vw] w-[55vw] xl:h-[57vh] xl:min-h-[57vh] xl:w-[27vw] relative">
								<img src="../src/assets/img/bayanni/bayanni10.jpeg" class="bwImg h-full w-full object-cover brightness-50 grayscale absolute top-0 left-0" alt=”left-down arrow”>
							</div>
						</div>
					</div>


					<div class="flex flex-col items-center">
						<div class="bold11 text-[27vw] leading-[27vw] xl:text-[13vw] xl:leading-[13vw]">
							<ul class="flex flex-col items-center">
								<li>W</li>
								<li>I</li>
								<li>L</li>
								<li>D</li>
							</ul>
						</div>

						<div class="h-[9vw] w-[9vw] mt-[2vw]">
							<img src="../src/assets/img/navRoll.png" class="h-full w-full object-contain" alt=”brand”>
						</div>
					</div>
				</div>


				<div class="mt-[20vw] xl:mt-[6vw]">
					<div class="ml-[2vw]">
						<div class="film text-[15vw] leading-[14vw] uppercase">The Film</div>
					</div>

					<div class="mt-[3vw]">
						<div>
							<div class="aspect-video w-full xl:w-[70vw] min-h-[40vh] h-[40vh] xl:min-h-[60vh] xl:h-[60vh] bg-zinc-900">
								<iframe class="h-full w-full aspect-video" src="https://www.youtube.com/embed/DJ6y5BDVvmo?si=3B2DZS29KM3JXlez" title="YouTube video player" 
								frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; 
								picture-in-picture; web-share" allowfullscreen></iframe>
							</div>
						</div>
					</div>
				</div>



				<div class="heavenNote uppercase mt-[15vw] xl:mt-[7vw] text-[12px] sm:text-[13px] leading-4 md:text-[10px] md:leading-[13px] xl:text-[0.85vw] xl:leading-[0.95vw]">
					<div class="lg:flex">
						<div>
							<div class="w-[70vw] sm:w-[55vw] md:w-[45vw] lg:w-[33vw] xl:w-[35vw] px-[1vw] mr-[5vw] xl:mr-[6vw]">
								<h1>
									One of the primary objectives of a music video is to captivate the audience visually. 
									The styling and costume designs play a central role in achieving this goal. 
									They are not just about adorning the artist but are instrumental in crafting a visual 
									narrative that resonates with the song's message and evokes emotions.
								</h1>

								<div class="flex items-end justify-between">
									<div class="heaven-subHead text-[5vw] md:text-[26px] xl:text-[2vw] mt-[2.5vw] md:mt-[1.5vw] xl:mt-[1vw]">VISUAL IMPACT</div>
									<div class="subHead-no">1</div>
								</div>	
							</div>
						</div>


						<div class="flex justify-end lg:block mt-[14vw] md:mt-[9vw] lg:mt-0">
							<div class="w-[70vw] sm:w-[55vw] md:w-[45vw] lg:w-[23vw] px-[1vw] text-right lg:mt-[4vw]">
								<h1>
									The Wardrobe choices tell a 
									story within the music video. Each outfit represents a different facet of the narrative, 
									character development, or emotional arc. Costume changes indicate shifts in the song's mood or lyrics, 
									enriching the viewer's understanding of the music's context.
								</h1>

								<div class="flex items-end justify-between">
									<div class="subHead-no">2</div>
									<div class="heaven-subHead text-[5vw] md:text-[26px] xl:text-[2vw] mt-[2.5vw] md:mt-[1.5vw] xl:mt-[1vw]">STORY TELLING</div>
								</div>	
							</div>
						</div>


						<div class="mt-[15vw] md:mt-[9vw] lg:mt-0">
							<div class="w-[70vw] sm:w-[55vw] md:w-[45vw] lg:w-[30vw] xl:w-[32vw] px-[1vw] lg:mt-[8vw]">
								<h1>
									In the competitive world of music videos, being memorable is key. Unique and carefully thought-out wardrobe 
									choices can leave a lasting impression on viewers. When the audience can recall the video because of the 
									striking fashion choices, it enhances the video's longevity and potential for going viral.
								</h1>

								<div class="flex items-end justify-between">
									<div class="heaven-subHead text-[5vw] md:text-[26px] xl:text-[2vw] mt-[2.5vw] md:mt-[1.5vw] xl:mt-[1vw]">MEMORABILITY</div>
									<div class="subHead-no">3</div>
								</div>								
							</div>
						</div>

						
					</div>
				</div>
			</div>
		</div>
	`

	})
};

project1Display();