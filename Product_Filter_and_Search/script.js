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
	// Card should have category
	card.classList.add('card', 'i.category')
	// Image div
	let imgContainer = document.createElement('div')
	imgContainer.classList.add('image-container')
	// img tag
	let image = document.createElement('img')
	image.setAttribute('src', i.image)
	imgContainer.appendChild(image)
	card.appendChild(imgContainer)

	document.getElementById('products').appendChild(card)
}
