
let startbtn = document.querySelector(".start")
let savebtn = document.querySelector(".save")
let stopbtn = document.querySelector(".stop")
let input = document.querySelector("input")
let balonplace = document.querySelector(".balonplace")
let checkboxs = document.querySelectorAll(".checkbox")
let main = document.querySelector('main')
let scorediv = document.querySelector(".score")

// take count from user
let addtime
let user
let balons
let score = 0

startbtn.addEventListener('click', addbubble)

checkboxs.forEach(item => {
    item.addEventListener('click', () => {
        if (item.checked && item.nextElementSibling.textContent == "Easy") {
            clearInterval(addtime)
            addtime = setInterval(() => {
                let random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
                let div = document.createElement("div")
                div.classList.add("balon")
                div.style.left = `${random(0, 430 - 200)}px`
                div.style.top = `${random(0, 430 - 200)}px`
                balonplace.appendChild(div)
                div.addEventListener('click', () => {
                    div.style.display = 'none'
                    score = score + 1
                    let text = `${user}, your score is:${score} `
                    scorediv.innerHTML = text
                })
            }, 3000)
        }
        else if (item.checked && item.nextElementSibling.textContent == "Medium") {
            clearInterval(addtime)
            addtime = setInterval(() => {
                let random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
                let div = document.createElement("div")
                div.classList.add("balon")
                div.style.left = `${random(0, 430 - 200)}px`
                div.style.top = `${random(0, 430 - 200)}px`
                balonplace.appendChild(div)
                div.addEventListener('click', () => {
                    div.style.display = 'none'
                    score = score + 1
                    let text = `${user}, your score is:${score} `
                    scorediv.innerHTML = text
                })
            }, 2000)
        }
        else if (item.checked && item.nextElementSibling.textContent == "Hard") {
            clearInterval(addtime)
            addtime = setInterval(() => {
                let random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
                let div = document.createElement("div")
                div.classList.add("balon")
                div.style.left = `${random(0, 430 - 200)}px`
                div.style.top = `${random(0, 430 - 200)}px`
                balonplace.appendChild(div)
                div.addEventListener('click', () => {
                    div.style.display = 'none'
                    score = score + 1
                    let text = `${user}, your score is:${score} `
                    scorediv.innerHTML = text
                })
            }, 1000)
        }
    })
})
function addbubble(score) {
    main.style.display = 'flex'
    startbtn.style.display = 'none'
    user = prompt("Please enter your name");
}
stopbtn.addEventListener('click', stop)
function stop() {
    clearInterval(addtime)
}
savebtn.addEventListener('click', takedata)
function takedata() {
    clearInterval(addtime)
    localStorage.setItem('username', user);
    localStorage.setItem('score',score);
    balonplace.innerHTML=''
}
