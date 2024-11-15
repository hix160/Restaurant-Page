import chefImgSrc from "./images/joe.jpg";


function createHome() {
    const contentContainer = document.querySelector("div#content");
    contentContainer.innerHTML = "";


    const homeContainer = document.createElement("div");
    homeContainer.classList.add("home");

    const chefImg = document.createElement("img");
    chefImg.src = chefImgSrc;


    contentContainer.appendChild(homeContainer)
    homeContainer.appendChild(chefImg);
    homeContainer.appendChild(createParagraph("Welcome to simple Joe's"));
    homeContainer.appendChild(createParagraph("We have every comfort food that you will ever need!"));
    homeContainer.appendChild(createParagraph("We are the best from the best!"));
    

}

function createParagraph(text) {
    const paragraph = document.createElement("p");
    paragraph.textContent = text;
    return paragraph;
  }


export default createHome