const createFooter=()=>{
    let footer=document.querySelector('footer');

    footer.innerHTML=`
    <div class="footer-content">
    <img src="img/nng.jpg" class="logo" alt="">
        <div class="footer-ul-container">
            <ul class="category"><a href="#" class="category-title">Categories</a>
                <li><a href="product.html" class="footer-link">Mobile</a></li>
                <li><a href="laptab.html" class="footer-link">Laptops</a></li>
                <li><a href="laptab.html" class="footer-link">Computers</a></li>
                <li><a href="watches.html" class="footer-link">Smartwatches</a></li>
                <li><a href="tv.html" class="footer-link">Tv</a></li>
                <li><a href="tab.html" class="footer-link">Tablets</a></li>
                <li><a href="cover.html" class="footer-link">Phone Covers</a></li>
                <li><a href="speaker.html" class="footer-link">Speakers</a></li>
                <li><a href="cables.html" class="footer-link">Data Cables</a></li>
                <li><a href="headphones.html" class="footer-link">Headphones</a></li>
            </ul>
        </div>
    </div>
    <div class="description">
        <pre>E-Mail: supportnewgentech.com</pre>
        <pre>Telephone: +91 9318324453</pre>
    </div>
    <div class="footer-social-container">
        <div>
            <a href="#" class="social-link">terms&condition</a>
            <a href="#" class="social-link">privacy page</a>
        </div>
        <div>
            <a href="#" class="social-link">instagram</a>
            <a href="#" class="social-link">facebook</a>
            <a href="#" class="social-link">twitter</a>
        </div>
    </div>
    <p class="footer-credit">New Gen,Best Technology Online Store </p>
    
    `;
}

createFooter();/**
 * 
 */