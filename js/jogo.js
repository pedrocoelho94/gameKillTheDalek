
let altura = 0
let largura = 0

function ajustaTamanhoPalcoJogo(){
    altura = window.innerHeight
    largura = window.innerWidth
    console.log(largura, altura)
}

ajustaTamanhoPalcoJogo()


let posicaoX = Math.floor(Math.random()* largura) - 130
let posicaoY = Math.floor(Math.random()* altura) - 130

posicaoX = posicaoX < 0 ? 0 : posicaoX
posicaoY = posicaoY < 0 ? 0 : posicaoY

console.log(posicaoX, posicaoY)

 //criar o elemento html
let dalek = document.createElement('img')
//variedade de daleks
let dalekAleatorio = Math.random()
dalek.src = dalekAleatorio < 0.5 ? 'assets/dalek.png' : 'assets/dalek2.png'

dalek.className = tamanhoAleatorio()
dalek.style.left = posicaoX + 'px'
dalek.style.top = posicaoY + 'px'
dalek.style.position = 'absolute'

document.body.appendChild(dalek)

function tamanhoAleatorio(){
    let classe = Math.floor(Math.random() * 3)

    switch(classe){
        case 0:
            return 'dalek1'
        case 1:
            return 'dalek2'
        case 2:
            return 'dalek3'
    }
}

