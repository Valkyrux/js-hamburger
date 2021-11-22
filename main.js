// selezioniamo l'hamburger menu e l'icona con cui attivarlo all'interno del DOM
const hamburgerMenu = document.querySelector(".hamburger-menu");
const hamburgerMenuIcon = document.querySelector(".header-right ul ~ a");
// usiamo il metodo .addEventListener per raccogliere l'input dell'utente e aggiungere la classe active ad hamburger-menu
hamburgerMenuIcon.addEventListener("click", 
    function() {
        hamburgerMenu.classList.add("active");
    } 
)
// individuiamo l'icona per chiudere all'interno del DOM
const closeHamburger = document.querySelector(".close");
// agli eventi click togliamo la classe active da hamburger-menu
closeHamburger.addEventListener("click",
    function() {
        hamburgerMenu.classList.remove("active");
    }    
)