// const namiralmomenin = document.getElementById("namiralmomenin")
// const doroqGooAzam = document.getElementById("doroqGooAzam")
// const dozdBozorg = document.getElementById("dozdBozorg")


// namiralmomenin.style.backgroundColor = "red"
// doroqGooAzam.style.backgroundColor = "red"
// dozdBozorg.style.backgroundColor = "red"




function darkMode(){
    const AkhondBtns = document.querySelectorAll(".AkhondBtn")
    AkhondBtns.forEach((AkhondBtn)=>{
        AkhondBtn.style.backgroundColor = "black"
        AkhondBtn.style.color = "white"
    })
}