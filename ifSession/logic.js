// if a>b :
//     print("a is greater than b")
// elif b>a:
//     print("b is greater than a")
// else:
//     print("a is equal to b")


// if(a>b){
//     console.log("a is greater than b");
// }
// else if(b>a){
//     console.log("b is greater than a");
// }
// else{
//     console.log("a is equal to b");
// }

function calculate(){
    let num1 = parseInt(document.getElementById("numb1Txt").value);
    let num2 = parseInt(document.getElementById("numb2Txt").value);
    let operation = document.getElementById("operationTxt").value;
    if(operation == "+"){
        showResult(num1 + num2);
    }
    else if(operation == "-"){
        showResult(num1 - num2);
    }
    else if(operation == "*"){
        showResult(num1 * num2);
    }
    else if(operation == "/"){
        showResult(num1 / num2);
    }
    else{
        alert("Invalid operation");
    }
}


function calculateWithSwitch(){
    let num1 = parseInt(document.getElementById("numb1Txt").value);
    let num2 = parseInt(document.getElementById("numb2Txt").value);
    let operation = document.getElementById("operationTxt").value;
    switch(operation){
        case "+":
            showResult(num1 + num2);
            break;
        case "-":
            showResult(num1 - num2);
            break;
        case "*":
            showResult(num1 * num2);
            break;
        case "/":
            showResult(num1 / num2);
            break;
        default:
            alert("Invalid operation");
            break;
    }
        
}
    
function showResult(result){
        document.getElementById("resultTxt").innerHTML = result;
}


// John , marry , alex , Hasan , Sosan
// let customerName = "John";
// let discount = 0;

// switch(customerName){
//     case "John":
//         discount = 0.9;
//         break;
//     case "Marry":
//         discount = 0.8;
//         break;
//     case "Alex":
//         discount = 0.95;
//         break;
//     case "Hasan":
//         discount = 1.1;
//         break;
//     case "Sosan":
//         discount = 0.1;
//         break;
//     default:
//         discount = 0;
//         break;
// }
