let menuopen = document.querySelector(".menuopen")
let menuclose = document.querySelector(".menuclose")
let menu = document.querySelector(".menu")

menuopen.addEventListener("click",()=>{
    menu.style.left="0" 
})
menuclose.addEventListener("click",()=>{
    menu.style.left="-350px" 
})

let facebook = document.querySelector(".bi-facebook")
facebook.addEventListener("click", ()=>{
    window.open('','_blank')
})
let whatsapp = document.querySelector(".bi-whatsapp")
whatsapp.addEventListener("click", ()=>{
    window.open('','_blank')
})
let instagram = document.querySelector(".bi-instagram")
instagram.addEventListener("click", ()=>{
    window.open('','_blank')
})