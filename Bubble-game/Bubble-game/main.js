
let startbtn=document.querySelector(".start")
let savebtn=document.querySelector(".save")
let stopbtn=document.querySelector(".stop")
let input= document.querySelector("input")
let balonplace=document.querySelector(".balonplace")
let checkboxs=document.querySelectorAll(".checkbox")
let main =document.querySelector('main') 
 let time=3000;



// take count from user
let count=0
let addtime
let user
let balons
let score =0

startbtn.addEventListener('click', addbubble)


  
  
checkboxs.forEach(item=>{
    item.addEventListener('click',()=>{

    if(item.checked && item.nextElementSibling.textContent=="Easy"){
        clearInterval(addtime)

     addtime= setInterval(()=>{
            let div= document.createElement("div")
               div.classList.add("balon")
               balonplace.appendChild(div) 
               balons=document.querySelector(".balon")
               div.addEventListener('click',()=>{
                div.style.display='none'    
            score=score+1           })
         
           }, time)
        console.log(item.nextElementSibling.textContent)
    }
    else if (item.checked&& item.nextElementSibling.textContent=="Medium"){
        clearInterval(addtime)

        time=2000;
        addtime= setInterval(()=>{
            let div= document.createElement("div")
               div.classList.add("balon")
               balonplace.appendChild(div)
               div.addEventListener('click',()=>{
div.style.display='none'       
score=score+1            })
           }, time)
    }
    else if (item.checked&& item.nextElementSibling.textContent=="Hard"){
        clearInterval(addtime)

        time=1000

        addtime=   setInterval(()=>{
            let div= document.createElement("div")
               div.classList.add("balon")
               balonplace.appendChild(div) 
               div.addEventListener('click',()=>{
                div.style.display='none'               })
           }, time)  
           score=score+1      }

})

})
function addbubble(){
    main.style.display= 'flex' 
    startbtn.style.display='none'
  user = prompt("Please enter your name");
  let p=document.createElement('p')
  let text= `${user}, your score is:${score} `
  p.innerHTML=text
  main.append(p)   }

  
  
stopbtn.addEventListener('click', stop)
function stop(){
clearInterval(addtime)
console.log('stop')
}
savebtn.addEventListener('click', takedata)
function takedata(){
    if(input.value){
        startbtn.disabled=false
        
    }
}
// balons.addEventListener('click', ()=>{
//     console.log('salam')
// })