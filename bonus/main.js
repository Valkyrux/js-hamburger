// imposto il container per l'img in flex
const booleanImgContainer = document.querySelector(".header-left");
booleanImgContainer.style.display = "flex";
booleanImgContainer.style.alignItems = "center";
// correggo le regole per l'img in modo tale che sia adattiva
const booleanImg = document.querySelector(".header-left img");
booleanImg.style.margin = "0";
booleanImg.style.width = "60%";
booleanImg.style.height = "auto";

// prepend di un elemento all'interno di right header
const navLgScreen = document.querySelector(".header-right ul");
const hiddenMenuLi = document.createElement("li");
const hiddenMenuA = document.createElement("a");
// aggiungo un href ad a
hiddenMenuA.href = "#";
// ricostruire la struttura della lista
hiddenMenuLi.append(hiddenMenuA);
hiddenMenuA.append("Vengo da JS");
navLgScreen.prepend(hiddenMenuLi);

// cambio colore sull'hover in navLgScreen
const navLgScreenLink1 = document.querySelector(".header-right ul li:nth-child(1) a");
const navLgScreenLink2 = document.querySelector(".header-right ul li:nth-child(2) a");
const navLgScreenLink3 = document.querySelector(".header-right ul li:nth-child(3) a");
const navLgScreenLink4 = document.querySelector(".header-right ul li:nth-child(4) a");
// add EventListener per colorare quello selezionato
navLgScreenLink1.addEventListener("click",
    function() {
        navLgScreenLink1.style.color = "red";
        navLgScreenLink2.style.color = "#565A5C";
        navLgScreenLink3.style.color = "#565A5C";
        navLgScreenLink4.style.color = "#565A5C";
    } 
)
navLgScreenLink2.addEventListener("click",
    function() {
        navLgScreenLink1.style.color = "#565A5C";
        navLgScreenLink2.style.color = "red";
        navLgScreenLink3.style.color = "#565A5C";
        navLgScreenLink4.style.color = "#565A5C";
    } 
)
navLgScreenLink3.addEventListener("click",
    function() {
        navLgScreenLink1.style.color = "#565A5C";
        navLgScreenLink2.style.color = "#565A5C";
        navLgScreenLink3.style.color = "red";
        navLgScreenLink4.style.color = "#565A5C";
    } 
)
navLgScreenLink4.addEventListener("click",
    function() {
        navLgScreenLink1.style.color = "#565A5C";
        navLgScreenLink2.style.color = "#565A5C";
        navLgScreenLink3.style.color = "#565A5C";
        navLgScreenLink4.style.color = "red";
    } 
)


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