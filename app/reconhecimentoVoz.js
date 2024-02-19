const palpite = document.querySelector('#chute')
var SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition()
recognition.lang = 'pt-Br' //a linguagem que será reconhecida vai ser português do Brasil
recognition.start()//liga  o microfone

recognition.addEventListener('result', onSpeak)

//exibe tudo que é falado no console
function onSpeak(e){
    let palpiteRodada = e.results[0][0].transcript
    verificarSeChuteTemValorValido(palpiteRodada)
    //mostrarPalpite(palpiteRodada)
}

function mostrarPalpite(palpiteRodada){
    palpite.innerHTML   = `<div>Você disse:</div>
            <span class="box" >${palpiteRodada}</span>
            <div>O número secreto é maior <i class="fa-solid fa-arrow-up"></i></div>`
}

//evento de end quando ele acabar ele faz alguma coisa
recognition.addEventListener('end', () => recognition.start())



