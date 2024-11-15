import "./style.css";
import createHome from "./home";
import createMenu from "./menu";
import createContact from "./contact";



createHome();


const homeButton = document.querySelector("#home");
homeButton.addEventListener("click", () => {
    createHome()
    
});
const menuButton = document.querySelector("#menu");
menuButton.addEventListener("click", ()=> {
    createMenu()
});

const contactButton = document.querySelector("#contact");
contactButton.addEventListener("click", () => {
    createContact()
});
