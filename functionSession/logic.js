import add from './math.js';

console.log(add(2, 3));



// function calculate(){
//     const num1 = document.getElementById("num1Txt").value;
//     const num2 = document.getElementById("num2Txt").value;
//     alert(add(num1, num2));
// }


document.getElementById("calBtn").addEventListener("click",()=>{
    const num1 = parseInt(document.getElementById("num1Txt").value);
    const num2 = parseInt(document.getElementById("num2Txt").value);
    alert(add(num1, num2));

})