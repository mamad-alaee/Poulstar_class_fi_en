let curcles = document.querySelectorAll(".curcle")
curcles.forEach((curcle)=>{
    curcle.addEventListener("dragend",(e)=>{
        curcle.style.left = e.clientX - curcle.offsetWidth/2 - 100 +"px"
        curcle.style.top = e.clientY - curcle.offsetHeight/2 +"px"
    })
})

let curcles2 = document.querySelectorAll(".curcle2")
curcles2.forEach((curcle2)=>{
    curcle2.addEventListener("dragend",(e)=>{
        curcle2.style.left = e.clientX - curcle2.offsetWidth/2 - 700 +"px"
        curcle2.style.top = e.clientY - curcle2.offsetHeight/2 +"px"
    })
})


// const circle_white = document.getElementById("circle_white")
// circle_white.addEventListener("dragend",(e)=>{
//     circle_white.style.left = e.clientX - circle_white.offsetWidth/2 - 100 +"px"
//     circle_white.style.top = e.clientY - circle_white.offsetHeight/2 +"px"
// })