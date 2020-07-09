// Scroll container navigation

const scrollContainer = document.querySelector("#scroll-wrapper");
const bottomArrow = document.querySelector("#bottom");
const topArrow = document.querySelector("#top");
const linksArray = Array.from(document.querySelectorAll(".link"));
let currentRow = 0;

linksArray.forEach(link => {
    link.addEventListener("click", ()=> {
        currentRow = linksArray.indexOf(link);
        scrollContainer.style.transition = "none";
        changePosition();
        setTimeout(()=> {
            scrollContainer.style.transition = "ease-in 1s transform"
        }, 1)
    })
});

bottomArrow.addEventListener("click", ()=> {
    changeRow("down");
    changePosition();
});

topArrow.addEventListener("click", ()=> {
    changeRow("up");
    changePosition();
});

const changeRow = direction => {
    switch(direction) {
        case "up": currentRow > 0 ? currentRow--: null;
        break;
        case "down": currentRow < 3 ? currentRow++: null;
        break;
        default: break;
    }
}

const changePosition = () => {
    scrollContainer.style.transform = `translateY(-${currentRow * 100}vh)`
}

const mouseScroll = e => {
        if(e.deltaY > 0) {
            changeRow("down");
            changePosition();
        }
        else {
            changeRow("up");
            changePosition();
        }
        window.removeEventListener("wheel", mouseScroll);
        setTimeout(()=> {
            window.addEventListener("wheel", mouseScroll);
        }, 500)
}

window.addEventListener("wheel", mouseScroll);

window.addEventListener("keydown", e => {
    window.removeEventListener("wheel", mouseScroll);
    let keyPressed = e.key;
    switch(keyPressed) {
        case "ArrowDown": 
            changeRow("down");
            changePosition();
            break;
        case "ArrowUp":
            changeRow("up");
            changePosition();
            break;
        default: break;
    }
});

window.addEventListener("keyup", ()=> {
    window.addEventListener("wheel", mouseScroll);
});

// Main page 

const mainButton = document.querySelector(".main-button");
mainButton.addEventListener("click", ()=> {
    currentRow = 1;
    changePosition();
})

// Language change 

const flagsArray = document.querySelectorAll(".flag");
const english = document.querySelectorAll(".english");
const polish = document.querySelectorAll(".polish");

flagsArray.forEach(flag => {
    flag.addEventListener("click", e => {
        if(e.target.id === "english") {
            english.forEach(text => {
                text.style.display = "block";
            })
            polish.forEach(text => {
                text.style.display = "none"
            })
        }
        else {
            english.forEach(text => {
                text.style.display = "none";
            })
            polish.forEach(text => {
                text.style.display = "block"
            })
        }

    })
})

// Contact form 

const submitButton = document.querySelector(".submit")

submitButton.addEventListener("click", e => e.preventDefault())