function sortear (){// feita para sortear os numeros
    let quantidade = parseInt(document.getElementById("quantidade").value);// aqui ele pega apenas parte inteira  do valor que digitei em quantidade
    let de = parseInt(document.getElementById("de").value);//aqui ele pega apenas a parte inteira do campo "de"
    let ate = parseInt(document.getElementById("ate").value);//aqui ele pega apenas a parte inteira do campo "ate"
    let sortiados = [];//lista pra guardar os sortiados
    let numero;
    

    for  (let i = 0; i < quantidade; i++){//loop usado para fazer a quantidade de vezes que queremos que apareça o numero
        numero = obterNumeroAlea(de, ate);//puxando a função sortiar
        //sortiados.push(numero);//

        while (sortiados.includes(numero)){
            numero = obterNumeroAlea(de, ate);
        }

        sortiados.push(numero)

    }
    
    let numerosSorteados = document.getElementById("resultado");
    numerosSorteados.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sortiados}  </label>`
    alterarStatusBotao();
}

function obterNumeroAlea(min, max){

    return (Math.floor(Math.random() * (max - min)) + min);
}

function alterarStatusBotao(){
    let botao = document.getElementById('btn-reiniciar');
    if(botao.classList.contains('container__botao-desabilitado')){

        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');

    }else{

        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }
}

function reiniciar(){

    document.getElementById("quantidade").value = "";
    document.getElementById("de").value = "";
    document.getElementById("ate").value = "";
    document.getElementById("resultado").innerHTML = `<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>`;
    alterarStatusBotao();
}
