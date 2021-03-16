
let altura = 0
let largura = 0


function ajustaTamanhoPalcoJogo(){
    altura = window.innerHeight
    largura = window.innerWidth
    console.log(largura, altura)
}

ajustaTamanhoPalcoJogo()

function posicaoRandomica(){

    //remover o dalek anterior, caso exista
    if(document.getElementById('dalek')){
        document.getElementById('dalek').remove()
    }
    

    let posicaoX = Math.floor(Math.random()* largura) - 130
    let posicaoY = Math.floor(Math.random()* altura) - 130

    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY

    posicaoX = posicaoX > 670 ? 670 : posicaoX
    posicaoY = posicaoY > 410 ? 410 : posicaoY

    console.log(posicaoX, posicaoY)
    //criar o elemento html
    let dalek = document.createElement('img')
    //variedade de daleks
    dalek.src = dalekAleatorio()
    dalek.className = `${tamanhoAleatorio()} ${ladoAleatorio()}`
    dalek.style.left = `${posicaoX}px` 
    dalek.style.top = `${posicaoY}px`
    dalek.style.position = 'absolute'
    dalek.id = 'dalek'
    console.log(dalek.style.left, dalek.style.top)

    document.getElementById('area').appendChild(dalek)
    //document.body.appendChild(dalek)
}

function dalekAleatorio(){
    let dalekRandom = Math.random()
    return dalekRandom < 0.6 ? 'assets/dalek.png' : 'assets/dalek2.png'
}

function tamanhoAleatorio(){
    let classe = Math.floor(Math.random() * 2)

    switch(classe){
        case 0:
            return 'dalek1'
        case 1:
            return 'dalek2'
    }
}

function ladoAleatorio(){
    let lado = Math.floor(Math.random() * 2)

    switch(lado){
        case 0:
            return 'ladoA'
        case 1:
            return 'ladoB'
    }
}

