const scrollContainer = document.querySelector("#scroll-wrapper");
const bottomArrow = document.querySelector("#bottom");
const topArrow = document.querySelector("#top");
const leftArrow = document.querySelector("#left");
const rightArrow = document.querySelector("#right")
let currentRow = 0;
let currentColumn = 0;

topArrow.style.display = "none";

bottomArrow.addEventListener("click", ()=> {
    currentRow++;
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
    if (currentColumn === 1 && currentRow === 0) {
        bottomArrow.style.display = "flex";
        leftArrow.style.display = "flex";
        rightArrow.style.display = "flex";
    }
}

const mouseScroll = e => {
        if(e.deltaY > 0) {
            currentRow++;
            changePosition("vertical");
        }
        else {
            currentRow--;
            changePosition("vertical");
        }
        window.removeEventListener("wheel", mouseScroll);
        setTimeout(()=> {
            window.addEventListener("wheel", mouseScroll);
        }, 600)
}

window.addEventListener("wheel", mouseScroll);

window.addEventListener("keydown", e => {
    let keyPressed = e.key;
    switch(keyPressed) {
        case "ArrowDown": 
            currentRow++;
            changePosition("vertical");
            break;
        case "ArrowUp":
            currentRow--;
            changePosition("vertical");
            break;
        case "ArrowLeft": if(currentColumn != 1) {
            currentColumn++;
            leftArrow.style.display = "none";
            bottomArrow.style.display = "none";
            changePosition("horizontal");
        }
        break;
        case "ArrowRight": if(currentColumn != -1) {
            currentColumn++;
            rightArrow.style.display = "none";
            bottomArrow.style.display = "none";
            changePosition("horizontal");
        }
        break;
        
    }
})
