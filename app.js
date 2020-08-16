// Video controls

const vid = document.querySelector(".showcase__video")
const mainHeader = document.querySelector(".main__header");
const mainSubheader = document.querySelector(".main__subheader");
vid.playbackRate = 1.8;

const steering = Array.from(document.querySelectorAll(".steer"));
const vidSteeringGrid = document.querySelector(".showcase__steering-grid");

let double = false;
let count = 0;
const headersArray = ["jjcreator", "coding", "design", "creativity"];
const colors = ["#000", "#fff", "#4666FF", "orange"]

vid.addEventListener("ended", e=> {
    if (vid.style.display != "none") {
        e.target.currentTime = 0;
        e.target.play();
        if(!double) {
            count < 3 ? count++ : count = 0;
            count === 0 ? mainSubheader.innerText = "front end developer" : mainSubheader.innerText = "is my passion";
            vid.style.filter = `hue-rotate(${Math.floor(Math.random() * 361)}deg)`;
            mainHeader.innerText = headersArray[count];
            mainHeader.style.color = colors[count];
        
        }
        double = !double;
    }
    else {count = 0}
})

vidSteeringGrid.addEventListener("mouseout", ()=> {
    vid.style.top = "10%";
    vid.style.left = "50%"
})

steering.forEach(item => item.addEventListener("mouseover", ()=> {
    switch(steering.indexOf(item)) {
        case 0: vid.style.left = "48%";
                vid.style.top = "8%";
                break;
        case 1: vid.style.top = "8%";
                vid.style.left = "50%";
                break;
        case 2: vid.style.top = "8%";
                vid.style.left="52%";
                break;
        case 3: vid.style.left = "48%";
                vid.style.top = "10%";
                break;
        case 4: vid.style.top = "10%";
                vid.style.left= "50%";
                break;
        case 5: vid.style.left = "52%";
                vid.style.top = "10%";
                break;
        case 6: vid.style.top = "12%";
                vid.style.left = "48%";
                break;
        case 7: vid.style.top = "12%";
                vid.style.left = "50%";
                break;
        case 8: vid.style.top = "12%";
                vid.style.left = "52%";
                break; 
        default: break;
    }
}))

// Off

const offButton = document.querySelector(".showcase__off-button");
const offButtonToggle = document.querySelector(".off-button__toggle")
let toggle = false;

offButton.addEventListener("click", ()=> {
    toggle = !toggle;
    if(toggle) {
        vid.style.display = "none";
        vid.pause();
        mainHeader.innerText = "jjcreator";
        mainSubheader.innerText = "front end developer"
        mainHeader.style.color = "#fff"
        offButtonToggle.style.transform = "translateX(80%)";
        offButtonToggle.style.backgroundColor = "var(--attention-color)";
        offButtonToggle.classList.add("red-shadow");

    }
    else {
        vid.style.display = "block";
        vid.play();
        mainHeader.style.color = "#000";
        offButtonToggle.style.transform = "translateX(-80%)";
        offButtonToggle.style.backgroundColor = "#4666FF";
        offButtonToggle.classList.remove("red-shadow");
    }
})

// Language change

const flagsArray = document.querySelectorAll(".flag");
const english = document.querySelectorAll(".english");
const polish = document.querySelectorAll(".polish");
const nameInput = document.querySelector(".name");
const emailInput = document.querySelector(".email");
const subjectInput = document.querySelector(".subject");
const textarea = document.querySelector(".message");

flagsArray.forEach(flag => {
    flag.addEventListener("click", e => {
        if(e.target.id === "english") {
            english.forEach(text => {
                text.style.display = "block";
            })
            polish.forEach(text => {
                text.style.display = "none"
            });
            nameInput.placeholder = "Your name";
            emailInput.placeholder = "Your email";
            subjectInput.placeholder = "Message subject";
            textarea.placeholder = "Type in your message here";

        }
        else {
            english.forEach(text => {
                text.style.display = "none";
            })
            polish.forEach(text => {
                text.style.display = "block"
            })
            nameInput.placeholder = "Imię i nazwisko";
            emailInput.placeholder = "Email";
            subjectInput.placeholder = "Temat wiadomości";
            textarea.placeholder = "Tu wpisz swoją wiadomość";
        }
    })
})

// Icon animations

const iconImages = document.querySelectorAll(".item__img");

iconImages.forEach(icon => {
    icon.addEventListener("mouseover", ()=> {
    icon.classList.add("animatedIcon")})
    icon.addEventListener("animationend", ()=> {
    icon.classList.remove("animatedIcon");
});
})


// Contact form 

const submitButton = document.querySelector(".submit")
submitButton.addEventListener("click", e => e.preventDefault())

