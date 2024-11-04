//Stores text and button in variable
const textElement= document.querySelector("#text"); 
const changeColorButton = document.querySelector("#changeColorButton");

function changeTextColor(){
    const colors = ["red", "yellow", "green", "orange", "black", "blue"];
    changeColorButton.addEventListener("click", () => {
        const randomColor = colors[Math.floor(Math.random()* colors.length)]; 
        textElement.style.color = randomColor; 
    })
} 
changeTextColor(); 

const pictureElement = document.getElementById("toggle-image"); 
function changePicture(){


const images = [
    "https://www.lohud.com/gcdn/authoring/authoring-images/2024/03/04/PWES/72834051007-jm-030324-girls-c-b-ball-final-47.jpg?width=1838&height=1419&fit=crop&format=pjpg&auto=webp",
    "https://www.lohud.com/gcdn/authoring/authoring-images/2024/03/04/PWES/72834038007-jm-030324-girls-c-b-ball-final-33.jpg?width=1838&height=1217&fit=crop&format=pjpg&auto=webp", 
    "https://www.lohud.com/gcdn/authoring/authoring-images/2024/03/04/PWES/72834029007-jm-030324-girls-c-b-ball-final-25.jpg?width=1838&height=1160&fit=crop&format=pjpg&auto=webp"
]; 

let currentIndex = 0; 

pictureElement.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    pictureElement.src = images[currentIndex]; 
});
}

changePicture()