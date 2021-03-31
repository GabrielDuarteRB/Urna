const botaoConfirmar = document.querySelector('.verde')
const numeroVotado = document.querySelectorAll('.numero')
const nome = document.querySelector('.descricao--nome')
const origem = document.querySelector('.descricao--origem')
const imagem = document.querySelector('.imagem')
const imagemNone = document.querySelector('.imagem--none')
const votoNulo = document.querySelector('.voto--nulo')

function confirmar(){
    if(numeroVotado[0].innerText !== '' & numeroVotado[1].innerText !== ''){
        var numero = numeroVotado[0].innerText + numeroVotado[1].innerHTML
        fetch('./comidas.json')
        .then(response => response.json())
        .then((sobremesa) => {
            if(sobremesa.sobremesas[numero] === undefined){
                votoNulo.innerText = 'VOTO NULO'
            }else{
                nome.innerText = 'Nome: ' + sobremesa.sobremesas[numero].nome
                origem.innerText = 'Origem: ' + sobremesa.sobremesas[numero].origem
                imagemNone.classList.remove('imagem--none')
                imagem.src = sobremesa.sobremesas[numero].foto
            }
        })
    }
    
}

botaoConfirmar.addEventListener('click', () => confirmar())
