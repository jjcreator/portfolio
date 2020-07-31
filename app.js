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

const projectItems = document.querySelectorAll(".projects-grid-item");
const modal = document.querySelector(".modal");
const modalBackground = document.querySelector(".modal-background");
const modalExit = document.querySelector(".modal-exit");
const modalTitle = document.querySelector(".modal-title");
const modalTextEN = document.querySelector(".modal-textEN");
const modalTextPL = document.querySelector(".modal-textPL");
const modalChallengesListEN = Array.from(document.querySelectorAll(".modal-challengeEN"));
const modalChallengesListPL = Array.from(document.querySelectorAll(".modal-challengePL"));
const modalLiveButton = document.querySelector(".live");
const modalCodeButton = document.querySelector(".code");

projectItems.forEach(item => item.addEventListener("click", ()=> {
    let currentItem = item.dataset.item;
    modal.style.backgroundImage = modals[currentItem].img;
    modalTitle.textContent = modals[currentItem].title;
    modalTextEN.textContent = modals[currentItem].textEN;
    modalTextPL.textContent = modals[currentItem].textPL;
    modalChallengesListEN.map((challenge, index) => {
        challenge.textContent = modals[currentItem].listEN[index]
    });
    modalChallengesListPL.map((challenge, index) => {
        challenge.textContent = modals[currentItem].listPL[index]
    });
    modalLiveButton.href = modals[currentItem].linkLive;
    modal.style.display = "flex";
    modalBackground.style.display = "block";
}))

modalExit.addEventListener("click", ()=> {
    modal.style.display = "none";
    modalBackground.style.display = "none";
});

modalBackground.addEventListener("click", ()=> {
    modal.style.display = "none";
    modalBackground.style.display = "none";
});

// Modal content

const modals = {
    dorian: {
        title: "Dorian Wilczyński",
        textPL: "Mój pierwszy projekt - strona typu portfolio dla autora fantasy wykonana dla członka rodziny. Stonowany, prosty wygląd. Nie korzystałem z zewnętrznych bibliotek czy wtyczek. Ze względu na to, że był to mój pierwszy projekt, każdy jego element stanowił pewne wyzwanie, ale i też okazję do nauki i szlifowania umiejętności. Wiele rzeczy robiłem po raz pierwszy - np. użycie PHP czy zakup i konfiguarcja domeny z hostingiem, a także zamieszczenie strony w sieci.",
        textEN: "My very first serious project - a portfolio site for an fantasy author, made for a family member. Simple, vanilla design. I didn't use any external libraries or plugins. As this was my first project, every part of it was somewhat of a challenge, but at the same time, a great learning opportunity. A lot of the steps involved in creating this project I had never done before - like using PHP, buying and configuring a domain + hosting, or deploying the site to the web",
        listPL: ["Prosta strona", "Oparta na flexboxie", "System sortowania newsów - po 3", "Formularz kontaktowy PHP", "Deployment", "HTML, CSS i JavaScript"],
        listEN: ["Simple website", "Flexbox based", "News sorting system", "Simple php contact form", "Deployment", "HTML, CSS and JavaScript"],
        img: 'url("images/dorian.png")',
        linkLive: "http://www.dorianwilczynski.pl",
        linkCode: "https://github.com/jjcreator/AuthorLandingPage"
    },
    memoryGame: {
        title: "Memory Game",
        textPL: "Gra logiczno-zręcznościowa, jeden z moich pierwszych projektów, przy okazji którego miałem sposbność przećwiczyć znajomość CSS Grida, a także popracować na tablicach i związanych z nimi funkcjach. Pewną trudnością było dostosowanie gry do różnych rozmiarów ekranów. Gra wykonana z pełni darmowych zasóbów znalezionych w sieci.",
        textEN: "A puzzle / arcade game, one of my first projects. Working on it gave me the opportunity to practice using CSS Grid, arrays and array methods. One of the challenges here was making sure the game is responsive on different screen sizes. Game made with free assets found online",
        listPL: ["Prosta gra pozwalająca ćwiczyć szybkie zapamiętywanie", "Oparta o grid", "3 różne poziomy trudności", "3 zestawy obrazków do zabawy", "Muzyka i dźwięk", "HTML, CSS i JavaScript"],
        listEN: ["A simple game to train fast memory recall", "Grid based", "3 difficulty settings", "3 tilesets to play with", "Music and sound", "HTML, CSS and JavaScript"],
        img: 'url("images/memory.png")',
        linkLive: "https://jjcreator.github.io/Memory-Game/",
        linkCode: "https://github.com/jjcreator/Memory-Game"
    },
    medicineBox: {
        title: "Medicine Box",
        textPL: "Aplikacja pozwalająca na śledzenie stanu posiadanych leków, ich zastosowania oraz daty ważności. Powstała w odpowiedzi na realną potrzebę, a przy okazji dała mi okazję poćwiczenia różnego rodzaju funkcji związanych z tablicami, a także obiektami daty. Medicine Box automatycznie zaznacza kolorami przeterminowane lekarstwa, jak i te których termin ważności się niedługo kończy.",
        textEN: "An app to keep track of what medicines you have, their indications for use and date of expiration. Created in response to a real life need, it also gave me the chance to practice working with different array methods, as well as the Date object. Medicine Box automatically labels expired medicines and those which are about to expire with different colors. ",
        listPL: ["Prosta aplikacja", "Filtrowanie i sortowanie danych", "Automatyczne czynności w oparciu o datę", "Przydatna w prawdziwym życiu", "Dane wpisane ręcznie w HTML", "HTML, CSS i JavaScript"],
        listEN: ["A simple app", "Data filtering and sorting", "Automatic color labelling system based on date", "Real life application", "Data hardcoded into the HTML", "HTML, CSS and JavaScript"],
        img: 'url("images/medicine.png")',
        linkLive: "https://jjcreator.github.io/Medicine-Box/",
        linkCode: "https://github.com/jjcreator/Medicine-Box"
    },
    clocks: {
        title: "Clocks",
        textPL: "Aplikacja napisana w React, pozwalająca na sprawdzenie godziny w dowolnej strefie czasowej na świecie i wyświetlenie do 6 zegarów z różnych stref czasowych na raz. Moja pierwsza próba napisania projektu przy użyciu biblioteki React z wykorzystaniem 'hooks'. Apka łączy się z darmowym REST API i pobiera dane dotyczące stref czasowych. Zegar analogowy inspirowany zadaniem z kursu Wes Bos'a 'JavaScript30' z moimi modyfikacjami.",
        textEN: "An React-based app which lets the user check the time in any timezone in the world and display up to 6 clocks from different timezones at the same time. My first attempt at creating a React project (with hooks). Clocks connects to a free REST API to get the timezone data. The analog clock is inspired by a 'JavaScript30' course challenge by Wes Bos, but I've added some features",
        listPL: ["Aplikacja napisana w React", "Łączy się z darmowym REST API", "Animowane zegary analogowe", "Porównuje do 6 stref czasowych na raz", "W pełni responsywna", "HTML, CSS i JavaScript + React ('hooks')"],
        listEN: ["React-based app", "Connects to a free REST API", "Animated analog clocks", "Up to 6 timezones at the same time", "Fully responsive", "HTML, CSS and JavaScript + React (hooks)"],
        img: 'url("images/clocks.png")',
        linkLive: "https://jjcreator.github.io/clocks/",
        linkCode: "https://github.com/jjcreator/clocks"
    },
    businessPage: {
        title: "React business site",
        textPL: "",
        textEN: "Lorem ipsum blah blah blah in english",
        listPL: ["Simple landing site", "Flexbox based", "News sorting system - max 3 news visible at the same time", "Simple php contact form", "Deployment", "Made with HTML, CSS and JavaScript"],
        listEN: ["Simple landing site", "Flexbox based", "News sorting system - max 3 news visible at the same time", "Simple php contact form", "Deployment", "HTML, CSS and JavaScript + React"],
        img: 'url("images/fakelawyers.png")',
        linkLive: "https://jjcreator.github.io/business_page/",
        linkCode: "https://github.com/jjcreator/business_page"
    },
    portfolio: {
        title: "My portfolio",
        textPL: "Lorem ipsum bla bla bla po polsku",
        textEN: "Lorem ipsum blah blah blah in english",
        listPL: ["Simple landing site", "Flexbox based", "News sorting system - max 3 news visible at the same time", "Simple php contact form", "Deployment", "Made with HTML, CSS and JavaScript"],
        listEN: ["Simple landing site", "Flexbox based", "News sorting system - max 3 news visible at the same time", "Simple php contact form", "Deployment", "Made with HTML, CSS and JavaScript"],
        img: 'url("images/balance.png")',
        linkLive: "",
        linkCode: "https://github.com/jjcreator/Portfolio"
    }
}

// Nav sticky

let navbar = document.querySelector(".nav");
const activateNavbar = () => {
    window.scrollY > window.innerHeight ? navbar.style.background = "var(--primary-color)" : 
    window.scrollY <= window.innerHeight * 1 ? navbar.style.background = "transparent": null;
}

const navLinks = document.querySelectorAll(".link")

addEventListener("scroll", activateNavbar);
navLinks.forEach(link => link.addEventListener("click", activateNavbar));
