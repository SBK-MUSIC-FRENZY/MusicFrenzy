const startPage = document.querySelector(".start-page")
const categoriesPage = document.querySelector(".categories-page")
const quizPage = document.querySelector(".quiz-page")
const finalPage = document.querySelector(".final-page")

const startButton = document.getElementById("start-btn")
const categoryBtn = document.querySelectorAll(".btn-style")
const categoryTitle = document.querySelector(".category-title")
const songChoices = document.querySelectorAll(".options")
let correctChoices = []
let Choices;

//orrectChoicess= correctChoices.genre.hiphop


//correctChoices.push(genre.)

startButton.addEventListener('click', () => {
    startPage.style.display = "none";
    categoriesPage.style.display = "flex";
})

startButton.addEventListener('mouseover', () => {
    startButton.style.backgroundColor = "#142455"
    startButton.style.width = "155px"
    startButton.style.height = "55px"
})

startButton.addEventListener('mouseout', () => {
    startButton.style.backgroundColor = ""
    startButton.style.width = ""
    startButton.style.height = ""
})
changeText();

let clickedON;
let pickedGenre;
function changeText () {
    categoryBtn.forEach(node => {
        node.addEventListener('click', () => {
            categoriesPage.style.display = "none";
            quizPage.style.display = "flex";
            categoryTitle.innerText = `${node.innerText}`;
            clickedON = node.id;
            pickedGenre = node.id;
            genreValues= Object.keys(genre[pickedGenre])
            Choices= shuffleArray(genreValues)
        })
    })
}

function shuffleArray(genreValues){
    for(let i = genreValues.length - 1;i>0;i--){
        const j = Math.floor(Math.random() * (i +1));
        [genreValues[i], genreValues[j]] = [genreValues[j], genreValues[i]]
    }
    return genreValues;
}

const genre = {
   "hiphop": {
        "Humble": "/Resources/rema.mp3",
        "Ozone": "/Resources/rema.mp3",
        "breakingBad": "/Resources/rema.mp3",
        "Demons": "/Resources/rema.mp3",
    },
   "rb": {
        "To You": "/Resources/rema.mp3",
        "Walked In":"/Resources/rema.mp3",
        "Barking": "/Resources/rema.mp3",
    },
    "indies": {
        "drugs": "/Resources/rema.mp3",
        "Promise": "/Resources/rema.mp3",
        "One in a Million": "/Resources/rema.mp3",
        "That Thresh":"/Resources/rema.mp3",
    },
    "tophits":{
        "BoysALiar": "/Resources/rema.mp3",
        "KillBill": "/Resources/rema.mp3",
    },
    "throwback":{
        "Just The Two of Us": "/Resources/rema.mp3",
       // "Crazy": "/Resources/rema.mp3",
        "Party up": "/Resources/rema.mp3",
        "California Love": "/Resources/rema.mp3",
        "Doo wop": "/Resources/rema.mp3",
    },
    "afrobeats":{
       "Party With a Jagaban": "/Resources/rema.mp3",
       "Come We Bill Eh": "/Resources/rema.mp3",
       "Last Last": "/Resources/rema.mp3",
       "KU LO SA": "/Resources/rema.mp3",
    },
}

// let counter = 0
// function fillIn () {
//     if(counter<4){
//     songChoices.forEach(button => {
//         debugger;
//         button.innerText= Choices[counter]
//         counter++
//         })}else{
//             return
//         }
//     }
// fillIn()