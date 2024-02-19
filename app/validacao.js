
function verificarSeChuteTemValorValido(palpiteRodada){
    const numero = +palpiteRodada //converte uma string em um número

    if(numero === numeroSecreto){//ele acertar o valor
        document.body.innerHTML = `<h2> Você acertou </h2>  
        <h3> O número secreto era ${numeroSecreto} </h3>
        <button id="jogar-novamente" class="btn-jogar" > Jogar novamente </button>`
        return
    }

    if(Number.isNaN(numero)){//verifica se não for numero retorna true
        if(palpiteRodada == 'Game Over.'){
            window.location.href = "gameover.html"
            return
        }
        console.log(palpiteRodada)
        palpite.innerHTML += `<div> Valor inválido </div> <div> ${palpiteRodada} </div> `
        return
    }

    if(numeroForMaiorOuMenorQueValorPermitido(numero)){
        if(numero < numeroSecreto){
            palpite.innerHTML = `<div>Você disse:</div>
            <span class="box" >${palpiteRodada}</span>
            <div>O número secreto é maior <i class="fa-solid fa-arrow-up"></i></div>` 
            return
        }
        else{
            palpite.innerHTML = `<div>Você disse:</div>
            <span class="box" >${palpiteRodada}</span>
            <div>O número secreto é menor <i class="fa-solid fa-arrow-down"></i></div>` 
            return
        }
    }else{
        palpite.innerHTML = `<div>Você disse:</div>
            <span class="box" >${palpiteRodada}</span>
            <div>O número secreto precisa estar entre ${menorValor} e ${maiorValor}</div>` 
            return
    }

    
    

    
}

function numeroForMaiorOuMenorQueValorPermitido(numero){
    if(menorValor <= numero && numero <=maiorValor ){
        return true
    }
    else{
        return false
    }
}

//uma forma diferente de ativar eventos sem usar querySelector 
document.body.addEventListener('click', e => {
    if(e.target.id == 'jogar-novamente'){
        window.location.reload() //atualiza a página
    }
    if(e.target.id == 'jogar-novamente-game-over'){
        window.location.href = "index.html"
    }

})