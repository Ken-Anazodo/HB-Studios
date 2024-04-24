const url = "https://sheetdb.io/api/v1/u1wp3v03b9fe8"
let emailBoxValue = document.getElementById("newsLetterEmail1") 


const showLoading =(params)=>{
	console.log(params)
		if(params == true){
			console.log('loading.......')

			const displayLoading = () => {
				gsap.registerPlugin(ScrollTrigger);

				document.addEventListener("DOMContentLoaded", (event) => {
					gsap.fromTo(".loadCont1", {width: "0%"}, {width: "100%", duration: 4, ease: 'power4.out'})
					// gsap.fromTo(".sentCont1", {width: "0%"}, {width: "100%", duration: 4, ease: 'power4.out'})
				  })
			return `
				<div class='loadCont1 absolute top-0 left-0 w-full h-full flex justify-center items-center text-[1.3vw] z-10'>
					<div class="load text-black">Loading ....</div>
				</div>
			`}
			document.querySelector(".inputCont").innerHTML = displayLoading();
		}else{
			console.log('Message sent')
			
			const differentMessageSent = () => {
				gsap.registerPlugin(ScrollTrigger);

				document.addEventListener("DOMContentLoaded", (event) => {
					// gsap.fromTo(".loadCont1", {width: "0%"}, {width: "100%", duration: 4, ease: 'power4.out'})
					gsap.fromTo(".sentCont1", {width: "0%"}, {width: "100%", duration: 4, ease: 'power4.out'})
				  })
			return `
				<div class='sentCont1 absolute top-0 left-0 w-full h-full flex justify-center items-center text-[1.3vw]  z-20'>
					<div class="sent text-black">Message Sent</div>
				</div>
			`}
			document.querySelector(".inputCont").innerHTML = differentMessageSent();
		}


}

document.getElementById('submitEmail').addEventListener('click', async ()=>{
	let emailVal = emailBoxValue.value
		let date = new Date()
		const validateEmail = (emailVal) => {
			const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
			return emailRegex.test(emailVal);
		  };
		const eval = validateEmail(emailVal)

		

				if(emailVal == ''){

					  
					alert('Email cant be empty')
				}else{

					try {

						if(eval){
							
							showLoading(true);
							await fetch(url, {
								method: 'POST',
								headers: {
									'Accept': 'application/json',
									'Content-Type': 'application/json'
								},
								body: JSON.stringify({
									data: [
										{
											'userId': new Date(Date.now()).getTime(),
											'email': emailVal,
											'date': new Date(date.getTime())
										}
									]
								})
							})
							  .then((response) => response.json())
							  .then((data) => console.log(data));
							  emailBoxValue.value = ''
							  showLoading(false)
					
						}else{
							alert('Invalid email formart')
						}
						
					} catch (error) {
						console.log(error)
					}

				}
			
		
		

})








