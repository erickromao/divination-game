const botaoTentar = document.querySelector('#botao-tentar')
const botaoVoltar = document.querySelector('#botao-novamente')
const valorInput = document.querySelector('#input-numero')
const qtdVezes = document.querySelector('#valor-vezes')
const item1 = document.querySelector('#item1')
const item2 = document.querySelector('#item2')
const errou = document.querySelector('#errou')


let geraValorRandom = () =>Math.round(Math.random() * qtdVezes.value)
let valorRandom = funcaoValorRandom()
let contadorErro = 0

qtdVezes.addEventListener('input',()=>{
    valorRandom = funcaoValorRandom()
})

const conferirValor = (event) => {
    event.preventDefault()
    if (valorInput.value == valorRandom) {
        item1.classList.add('hide')
        item2.classList.remove('hide')

        document.querySelector('h2').innerHTML = `Acertou na tentativa (${contadorErro + 1}) !`
        contadorErro = 0;
    }
    contadorErro++
    errou.style.color = 'rgb(178, 53, 53)'
    errou.innerHTML = `Errou! Tente novamente (${contadorErro})`

    valorInput.value = ''

}

const voltarInicio = (event) => {
    event.preventDefault()

    item1.classList.remove('hide')
    item2.classList.add('hide')
    errou.innerHTML = ''
    errou.style.color = 'rgb(106, 106, 106)'
    contadorErro = 0
    qtdVezes.value = 10
    valorRandom = funcaoValorRandom()
}


botaoTentar.addEventListener('click', conferirValor)
botaoVoltar.addEventListener('click', voltarInicio)
