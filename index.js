function paint(color){
    if (color == "random"){
        color = generateRandomColor()
    }
    let circle = document.getElementById("circleId")
    circle.style = `background-color: ${color}`;
    // OR
    //circle.style.backgroundColor = color

}
function generateRandomColor(){
    let maxVal = 0xFFFFFF; // 16777215
    let randomNumber = Math.random() * maxVal; 
    randomNumber = Math.floor(randomNumber);
    randomNumber = randomNumber.toString(16);
    let randColor = randomNumber.padStart(6, 0);   
    return `#${randColor.toUpperCase()}`
}