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