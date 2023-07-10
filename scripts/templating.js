function renderNavbar(){
    document.getElementsByTagName("body")[0].innerHTML = 
    `<div id="navbar">

        <a class="logo" href="index.html">
            <img src="assets/logo/candor_logo-icon.png">
            <div class="logoText">
                <p class="candorText">CANDOR</p>
                <p>INTELLIGENT SOLUTIONS</p>
            </div>
        </a>

        <div id="navbarSide">
            <a href="contact.html" id="contactButton">Contact</a>
        </div>
    </div>
    <div class="navbarGap"></div>
    ` + document.getElementsByTagName("body")[0].innerHTML;
}


function renderFooter(){
    document.getElementsByTagName("body")[0].innerHTML += `
    <div class="bigGap"></div>
    <div id="footer">

        <div class="logo" href="index.html">
            <img src="assets/logo/candor_logo-icon.png">
            <div class="logoText">
                <p class="candorText">CANDOR</p>
                <p>INTELLIGENT SOLUTIONS</p>
            </div>
        </div>

        <div id="contacts">
            <a href="tel:3463877153"><img src="assets/svg/phone.svg">(346) 387-7153</a>
            <a href="mailto:support@solutionsbycandor.com"><img src="assets/svg/mail.svg">support@solutionsbycandor.com</a>
        </div>

        <a id="linkedinLink">
            <img src="assets/svg/linkedin.png">
        </a>

    </div>
    `
}