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

// Modal

const modal = document.querySelector(".modal");
const modalBackground = document.querySelector(".modal-background");
modal.style.display = "none";
modalBackground.style.display = "none";
const modalExit = document.querySelector(".modal-exit");

modalExit.addEventListener("click", ()=> {
    modal.style.display = "none";
    modalBackground.style.display = "none";
});

modalBackground.addEventListener("click", ()=> {
    modal.style.display = "none";
    modalBackground.style.display = "none";
})

const projectItems = document.querySelectorAll(".projects-grid-item");

projectItems.forEach(item => item.addEventListener("click", ()=> {
    modal.style.display = "flex";
    modalBackground.style.display = "block";
}))