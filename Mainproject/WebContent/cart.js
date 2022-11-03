let carts= document.querySelectorAll('.card-btn');
let cart= document.querySelectorAll('.card-bbtn');
let card = document.querySelectorAll('.ccard-btn');
let products=[
	{
	name:'Samsung',
	tag:'Samsung Galaxy S21 5G (Phantom Gray, 8GB, 128GB Storage)',
	price:63000,
	inCart:0
	},
	{
		name:'Realme',
		tag:'realme Pad 4 GB RAM 64 GB ROM 10.4 inch with Wi-Fi+4G Tablet (Gray)',
		price:19162,
		inCart:0
	},
	{
		name:'Apple',
		tag:'Apple iPhone 13 (256GB) - Midnight',
		price:89900,
		inCart:0
	},
	{
		name:'Mi',
		tag:'Mi 11X 5G cosmic Black 6GB RAM 128GB ROM',
		price:27999,
		inCart:0
	},
	{
		name:'Apple',
		tag:'2021 Apple iPad Pro with Apple M1 chip',
		price:69500,
		inCart:0
	},
	{
		name:'Samsung',
		tag:'Samsung Galaxy Tab S7 FE Large Display, Slim Metal Body, Dolby Atmos Sound, S-Pen in Box',
		price:56999,
		inCart:0
	},
	{
		name:'Redmi',
		tag:'Redmi 10 Prime (Phantom Black 4GB RAM 64GB, Helio G88 with extendable RAM Upto 2GB , FHD+ 90Hz Adaptive Sync Display)',
		price:12500,
		inCart:0
	},
	{
		name:'Lenovo',
		tag:'Lenovo Tab P11 Pro,slate grey',
		price:44990,
		inCart:0
	},
	{
		name:'Samsung',
		tag:'Samsung Galaxy Tab S7(11 inch), S pen in box',
		price:63999,
		inCart:0
	},
	{
		name:'Oneplus',
		tag:'OnePlus Nord 2 5G (Blue Haze, 8GB RAM, 128GB Storage)',
		price:30000,
		inCart:0
	}
];

for(let i=0;i<carts.length; i++){
	carts[i].addEventListener('click',()=>{
		cartNumbers(products[i]);
		totalCost(products[i]);
	})
}
for(let i=0;i<cart.length; i++){
	cart[i].addEventListener('click',()=>{
		cartNumbers(products[i]);
		totalCost(products[i]);
	})
}
for(let i=0;i<card.length; i++){
	card[i].addEventListener('click',()=>{
		cartNumbers(products[i]);
		totalCost(products[i]);
	})
}

function cartNumbers(product){
	let productNumbers = localStorage.getItem('cartNumbers');
	productNumbers=parseInt(productNumbers);
	if(productNumbers){
		localStorage.setItem('cartNumbers',productNumbers + 1);
		} else {
			localStorage.setItem('cartNumbers',1);
			}
			
		setItems(product);
}
function setItems(product){
	let cartItems=localStorage.getItem('productsInCart');
	cartItems=JSON.parse(cartItems); 
	
	if(cartItems != null){
		if(cartItems[product.tag] == undefined){
			cartItems= {...cartItems,[product.tag]:product}}
		cartItems[product.tag].inCart += 1;
	}
	else{
	product.inCart=1;
	cartItems={
		[product.tag]:product
	}
	}
	localStorage.setItem("productsInCart",JSON.stringify(cartItems));
}

function totalCost(product){
	
	let cartCost =localStorage.getItem('totalCost');
	
	if(cartCost !=null){
		cartCost=parseInt(cartCost);
		localStorage.setItem("totalCost",cartCost + 
		product.price);
	}
	else{
		localStorage.setItem("totalCost",product.price);
	}
	
	
}
function displayCart(){
	let cartItems=localStorage.getItem("productsInCart");
	cartItems=JSON.parse(cartItems);
	let productContainer=document.querySelector(".products");
	let cartCost =localStorage.getItem('totalCost');
	
	if(cartItems && productContainer ){
		productContainer.innerHTML='';
		Object.values(cartItems).map(item =>{
			productContainer.innerHTML += `
			<div class="mainpro">
				<div class="product">
					<ion-icon name="close-circle"></ion-icon>
					<img src="./img/${item.tag}.png"></img>
					<span class="name">${item.name}</span>
				</div>
				<div class="price">${item.price}</div>
				<div class="quantity">
					<ion-icon name="arrow-dropdown"></ion-icon>
					<span>${item.inCart}</span>
			 		<ion-icon name="arrow-up"></ion-icon>
				</div>
				<div class="total">
					${item.inCart*item.price}
				</div>
			</div>
			`;
		});
		
		productContainer.innerHTML +=`
		<div class="basketTotalConatiner">
			<h4 class="basketTotalTitle">
				Basket Total
			</h4>
			<h4 class="basketTotal">
			${cartCost}
			</h4>
		`;
	}
}

displayCart();