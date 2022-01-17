let home = document.getElementById("home")
let what = document.getElementById("what")
let test = document.getElementById("test")
let gall = document.getElementById("gall")
let contact = document.getElementById("contact")

home.addEventListener("click",()=>{
    window.scrollTo({left:0,top:0,behavior:"smooth"})
})

what.addEventListener("click",()=>{
    window.scrollTo({left:0,top:800,behavior:"smooth"})
})

test.addEventListener("click",()=>{
    window.scrollTo({left:0,top:1790,behavior:"smooth"})
})


gall.addEventListener("click",()=>{
    window.scrollTo({left:0,top:2640,behavior:"smooth"})
})
  

contact.addEventListener("click",()=>{
    window.scrollTo({left:0,top:3600,behavior:"smooth"})
})


let header = document.getElementById("header")

window.addEventListener("scroll",()=>{
    if(window.scrollY> 0){
    header.classList.add("hscroll")
    }
    else{
header.classList.remove ("hscroll")
    } 
    
    
})



