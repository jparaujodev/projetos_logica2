

function comprar(){
    let tipoDeIngresso = document.getElementById('tipo-ingresso');
    let qtd = parseInt(document.getElementById('qtd').value);
    if(tipoDeIngresso.value == 'pista'){
        comprarPista(qtd);
        
    

    }else if(tipoDeIngresso.value == 'superior'){
        comprarSuperior(qtd);
    
    }else{
        comprarInferior(qtd);

    };

}

function comprarPista(qtd){
    let qtdPista =  parseInt(document.getElementById('qtd-pista').textContent);
    if(qtd > qtdPista){
        alert('Quantidade não é possivel comprar');
    }else{
        qtdPista = qtdPista - qtd;
        document.getElementById('qtd-pista').textContent = qtdPista;
        alert('Compra realizada!')
    }

}

function comprarInferior(qtd){
    let qtdInferior =  parseInt(document.getElementById('qtd-inferior').textContent);
    if(qtd > qtdInferior){
        alert('Quantidade não é possivel comprar');
    }else{
        qtdInferior = qtdInferior - qtd;
        document.getElementById('qtd-inferior').textContent = qtdInferior;
        alert('Compra realizada!')
    }

}

function comprarSuperior(qtd){
    let qtdSuperior =  parseInt(document.getElementById('qtd-superior').textContent);
    if(qtd > qtdSuperior){
        alert('Quantidade não é possivel comprar');
    }else{
        qtdSuperior = qtdSuperior - qtd;
        document.getElementById('qtd-superior').textContent = qtdSuperior;
        alert('Compra realizada!')
    }

}