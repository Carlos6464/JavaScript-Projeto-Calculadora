


function resposta() {
    let a =  parseInt(document.getElementById("validationCustom01").value);
    let b = parseInt(document.getElementById("validationCustom03").value); 
    let op = document.getElementById("validationCustom02").value;
    let res; 
     
    switch (op) {
        case "1":
            res = adicao(a, b);
            break;
        case "2":
            res = subtracao(a,b);
            break;
        case "3":
            res = multiplicao(a,b);
            break;
        case "4":
            res = divisao(a,b);
            break
        default:
            res = "Opção invalida";
            break;
    }
    
    document.getElementById("resultado").innerHTML = "O resultado é: " + res;
    
}



const adicao = function(a,b){
    return a + b ;
}

const subtracao = function(a,b){
    return a - b;
}

const multiplicao = function(a,b){
   return a * b;
}

const divisao = function(a,b){
   return a / b;
}







