let altura = 0
let largura = 0
let vidas = 1
let tempo = 30

let criaDalekTempo = 1500

let nivel = window.location.search //retorna ?dificil
nivel = nivel.replace('?', '')

if(nivel ==='normal'){
    //1500
    criaDalekTempo = 1250
}else if(nivel === 'dificil'){
    //1000
    criaDalekTempo = 1000
}else if(nivel ==='davros'){
    // 500
    criaDalekTempo = 750
}

//define o range de onde o elemento pode aparecer
let x = document.getElementById('area').offsetWidth
let y = document.getElementById('area').offsetHeight

//let contDaleks = 0
 
/*function ajustaTamanhoPalcoJogo(){
    altura = window.innerHeight
    largura = window.innerWidth
    console.log(largura, altura)
}

ajustaTamanhoPalcoJogo()*/

let cronometro = setInterval(() => {
    tempo -= 1
    if (tempo < 0 ){
        clearInterval(cronometro)
        clearInterval(criaDalek)
        window.location.href = 'vitoria.html'
    }else{
    document.getElementById('cronometro').innerHTML = tempo 
    }
}, 1000);

function posicaoRandomica(){

    //remover o dalek anterior, caso exista
    if(document.getElementById('dalek')){
        document.getElementById('dalek').remove()

        
        if(vidas > 3){
            window.location.href = 'fim_de_jogo.html'
        } else{document.getElementById('v' + vidas).src = "assets/coracao_vazio.png"
        vidas++
        }
    }
    

    let posicaoX = Math.floor(Math.random()* x) - 130
    let posicaoY = Math.floor(Math.random()* y) - 182

    console.log(`antes da correção ${posicaoX} ${posicaoY}`)

    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY

   // posicaoX = posicaoX > 670 ? 670 : posicaoX
    //posicaoY = posicaoY > 410 ? 410 : posicaoY

    console.log(`depois da correçao ${posicaoX} ${posicaoY}`)
    //criar o elemento html
    let dalek = document.createElement('img')
    //variedade de daleks
    dalek.src = dalekAleatorio()
    dalek.className = `${tamanhoAleatorio()} ${ladoAleatorio()}`
    dalek.style.left = `${posicaoX}px` 
    dalek.style.top = `${posicaoY}px`
    dalek.style.position = 'absolute'
    dalek.id = 'dalek'
 
    dalek.onclick = function(){
        this.remove()
        //contDaleks += 1   
        //console.log(cont)
    }
    
    //console.log(dalek.style.left, dalek.style.top)
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

