// const script = document.createElement("script");
// script.src = "../src/projectEngine.js";
// script.id = "engine";
// document.head.appendChild(script);
// const script = document.querySelectorAll("script");
// console.log(script.id);
// console.log(projectAssets);

const loadPage = () => {
  //   let queryString = window.location.search;
  //   let params = new URLSearchParams(queryString);
  //   let id = params.get("id");

  let artist = JSON.parse(localStorage.getItem("database"));
  console.log(artist);

  if (artist) {
    const showArtist = () => {
      return `

        
      <section1>
    

      <!-- Body Beginning -->
      <div class="sec1Begin">
        <div class="px-[3vw] xl:px-0 w-full pt-[20vw] xl:pt-[8vw]">
          <div class="w-full">
            <div
              class="bayanni navConnect text-[29vw] leading-[29vw] xl:text-[31vw] xl:leading-[31vw] text-center bg-white text-black w-full"
            >
              <h1>${artist.name.toUpperCase()}</h1>

              <div
                class="emoji min-h-[12vw] h-[12vw] w-[12vw] z-[10000000] rounded-full"
              >
                <img
                  src="../src/assets/img/bayanni/bay5.jpg"
                  class="h-full w-full object-cover brightness-[30%] rounded-full sepi"
                  alt="”Image”"
                />
              </div>
            </div>

            ${artist.Projects.map((proj, index) => {
              return `
            <div class="xl:flex justify-between">
            <div
              class="no1 text-[5.2vw] leading-[5.2vw] xl:text-[2vw] xl:leading-[2vw] mt-[15vw] xl:mt-[3vw] text-stone-200"
            >
            <h1>/PROJECT ${proj.projectNo}  </h1>
            </div>

            <div class="w-full xl:w-[46vw] mt-[6vw] xl:mt-0">
              <div class="uppercase">
                <div class="border-t-[0.1vw] mt-[1vw]"></div>
                
                <div
                class="credit  text-[8vw] leading-normal md:text-[7vw] xl:text-[4vw] xl:leading-[4vw] my-[0.8vw]"
                >
                <span>credits</span>
                </div>
                <div class="border-t-[0.1vw] mt-[1vw]"></div>
${proj.credits
  .map((credit) => {
    return `
        <div class=" mt-[-0.2vw]">
        <div>
        <div
          class="credit-subhead text-[4.2vw] leading-[3.6vw] sm:text-[20px] sm:leading-[24px] lg:text-[25px] lg:leading-[29px] xl:text-[1.5vw] xl:leading-[1.5vw] mt-[3vw] sm:mt-[2vw] xl:mt-[1vw]"
        >
          ${credit.creditSubhead}:
        </div>
        <div class="flex justify-between items-center">
          <div
            class="credit-ans text-[4.2vw] sm:text-[20px] lg:text-[25px] xl:text-[1.5vw]"
          >
            ${credit.creditAns}
          </div>
    
          <div
            class="h-[4vw] w-[4vw] sm:h-[3vw] sm:w-[3vw] xl:h-[1.3vw] xl:w-[1.3vw]"
          >
            <img
              src="../src/assets/img/arrow4.png"
              class="h-full w-full object-contain"
              alt="”right-down"
              arrow”
            />
          </div>
        </div>
      </div>
        
          <div
            class="w-full border-t-[0.1vw] mt-[1vw] xl:mt-[0.5vw]"
          ></div>

        

        

          
        </div>
        `;
  })
  .join("")}
              </div>
            </div>
          </div>

          

     
            <div class="flex justify-between items-end mt-[15vw] xl:mt-[4vw]">
            <div>
              <div class="mb-[15vw]">
                <h1
                  class="ta text-[4.8vw] leading-[4.8vw] xl:text-[2vw] xl:leading-[2vw] uppercase"
                >
                ${artist.Projects[0].projectImages.projectName}
                </h1>
                <h1
                  class="film1 text-[3vw] leading-[3vw] xl:text-[1.6vw] xl:leading-[1.6vw] mt-[1.3vw] xl:mt-[0.09vw] uppercase underline"
                >
                  Music Film
                </h1>
              </div>

              <div
                class="h-[24vw] min-h-[24vw] w-[17vw] md:h-[22vw] md:min-h-[22vw] md:w-[19vw] xl:h-[40vh] xl:min-h-[40vh] xl:w-[20vw]"
              >
          
                <img
                  src="${artist.Projects[0].projectImages.imageI}"
                  class="h-full w-full object-cover brightness-50"
                  alt="”left-down"
                  arrow”
                />
              </div>
            </div>

            <div
            class="h-[76vw] min-h-[76vw] w-[65vw] md:h-[72vw] md:min-h-[72vw] md:w-[72vw] xl:h-screen xl:min-h-screen xl:w-[46vw]"
          >
            <img
              src="${artist.Projects[0].projectImages.imageII}"
              class="h-full w-full object-cover brightness-50"
              alt="”left-down"
              arrow”
            />
          </div>

          </div>
            
       

          

          <div class="mt-[12vw] xl:mt-[7vw]">
            <div
              class="styl-dir text-[10vw] leading-[10.2vw] xl:text-[6vw] xl:leading-[6vw] uppercase xl:w-[60vw]"
            >
              <h1>${artist.Projects[0].ourVisionHead}</h1>
            </div>

            <!-- Large Screen -->
            <div
              class="w-[46.5vw] justify-end mt-[2vw] [display:none] xl:flex"
            >
              <div class="h-[3.5vw] w-[3.5vw]">
                <img
                  src="../src/assets/img/arrow2.png"
                  class="h-full w-full object-contain"
                  alt="”left-down"
                  arrow”
                />
              </div>
            </div>

            <!-- Small Screen -->
            <div class="mt-[5vw] h-[7vw] w-[7vw] xl:[display:none]">
              <img
                src="../src/assets/img/arrow2.png"
                class="h-full w-full object-contain"
                alt="”left-down"
                arrow”
              />
            </div>
          </div>

          <div
            class="xl:flex justify-center mt-[10vw] md:mt-[8vw] xl:mt-[5vw]"
          >
            <div class="flex flex-col justify-center xl:items-center">
              <div
                class="subHead text-[6vw] leading-[7vw] md:text-[30px] md:leading-[36px] xl:text-[3.6vw] xl:leading-[4.2vw] w-[45vw] xl:w-[30vw]"
              >
                <div class="xl:text-center">Our Visionary Techniques</div>
              </div>

              <div class="subBody mt-[4vw] xl:mt-[3vw]">
                <div
                  class="xl:text-center leading-6 text-[15px] sm:leading-7 md:text-[12px] md:leading-[18px] xl:text-[1.1vw] xl:leading-normal w-[65vw] xl:w-[27vw] text-stone-300"
                >
                ${artist.Projects[0].ourVision}
                </div>
              </div>
            </div>
          </div>

          <div class="mt-[10vw] xl:mt-[7vw]">
            <div class="flex justify-around">
              <div
                class="blackWhite h-[22vw] min-h-[22vw] w-[19vw] xl:h-[47vh] xl:min-h-[47vh] xl:w-[22vw] mt-[47vw] xl:mt-[24vw] relative"
              >
                <img
                  src="${artist.Projects[0].ourVisionImages[0]}"
                  class="bwImg h-full w-full object-cover brightness-50 grayscale absolute top-0 left-0"
                  alt="”left-down"
                  arrow”
                />
              </div>

              <div
                class="blackWhite h-[70vw] min-h-[70vw] w-[45vw] xl:h-[90vh] xl:min-h-[90vh] xl:w-[44vw] relative"
              >
                <img
                  src="${artist.Projects[0].ourVisionImages[1]}"
                  class="bwImg h-full w-full object-cover brightness-50 grayscale absolute top-0 left-0"
                  alt="”left-down"
                  arrow”
                />
              </div>

              <div
                class="blackWhite h-[22vw] min-h-[22vw] w-[19vw] xl:h-[47vh] xl:min-h-[47vh] xl:w-[22vw] relative"
              >
                <img
                  src="${artist.Projects[0].ourVisionImages[2]}"
                  class="bwImg h-full w-full object-cover brightness-50 grayscale absolute top-0 left-0"
                  alt="”left-down"
                  arrow”
                />
              </div>
            </div>
          </div>

          <div
            class="flex justify-center items-center mt-[15vw] xl:mt-[7vw]"
          >
            <div>
              <div>
                <div
                  class="integrate text-[7vw] leading-[7.5vw] xl:text-[4vw] xl:leading-[4.5vw] xl:w-[80vw]"
                >
                  /${artist.Projects[0].ourVisionStatement}
                </div>
                <p
                  class="n italic text-[5.5vw] xl:text-[2.5vw] mt-[1.5vw] xl:mt-0"
                >
                  (N)
                </p>
              </div>

              <!-- Large Screen -->
              <div
                class="justify-around text-[1.4vw] leading-[1.4vw] uppercase mt-[1vw] px-[6vw] [display:none] xl:flex"
              >
                <div class="btn-orange">Identity</div>
                <div class="btn-orange">Fashion</div>
                <div class="btn-orange">Lifestyle</div>
                <div class="btn-orange">Trends</div>
              </div>

              <!-- Small Screen -->
              <div
                class="flex flex-col items-center text-[3.6vw] leading-[3.6vw] xl:text-[1.4vw] xl:leading-[1.4vw] uppercase mt-[10vw] px-[6vw] xl:[display:none]"
              >
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
            <div
              class="blackWhite h-[80vw] min-h-[80vw] w-[65vw] sm:w-[60vw] xl:h-[93vh] xl:min-h-[93vh] xl:w-[44vw] relative"
            >
              <img
                src="${artist.sliderAttr.imageI}"
                class="bwImg h-full w-full object-cover brightness-50 grayscale absolute top-0 left-0"
                alt="”left-down"
                arrow”
              />
            </div>
          </div>

          <div class="mt-[25vw] xl:mt-[7vw]">
            <div>
              <div
                class="sd text-[12vw] leading-[12.5vw] xl:text-[8vw] xl:leading-[8.5vw] uppercase"
              >
                <h1>Style Direction</h1>
                <h1>Style Direction</h1>
                <h1>Style Direction</h1>
              </div>

              <div class="flex justify-end mt-[17vw]">
                <div
                  class="cd text-[12vw] leading-[12.5vw] xl:text-[8vw] xl:leading-[8.5vw] uppercase"
                >
                  <h1>Costume Designs</h1>
                  <h1>Costume Designs</h1>
                  <h1>Costume Designs</h1>
                </div>
              </div>
            </div>
          </div>

          <div class="flex justify-center mt-[15vw] xl:mt-[7vw]">
            <div class="flex flex-col justify-center xl:items-center">
              <div
                class="subHead text-[6vw] leading-[7vw] xl:text-[3.6vw] xl:leading-[4.2vw] w-[50vw] xl:w-[30vw]"
              >
                <div class="xl:text-center">Adaptability to Trends</div>
              </div>

              <div class="subBody mt-[3vw]">
                <div
                  class="xl:text-center text-[15px] leading-6 xl:text-[1.1vw] xl:leading-normal w-[70vw] xl:w-[27vw] text-stone-300"
                >
                ${artist.Projects[0].trendsHead}
                </div>
              </div>
            </div>
          </div>



  <div class="mt-[15vw] xl:mt-[7vw] mb-[10vw] flex items-center">
  <div
    class="xl:flex justify-between items-center w-[58vw] mr-[5vw]"
  >
    <div
      class="blackWhite h-[70vw] min-h-[70vw] w-[55vw] xl:h-[57vh] xl:min-h-[57vh] xl:w-[27vw] mb-[6vw] relative"
    >
      <img
        src="${proj.trendsImages[0]}"
        class="bwImg h-full w-full object-cover brightness-50 grayscale absolute top-0 left-0"
        alt="”left-down"
        arrow”
      />
    </div>

    <div>
      <div
        class="blackWhite h-[70vw] min-h-[70vw] w-[55vw] xl:h-[57vh] xl:min-h-[57vh] xl:w-[27vw] mb-[5vw] relative"
      >
        <img
        src="${proj.trendsImages[1]}"
          class="bwImg h-full w-full object-cover brightness-50 grayscale absolute top-0 left-0"
          alt="”left-down"
          arrow”
        />
      </div>

      <div
        class="blackWhite h-[70vw] min-h-[70vw] w-[55vw] xl:h-[57vh] xl:min-h-[57vh] xl:w-[27vw] relative"
      >
        <img
        src="${proj.trendsImages[2]}"
          class="bwImg h-full w-full object-cover brightness-50 grayscale absolute top-0 left-0"
          alt="”left-down"
          arrow”
        />
      </div>
    </div>
  </div>

            <div class="flex flex-col items-center">
              <div
                class="bold11 text-[27vw] leading-[27vw] xl:text-[13vw] xl:leading-[13vw]"
              >
                <ul class="flex flex-col items-center">
                  <li>W</li>
                  <li>I</li>
                  <li>L</li>
                  <li>D</li>
                </ul>
              </div>

              <div class="h-[9vw] w-[9vw] mt-[2vw]">
                <img
                  src="../src/assets/img/navRoll.png"
                  class="h-full w-full object-contain"
                  alt="”brand”"
                />
              </div>
            </div>
          </div>

          <div class="mt-[20vw] xl:mt-[6vw]">
            <div class="ml-[2vw]">
              <div class="film text-[15vw] leading-[14vw] uppercase">
                The Film
              </div>
            </div>
            <div class="mt-[3vw]">
              <div>
                <div
                  class="aspect-video w-full xl:w-[70vw] min-h-[40vh] h-[40vh] xl:min-h-[60vh] xl:h-[60vh] bg-zinc-900"
                >
                  <iframe
                    class="h-full w-full aspect-video"
                    src="${proj.projectFilm}"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; 
                                picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>

          <div
            class="heavenNote uppercase mt-[15vw] xl:mt-[7vw] text-[12px] sm:text-[13px] leading-4 md:text-[10px] md:leading-[13px] xl:text-[0.85vw] xl:leading-[0.95vw]"
          >
            <div class="lg:flex">
              <div>
                <div
                  class="w-[70vw] sm:w-[55vw] md:w-[45vw] lg:w-[33vw] xl:w-[35vw] px-[1vw] mr-[5vw] xl:mr-[6vw]"
                >
                  <h1>
                    One of the primary objectives of a music video is to
                    captivate the audience visually. The styling and costume
                    designs play a central role in achieving this goal. They
                    are not just about adorning the artist but are
                    instrumental in crafting a visual narrative that
                    resonates with the song's message and evokes emotions.
                  </h1>

                  <div class="flex items-end justify-between">
                    <div
                      class="heaven-subHead text-[5vw] md:text-[26px] xl:text-[2vw] mt-[2.5vw] md:mt-[1.5vw] xl:mt-[1vw]"
                    >
                      VISUAL IMPACT
                    </div>
                    <div class="subHead-no">1</div>
                  </div>
                </div>
              </div>

              <div
                class="flex justify-end lg:block mt-[14vw] md:mt-[9vw] lg:mt-0"
              >
                <div
                  class="w-[70vw] sm:w-[55vw] md:w-[45vw] lg:w-[23vw] px-[1vw] text-right lg:mt-[4vw]"
                >
                  <h1>
                    The Wardrobe choices tell a story within the music
                    video. Each outfit represents a different facet of the
                    narrative, character development, or emotional arc.
                    Costume changes indicate shifts in the song's mood or
                    lyrics, enriching the viewer's understanding of the
                    music's context.
                  </h1>

                  <div class="flex items-end justify-between">
                    <div class="subHead-no">2</div>
                    <div
                      class="heaven-subHead text-[5vw] md:text-[26px] xl:text-[2vw] mt-[2.5vw] md:mt-[1.5vw] xl:mt-[1vw]"
                    >
                      STORY TELLING
                    </div>
                  </div>
                </div>
              </div>

              <div class="mt-[15vw] md:mt-[9vw] lg:mt-0">
                <div
                  class="w-[70vw] sm:w-[55vw] md:w-[45vw] lg:w-[30vw] xl:w-[32vw] px-[1vw] lg:mt-[8vw]"
                >
                  <h1>
                    In the competitive world of music videos, being
                    memorable is key. Unique and carefully thought-out
                    wardrobe choices can leave a lasting impression on
                    viewers. When the audience can recall the video because
                    of the striking fashion choices, it enhances the video's
                    longevity and potential for going viral.
                  </h1>

                  <div class="flex items-end justify-between">
                    <div
                      class="heaven-subHead text-[5vw] md:text-[26px] xl:text-[2vw] mt-[2.5vw] md:mt-[1.5vw] xl:mt-[1vw]"
                    >
                      MEMORABILITY
                    </div>
                    <div class="subHead-no">3</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
            
            `;
            }).join('')}

            
   
          </div>
        </div>
      </div>



        <div class="flex items-center">
          <div class="h-[20vw] w-[28vw] xl:w-[31vw]">
            <img
              src="../src/assets/img/longArrow.png"
              class="h-full w-full object-contain"
              alt="”left-down"
              arrow”
            />
          </div>
          <div class="next text-[17vw] leading-[17vw] ml-[2vw]">
            <h1>NEXT</h1>
          </div>
        </div>
    </section1>
    
    
    `;
    };

    document.querySelector("wrapper").innerHTML = showArtist();
  }
};

loadPage();
