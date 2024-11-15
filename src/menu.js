import burgerImgSrc from "./images/burger.jpg";
import burritoImgSrc from "./images/burrito.jpg";
import chickenNuggetsImgSrc from "./images/chicken-nuggets.jpg";
import frenchFriesImgSrc from "./images/french-fries.jpg";
import hotDogImgSrc from "./images/hotdog.jpg";
import iceCreamImgSrc from "./images/ice-cream.jpg";
import nachosImgSrc from "./images/nachos.jpg";
import pizzaImgSrc from "./images/pizza.jpg";


function createMenu() {
    const contentContainer = document.querySelector("div#content");
    contentContainer.innerHTML = "";

    const menuContainer = document.createElement("div");
    menuContainer.classList.add("menu");

    contentContainer.appendChild(menuContainer)

    menuContainer.appendChild(
        createMenuItem(
            "Burger",
            "This is a burger",
            burgerImgSrc
        )
    )
    menuContainer.appendChild(
        createMenuItem(
            "Burrito",
            "This is a burrito",
            burritoImgSrc
        )
    )
    menuContainer.appendChild(
        createMenuItem(
            "Chicken Nuggerts",
            "These are chicken nuggets",
            chickenNuggetsImgSrc
        )
    )
    menuContainer.appendChild(
        createMenuItem(
            "French Fries",
            "These are french fries",
            frenchFriesImgSrc
        )
    )
    menuContainer.appendChild(
        createMenuItem(
            "Hot Dog",
            "This is a hot dog",
            hotDogImgSrc
        )
    )
    menuContainer.appendChild(
        createMenuItem(
            "Ice Cream",
            "This is ice cream",
            iceCreamImgSrc
        )
    )
    menuContainer.appendChild(
        createMenuItem(
            "Nachos",
            "These are nachos",
            nachosImgSrc
        )
    )
    menuContainer.appendChild(
        createMenuItem(
            "Pizza",
            "This is pizza",
            pizzaImgSrc
        )
    )




    
    
    
    
    

}

function createMenuItem(name, description, imgSrc) {
    const menuItem = document.createElement("div");
    menuItem.classList.add("menu-item");
  
    const foodName = document.createElement("h2");
    foodName.textContent = name;
  
    const foodDescription = document.createElement("p");
    foodDescription.textContent = description;

    

    const foodImage = document.createElement("img");
    foodImage.src = imgSrc;
    foodImage.alt = `${name}`;
  
    menuItem.appendChild(foodImage);
    menuItem.appendChild(foodName);
    menuItem.appendChild(foodDescription);
  
    return menuItem;
  }


export default createMenu