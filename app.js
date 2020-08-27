// Preloader

const preloader = document.querySelector(".preloader");
const body = document.querySelector("body");
const nav = document.querySelector(".nav")
const mainButton = document.querySelector(".main__button");
const mainShowcase = document.querySelector(".main__showcase")
preloader.style.display = "flex"
body.style.height = "100vh"

const initializeMainContent = () => {
    preloader.style.display = "none";
    body.style.height = "100%";
    mainShowcase.classList.add("zoom");
}

// Video loading

const vid = document.querySelector(".showcase__video")
const source = document.querySelector("source")
const mainHeader = document.querySelector(".main__header");
const mainSubheader = document.querySelector(".main__subheader");

const shouldVidLoad = () => {
    if(window.innerWidth > 767) {
        source.setAttribute("src", "video/Neon-4.webm");
    }
    else {
        source.setAttribute("src", "");
    }
    if(source.getAttribute("src") === "video/Neon-4.webm" && vid.currentTime === 0) {
        vid.load();
        vid.playbackRate = 2;
        vid.pause();
        vid.style.opacity = "0"
    }
}

// Initial animations

addEventListener("load", ()=> {
    shouldVidLoad();
    if(window.innerWidth < 767) {
        initializeMainContent();
    }
    else {
        vid.addEventListener("canplaythrough", initializeMainContent);
    }
});

mainShowcase.addEventListener("animationend", ()=> {
    mainButton.style.opacity = "1"
    mainButton.classList.add("pop");
    vid.style.opacity = "1";
    vid.play()
    vid.removeEventListener("canplaythrough", initializeMainContent)
})

mainButton.addEventListener("animationend", ()=> {
    mainButton.classList.remove("pop");
    nav.classList.add("slidein");
})

// Video effects

const vidSteeringGrid = document.querySelector(".main__vid-steering-grid");
const gridItem = Array.from(document.querySelectorAll(".main__grid-item"));
let played2times = false;
let headerNumber = 0;
const headersArray = ["jjcreator", "design", "code", "create"];
const colors = ["#fff", "#000", "#4666FF", "#FF8811"]

vid.addEventListener("ended", () => {
    if (vid.style.display != "none") {
        vid.currentTime = 0;
        vid.play();
        if(played2times) {
            headerNumber < 3 ? headerNumber++ : headerNumber = 0;
            headerNumber === 0 ? mainSubheader.innerText = "front-end developer" : mainSubheader.innerText = "";
            vid.style.filter = `hue-rotate(${Math.floor(Math.random() * 361)}deg)`;
            if(vid.style.display !="none") {
                mainHeader.innerText = headersArray[headerNumber];
                headersArray[headerNumber] != "jjcreator" ? mainHeader.style.top = "30%":mainHeader.style.top = "28%"
                mainHeader.style.color = colors[headerNumber];
            }
        }
        played2times = !played2times;
    }
    else {played2times = 0}
})

vidSteeringGrid.addEventListener("mouseout", ()=> {
    vid.style.top = "10%";
    vid.style.left = "50%"
})

gridItem.forEach(item => item.addEventListener("mouseover", ()=> {
    switch(gridItem.indexOf(item)) {
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

const vidSwitch = document.querySelector(".main__vid-switch");
const switchCircle = document.querySelector(".main__switch-circle")
let vidOff = false;

vidSwitch.addEventListener("click", ()=> {
    vidOff = !vidOff
    if(vidOff) {
        vid.style.display = "none";
        vid.pause();
        mainHeader.innerText = "jjcreator";
        mainSubheader.innerText = "front end developer"
        mainHeader.style.color = "#fff"
        switchCircle.style.transform = "translateX(80%)";
        switchCircle.style.backgroundColor = "var(--attention-color)";
        switchCircle.classList.add("main__switch-circle--red-shadow");

    }
    else {
        vid.style.display = "block";
        vid.play();
        mainHeader.style.color = "#fff";
        switchCircle.style.transform = "translateX(-80%)";
        switchCircle.style.backgroundColor = "#4666FF";
        switchCircle.classList.remove("main__switch-circle--red-shadow");
    }
})

// Language change

const flagsArray = document.querySelectorAll(".nav__flag");
const english = document.querySelectorAll(".english");
const polish = document.querySelectorAll(".polish");
const nameInput = document.querySelector(".name");
const emailInput = document.querySelector(".email");
const subjectInput = document.querySelector(".subject");
const textarea = document.querySelector(".message");

flagsArray.forEach(flag => {
    flag.addEventListener("click", e => {
        if(e.target.dataset.lang === "english") {
            english.forEach(text => {
                text.style.display = "block";
            })
            polish.forEach(text => {
                text.style.display = "none"
            });
            document.querySelector("html").setAttribute("lang", "en");

        }
        else {
            english.forEach(text => {
                text.style.display = "none";
            })
            polish.forEach(text => {
                text.style.display = "block"
            })
            document.querySelector("html").setAttribute("lang", "pl");
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

// Mobile menu

const mobileLinks = document.querySelectorAll(".mobile-link");
const mobileMenu = document.querySelector(".mobile");
const mobileToggle = document.querySelector(".hamburger");
const mobileSpan1 = document.querySelector("#span1");
const mobileSpan2 = document.querySelector("#span2")
const mobileSpan3 = document.querySelector("#span3")

let menuOpen = false;

mobileToggle.addEventListener("click", ()=> {
    if(menuOpen) {
        mobileMenu.style.transform ="translateX(100%)";
        mobileSpan1.style.transform = "none"
        mobileSpan2.style.opacity = "1";
        mobileSpan2.style.transform = "none"
        mobileSpan3.style.transform = "none"
    }
    else {
        mobileMenu.style.transform ="translateX(0%)"
        mobileSpan1.style.transform = "translate(0px, 8px) rotate(45deg)"
        mobileSpan2.style.opacity = "0";
        mobileSpan2.style.transform = "scale(0.2)"
        mobileSpan3.style.transform = "translate(0px, -8px) rotate(-45deg)"
    }
    menuOpen = !menuOpen
})

mobileLinks.forEach(link => link.addEventListener("click", ()=> {
    mobileMenu.style.transform ="translateX(100%)";
    mobileSpan1.style.transform = "none"
    mobileSpan2.style.opacity = "1";
    mobileSpan2.style.transform = "none"
    mobileSpan3.style.transform = "none"
    menuOpen = !menuOpen
}));

const langToggle = document.querySelector(".lang-toggle");
const langToggleSwitch = document.querySelector(".lang-toggle__switch");
let translated = false;

langToggle.addEventListener("click", ()=> {
    if(!translated) {
        langToggleSwitch.style.transform = "translateX(55px) rotate(360deg)";
        langToggleSwitch.style.backgroundImage = "url(images/PL1.svg)";
        english.forEach(text => {
            text.style.display = "none";
        })
        polish.forEach(text => {
            text.style.display = "block"
        })
        document.querySelector("html").setAttribute("lang", "pl")
    }
    else {
        langToggleSwitch.style.transform = "translateX(0px) rotate(0deg)";
        langToggleSwitch.style.backgroundImage = "url(images/ENG1.svg)";
        english.forEach(text => {
            text.style.display = "block";
        })
        polish.forEach(text => {
            text.style.display = "none"
        });
        document.querySelector("html").setAttribute("lang", "en")
    }
        translated = !translated
})


