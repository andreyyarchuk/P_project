const gameContainer = document.querySelector('.container')
const userResult = document.querySelector('.user_result img')
const cpuResult = document.querySelector('.cpu_result img')
const result = document.querySelector('.result')
const optionImages = document.querySelectorAll('.option_image')

// console.log(optionImage)

optionImages.forEach((image, index) => {
	image.addEventListener('click', e => {
		image.classList.add('active')

		userResult.src = './images/Rock.png'
		cpuResult.src = './images/Rock.png'
		result.textContent = 'Wait...'

		optionImages.forEach((image2, index2) => {
			index !== index2 && image2.classList.remove('active')
		})

		gameContainer.classList.add('start')

		let time = setTimeout(() => {
			gameContainer.classList.remove('start')
			let imageSrc = e.target.querySelector('img').src
			userResult.src = imageSrc

			let randomNumber = Math.floor(Math.random() * 3)

			let cpuImage = [
				'./images/Rock.png',
				'./images/Scissors.png',
				'./images/Paper.png',
			]

			cpuResult.src = cpuImage[randomNumber]

			let cpuValue = ['R', 'S', 'P'][randomNumber]
			let userValue = ['R', 'S', 'P'][index]

			// console.log(cpuValue, userValue)

			let outcomes = {
				RR: 'Draw',
				SS: 'Draw',
				PP: 'Draw',

				PS: 'Cpu',
				PR: 'User',

				RP: 'Cpu',
				RS: 'User',

				SR: 'Cpu',
				SP: 'User',
			}

			let outComeValue = outcomes[userValue + cpuValue]

			// console.log(outComeValue)

			// console.log(result.textContent)

			if (outComeValue != 'Draw') {
				result.textContent = outComeValue + ' won!'
			} else {
				result.textContent = 'Match Draw'
			}
		}, 1500)
	})
})
