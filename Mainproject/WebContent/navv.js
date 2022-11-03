const createNav=()=>{
    let nav=document.querySelector(".navbar");

    nav.innerHTML = `<div class="nav">
            <img src="img/genlogo.png" class="brand-logo" alt="">
            <div class="nav-items">
                <div class="search">
                    <input type="text" class="search-box" placeholder="search brand">
                     <div class="search-bar">
                    <li>Samsung Galaxy S21 5G (Phantom Gray, 8GB, 128GB Storage)</li>
                    <li >Realme Pad 4 GB RAM 64 GB ROM 10.4 inch with Wi-Fi+4G Tablet (Gray)</li>
                    <li >Apple iPhone 13 (256GB) - Midnight</li>
                    <li >Mi 11X 5G cosmic Black 6GB RAM 128GB ROM</li>
                    <li >2021 Apple iPad Pro with Apple M1 chip </li>
                    </div>
                    <button class="search-btn">search</button>
            	</div>
            	<a href="Home.html">
            	<img src="img/userlogo.png" id="user-img" alt="">
            	<div class="login-logout-popup hide">
            		<button class="btn" id="user-btn">Log out</button>
            	</div>
            		</a>
            	<a href="add.html"><img src="img/cartlogo.png" alt=""></a>
            </div>
        </div>
        <section>
        <ul class="link-container">
            <li class="link-item"><a href="main.html" class="link">Home</a></li>
            <li class="link-item"><a href="product.html" class="link">Mobile</a></li>
            <li class="link-item"><a href="laptab.html" class="link">Laptops/Computers</a></li>
            <li class="link-item"><a href="tv.html" class="link">Tv</a></li>
            <li class="link-item"><a href="tab.html" class="link">Tablets</a></li>
            <li class="link-item"><a href="watches.html" class="link">Smartwatches</a></li>
        </ul>
        </section>`;
}
createNav();

const userImageButton=document.querySelector('#user-img');
const userPopup=document.querySelector('.login-logout-popup');
const actionBtn=document.querySelector('#user-btn');

userImageButton.addEventListener('click', ()=> {
	userPopup.classList.toggle('hide');
})


/**
 * 
 */