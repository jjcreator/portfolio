const scrollContainer = document.querySelector("#scroll-wrapper");
console.log(scrollContainer);

const bottomArrow = document.querySelector("#bottom");
const topArrow = document.querySelector("#top");
const leftArrow = document.querySelector("#left");
const rightArrow = document.querySelector("#right")
let currentRow = 0;
let currentColumn = 0;

topArrow.style.display = "none";

bottomArrow.addEventListener("click", ()=> {
    currentRow++;
    topArrow.style.display = "flex";
    bottomArrow.style.display = "none";
    leftArrow.style.display = "none";
    rightArrow.style.display = "none";
    changePosition("vertical");
});

topArrow.addEventListener("click", ()=> {
    currentRow--;
    topArrow.style.display = "none";
    bottomArrow.style.display = "flex";
    leftArrow.style.display = "flex";
    rightArrow.style.display = "flex";
    changePosition("vertical");
});

leftArrow.addEventListener("click", ()=> {
    currentColumn++;
    
    leftArrow.style.display = "none";
    bottomArrow.style.display = "none";
    changePosition("horizontal");
});

rightArrow.addEventListener("click", ()=> {
    currentColumn--;
    
    rightArrow.style.display = "none";
    bottomArrow.style.display = "none";
    changePosition("horizontal");
});

const changePosition = direction => {
    if (direction === "vertical") {
        scrollContainer.style.transform = `translateY(-${currentRow * 100}vh)`
    }
    else scrollContainer.style.transform = `translateX(${currentColumn * 100}vw)`
    if (currentColumn === 0 && currentRow === 0) {
        bottomArrow.style.display = "flex";
        leftArrow.style.display = "flex";
        rightArrow.style.display = "flex";
    }
}

window.addEventListener("keydown", e => {
    let keyPressed = e.key;
    switch(keyPressed) {
        case "ArrowDown": if(currentRow === 0) {
            currentRow++;
            topArrow.style.display = "flex";
            bottomArrow.style.display = "none";
            leftArrow.style.display = "none";
            rightArrow.style.display = "none";
            changePosition("vertical");
        }
        break;
        case "ArrowUp": if(currentRow === 1) {
            currentRow--;
            topArrow.style.display = "none";
            bottomArrow.style.display = "flex";
            leftArrow.style.display = "flex";
            rightArrow.style.display = "flex";
            changePosition("vertical");
        }
        break;
        
    }
})
