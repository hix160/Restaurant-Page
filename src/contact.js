import houseImgSrc from "./images/house.jpg";


function createContact() {
    const contentContainer = document.querySelector("div#content");
    contentContainer.innerHTML = "";


    const contactContainer = document.createElement("div");
    contactContainer.classList.add("contact");

    const houseImg = document.createElement("img");
    houseImg.src = houseImgSrc;


    contentContainer.appendChild(contactContainer)

    contactContainer.appendChild(houseImg);
    contactContainer.appendChild(createParagraph("Location? This scary house!"));
    contactContainer.appendChild(createParagraph("Phone number: +371 28482991"));
    contactContainer.appendChild(createParagraph("You have a problem?"));
    contactContainer.appendChild(createParagraph("Well its not my problem!"));
    

}

function createParagraph(text) {
    const paragraph = document.createElement("div");
    paragraph.classList.add("text")
    paragraph.textContent = text;
    return paragraph;
  }


export default createContact