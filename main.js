// selezioniamo l'hamburger menu e l'icona con cui attivarlo all'interno del DOM
const hamburgerMenu = document.querySelector(".hamburger-menu");
const hamburgerMenuIcon = document.querySelector(".header-right ul ~ a");
// usiamo il metodo .addEventListener per raccogliere l'input dell'utente
hamburgerMenuIcon.addEventListener("click", 
    function() {
        hamburgerMenu.classList.add("active");
    } 
)