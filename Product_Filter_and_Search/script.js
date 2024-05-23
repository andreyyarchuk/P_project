let products = {
	data: [
		{
			productName: 'regular White T-shirt',
			category: 'Topwear',
			price: '30',
			image: './images/white-tshirt.jpg',
		},

		{
			productName: 'Beige Short Skirt',
			category: 'Bottomwear',
			price: '49',
			image: './images/short-skirt.jpg',
		},

		{
			productName: 'Sporty SmartWatch',
			category: 'Watch',
			price: '99',
			image: './images/sporty-smartWatch.jpg',
		},

		{
			productName: 'Basis knitted Top',
			category: 'Topwear',
			price: '29',
			image: './images/knitted-top.jpg',
		},

		{
			productName: 'Black Leather Jacket',
			category: 'Jacket',
			price: '129',
			image: './images/black-leather-jacket.jpg',
		},

		{
			productName: 'Stylish Pink Trousers',
			category: 'Bottomwear',
			price: '89',
			image: './images/pink-trouser.jpg',
		},

		{
			productName: "Brown Men's Jacket",
			category: 'Jacket',
			price: '189',
			image: './images/brown-jacket.jpg',
		},

		{
			productName: 'Comfy Gray Pants',
			category: 'Bottomwear',
			price: '49',
			image: './images/comfy-gray-pants.jpg',
		},
	],
}

for (let i of products.data) {
	// console.log('finish')
	// Create Card
	let card = document.createElement('div')
	// Card should have category and should stay hidden initially
	card.classList.add('card', i.category, 'hide')
	// Image div
	let imgContainer = document.createElement('div')
	imgContainer.classList.add('image-container')
	// img tag
	let image = document.createElement('img')
	image.setAttribute('src', i.image)
	imgContainer.appendChild(image)
	card.appendChild(imgContainer)

	// container
	let container = document.createElement('div')
	container.classList.add('container')
	// product name
	let name = document.createElement('h5')
	name.classList.add('product-name')
	name.innerText = i.productName.toUpperCase()
	container.appendChild(name)
	// price
	let price = document.createElement('h6')
	// price.classList.add('price')
	price.innerText = ' $' + i.price

	card.appendChild(container)
	card.appendChild(price)
	document.getElementById('products').appendChild(card)
}

// Parameter passed from button (Parameter same as category)
function filterProduct(value) {
	// Button class code
	let buttons = document.querySelectorAll('.button-value')
	buttons.forEach(button => {
		// check if value equals innerText
		if (value.toUpperCase() == button.innerText.toUpperCase()) {
			button.classList.add('active')
		} else {
			button.classList.remove('active')
		}
	})

	// select all cards
	let elements = document.querySelectorAll('.card')
	elements.forEach(element => {
		// display all cards on 'all button click'
		if (value == 'All') {
			element.classList.remove('hide')
		} else {
			//  Check if element contains category class
			if (element.classList.contains(value)) {
				// display element based on category
				element.classList.remove('hide')
			} else {
				// hide all elements
				element.classList.add('hide')
			}
		}
	})
}

// Search button click
document.getElementById('search').addEventListener('click', () => {
	// initializations
	let searchInput = document.getElementById('search-input').value
	let elements = document.querySelectorAll('.product-name')
	let cards = document.querySelectorAll('.card')

	// loop through all elements
	elements.forEach((element, index) => {
		// check if text includes the search value
		if (element.innerText.includes(searchInput.toUpperCase())) {
			// display matching card
			cards[index].classList.remove('hide')
		} else {
			// hide others
			cards[index].classList.add('hide')
		}
	})
})

// Initially display all products
window.onload = () => {
	filterProduct('All')
}
