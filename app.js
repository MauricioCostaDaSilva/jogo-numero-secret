let listaDeNumerosSorteados = []
let numeroLimite = 100
let numeroSecreto = gerarNumeroAleatorio()
let tentativas = 1

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag)
    campo.innerHTML = texto
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1})
}

function exibirMensagemIniciar() {
    exibirTextoNaTela ("h1", "Jogo do número secreto")
    exibirTextoNaTela("p", "Escolha um número entre 1 e 100")
    
}

exibirMensagemIniciar()

function verificarChute() {
    let chute = document.querySelector("input").value

     if (chute == numeroSecreto) {
        exibirTextoNaTela("h1", "Acertou!")
        let palavraTentativa = tentativas > 1 ? "Tentativas" : "tentativa"
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`
        exibirTextoNaTela("p", mensagemTentativas)
        document.getElementById("reiniciar").removeAttribute("disabled")
        
    } else{
        if ( chute > numeroSecreto) {
            exibirTextoNaTela( "p", "Número  secreto é menor.")
        } else{
            exibirTextoNaTela("p", "O número secreto é maior")
        }
        tentativas++
        limparCampo()
        }
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1) //o calculo retornará um núremo entre 1 e 10, porque a função random retorna números quebrados, para resolver esse questão uso o ParseInt.
     //É importante usar o Return para conseguir retornar a informação.
     let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length

     if (quantidadeDeElementosNaLista == numeroEscolhido ) {
        listaDeNumerosSorteados = []
        
     }
     if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio()
        } else {
            listaDeNumerosSorteados.push(numeroEscolhido)
            return numeroEscolhido
        }
    
}
function limparCampo () {
    chute = document.querySelector("input")
    chute.value = ""
    
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio ()
    limparCampo()
    tentativas = 1
    exibirMensagemIniciar()
    document.getElementById("reiniciar").setAttribute("disabled", true)

}