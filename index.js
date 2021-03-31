const teclas = document.querySelectorAll('.teclado--botao')
const adicionarNumero = document.querySelectorAll('.numero')
const pisca = document.querySelector('.pisca')
const branco = document.querySelector('.branco')
const votoBranco = document.querySelector('.voto--branco')
const votoCorrige = document.querySelector('.laranja')


window.onload = function(){
    votarBranco()
    corrige()
    selecionarNumero()
}

function selecionarNumero() {
    for(var i = 0; i<10; i++){
        var tecla = teclas[i]
        
        tecla.addEventListener('click', (event) => {
            console.log('oi')
            var teclaSelecionado = event.target.innerHTML
            for(var i = 0; i < adicionarNumero.length; i++){
                var numero = adicionarNumero[i]
                if(numero.innerHTML === '' & votoBranco.innerHTML === '' & votoNulo.innerHTML === ''){
                    adicionarNumero[i].classList.remove('pisca')
                    numero.innerHTML = teclaSelecionado
                    if(i < adicionarNumero.length - 1){
                        adicionarNumero[i+1].classList.add('pisca')                        
                    }
                    break
                }
            }
        })
    }
}

function corrige(){
    votoCorrige.addEventListener('click', (event) => {
        for(var i = 1; i > -1; i--){
            var numero = adicionarNumero[i]
            if(numero.innerHTML !== '' & nome.innerText === '' & votoNulo.innerHTML === ''){
                numero.innerText = ''
                break
            }
        }
    })
}

function votarBranco(){
    branco.addEventListener('click', (event) => {
        if(nome.innerText === '' & votoNulo.innerText === ''){
            pisca.classList.remove('pisca')
            votoBranco.innerHTML = 'VOTO BRANCO'
        }
    })
}