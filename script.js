var v1 = 0 //primeiro valor
var v2 = 0 // segundo valor
var oper = "" //operador atibuido a funcao operador
var resultado = 0 //resultado da operacao na funcao equal
var total = '' //string dos numeros clicados
var ver = false; //se o v1 for inserido = true, senao false

//eventos de botoes do teclado
document.addEventListener ('keypress', (event) => {
    if(event.key == '1'){
        addNum(1);
    }else if(event.key == '2'){
        addNum(2);
    }else if(event.key == '3'){
        addNum(3);
    }else if(event.key == '4'){
        addNum(4);
    }else if(event.key == '5'){
        addNum(5);
    }else if(event.key == '6'){
        addNum(6);
    }else if(event.key == '7'){
        addNum(7);
    }else if(event.key == '8'){
        addNum(8);
    }else if(event.key == '9'){
        addNum(9);
    }else if(event.key == '0'){
        addNum(0);
    }else if(event.key == '.'){
        addNum('.');
    }else if(event.key == '.'){
        addNum('.');
    }else if('c' || event.key || 'C' ){
        operador('C');
    }else if(event.key == '/'){
        operador('/');
    }else if(event.key == 'X'){
        operador('X');
    }else if(event.key == '+' ){
        operador('+');
    }else if(event.key == '-' ){
        operador('-');
    }else if(event.key == '%'){
        equal('%');
    }else if('=' ||event.key || 'Enter'){
        equal('=');
    }
});
//eventos de botoes do teclado



function addNum(num){ //funcao de adicionar numero -param (numero clicado)

    if(ver == false && (oper=="" || oper!="")){ 
        //ver so fica true quando é calculado
        var visor = document.getElementById('visor');
        total = total + num.toString();
        visor.innerText = total;
    }else if(ver == true && oper==""){
        //condicao de ponto de parada
    }else{
        var visor = document.getElementById('visor');
        total = total + num.toString();
        visor.innerText = total;
    }
    
}

function operador(op){ //funcao de adicionar operador a operacao

    if(op == "C"){
        //se for igual a C reseta as configs da calc
        v1 = 0;
        v2 = 0;
        oper = "";
        ver = false;
        document.getElementById('visor').innerText = "";
        total = "";
    }else if(oper == "" && ver == false && op != "C"){
        //se for diferente de C, armazena o primeiro valor e limpa o campo digitado
        v1 = Number(total);
        oper = op;
        total = "";
        document.getElementById('visor').innerText = "";
    }else if(oper == "" && ver == true){
        //se o operador for vazio e o primeiro valor ja for inserido, so limpa o campo.
        oper = op;
        total = "";
        document.getElementById('visor').innerText = "";
    }
}

function equal(signal){

    if(signal == "%"){
        
        if(oper == "+"){
            v2 = Number(total); 
            resultado = v1 + ((v1 * v2)/100);
            v1 = resultado;
            oper = "";
            ver = true;
            document.getElementById('visor').innerText = resultado.toFixed(2);
        }else if(oper=="-"){
            v2 = Number(total); 
            resultado = v1 - ((v1 * v2)/100);
            v1 = resultado;
            oper = "";
            ver = true;
            document.getElementById('visor').innerText = resultado.toFixed(2);
            
        }else if(oper=="X"){
            v2 = Number(total);
            resultado = v1 * ((v1 * v2)/100);
            v1 = resultado;
            oper = "";
            ver = true;
            document.getElementById('visor').innerText = resultado.toFixed(2);
            
        }else if(oper=="/"){
            v2 = Number(total);
            resultado = v1 / ((v1 * v2)/100);
            v1 = resultado;
            oper = "";
            ver = true;
            document.getElementById('visor').innerText = resultado.toFixed(2);
        }


    }else if(signal == "="){

        if(oper == "+"){
            v2 = Number(total); 
            resultado = v1 + v2;
            v1 = resultado;
            oper = "";
            ver = true;
            document.getElementById('visor').innerText = resultado.toFixed(2);
        }else if(oper=="-"){
            v2 = Number(total); 
            resultado = v1 - v2;
            v1 = resultado;
            oper = "";
            ver = true;
            document.getElementById('visor').innerText = resultado.toFixed(2);
            
        }else if(oper=="X"){
            v2 = Number(total);
            resultado = v1 * v2;
            v1 = resultado;
            oper = "";
            ver = true;
            document.getElementById('visor').innerText = resultado.toFixed(2);
            
        }else if(oper=="/"){
            v2 = Number(total);
            resultado = v1 / v2;
            v1 = resultado;
            oper = "";
            ver = true;
            document.getElementById('visor').innerText = resultado.toFixed(2);
        }
    }
}

function deletar(){
    total = total.slice(0, -1);
    var visor = document.getElementById('visor');
    visor.innerText = total;
}