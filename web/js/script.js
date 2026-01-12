let menuopen = document.querySelector(".menuopen")
let menuclose = document.querySelector(".menuclose")
let menu = document.querySelector(".menu")

menuopen.addEventListener("click",()=>{
    menu.style.left="0" 
})
menuclose.addEventListener("click",()=>{
    menu.style.left="-350px" 
})