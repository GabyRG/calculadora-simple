var display = document.getElementById("displayTexto");
var nuevo = true;
var elementos = [];
var resultado = [];
var error = false;
var ans = false;

function agregarCifra(id){
    if(ans == true){

    }else{let tecla = document.getElementById(id).textContent;
        if (nuevo == true){
            display.innerHTML = tecla;
            nuevo = false;
        }else{
            display.innerHTML = display.textContent + tecla;
        }
    }
}

function reiniciar(){
    display.innerHTML = "0";
    nuevo = true;
    elementos = [];
    resultado = [];
    ans = false;
}

function agregarOperador(id){
    let tecla = document.getElementById(id).textContent;
    if (nuevo == false){
        if(ans = true){
            elementos.pop();
        }
        elementos.push(parseFloat(display.textContent));
        elementos.push(tecla);
        display.innerHTML = tecla;
        nuevo = true;
        ans = false;
        
    }
}

function removerUltimo(){
    if(ans = true){
        display.innerHTML = 0;
        nuevo = true;
        ans = false;
    }else if(elementos.length != 0 && nuevo == true){
        elementos.pop();
        display.innerHTML = elementos[elementos.length -1];
        elementos.pop();
        nuevo = false;
    }else if(elementos.length != 0){
        display.innerHTML = elementos[elementos.length -1];
        nuevo = true;
    }else{
        display.innerHTML = 0;
        nuevo = true;
    }
    
}

function operar(){
    if(nuevo == false){
        elementos.push(parseFloat(display.textContent));

            for(let i = 0; i < elementos.length; i++){

                if(elementos[i] == 'x' || elementos[i] == '/'){

                    if(elementos[i] == 'x'){
                        let calcAuxiliar = elementos[i-1] * elementos[i+1];
                        resultado.pop();
                        resultado.push(calcAuxiliar);
                        for(let j = i+2; j < elementos.length; j++){
                            resultado.push(elementos[j]);
                        }
                        elementos = resultado;
                        resultado = [];
                        i = -1;
                    }else{if(elementos[i] == '/'){

                        if(elementos[i+1] == 0){  

                            error = true;
                            elementos[i+1] = 1;

                        }
                        let calcAuxiliar = elementos[i-1] / elementos[i+1];
                        resultado.pop();
                        resultado.push(calcAuxiliar);
                        for(let j = i+2; j < elementos.length; j++){
                            resultado.push(elementos[j]);
                        }
                        elementos = resultado;
                        resultado = [];
                        i = -1;

                    }};

                } else{

                    resultado.push(elementos[i]);

                };

            };

            elementos = resultado;
            resultado = [];

            for(let i = 0; i < elementos.length; i++){
                if(elementos[i] == '+' || elementos[i] == '-'){

                    if(elementos[i] == '+'){

                        let calcAuxiliar = elementos[i-1] + elementos[i+1];
                        resultado.pop();
                        resultado.push(calcAuxiliar);
                        for(let j = i+2; j < elementos.length; j++){
                            resultado.push(elementos[j]);
                        }
                        elementos = resultado;
                        resultado = [];
                        i = -1;

                    }else{if(elementos[i] = '-'){

                        let calcAuxiliar = elementos[i-1] - elementos[i+1];
                        resultado.pop();
                        resultado.push(calcAuxiliar);
                        for(let j = i+2; j < elementos.length; j++){
                            resultado.push(elementos[j]);
                        }
                        elementos = resultado;
                        resultado = [];
                        i = -1;

                    }};
                } else{

                    resultado.push(elementos[i]);

                }
            };

            elementos = resultado;
            resultado = [];

            if(error == true){
                display.innerHTML = 'Error matemático'

            }else{
                if(elementos[0] % 1 != 0){
                    display.innerHTML = elementos[0].toFixed(3);
                }else{
                    display.innerHTML = elementos[0];
                }
                
            }
        nuevo = false;
        resultado = [];
        error = false;
        ans = true;
    }
}