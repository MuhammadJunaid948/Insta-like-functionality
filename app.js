
const img = document.querySelector(".container")
const love = document.querySelector("i")


img.addEventListener("dblclick",function(){
        love.style.transform = "translate(-50%,-50% ) scale(0)"
        love.style.opacity = "0";
        setTimeout(function(){
            love.style.transform = "translate(-50%,-50% ) scale(1)"
        love.style.opacity = "0.8";
           
        },1000)
        setTimeout(function(){
            love.style.opacity = "0";
        },3000)
})
// I've used settimeout() logic this time

