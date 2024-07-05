const CONTAINER = document.getElementById('container')
let squares = 16;

//Função de randomizar a cor do quadrado
function randomColor(){
    let randomColor = Math.round(Math.random() * 255)
    return randomColor
}

//Função de criar os quadrados conforme input
function makeGrid(qtdSquares){
    if (CONTAINER.hasChildNodes()){
        
        let childList = Array.from(CONTAINER.childNodes)
        childList.forEach((node)=>{
            CONTAINER.removeChild(node)
        })

    }
    
    for (let count = 1;count<=qtdSquares;count++){

        for (let count2 = 1; count2<=qtdSquares; count2++){
            let div2 = document.createElement('div');
            div2.id = `div${count}`;

            div2.style = `\
            width: ${1500/qtdSquares}px;\
            height: ${1500/qtdSquares}px;\
            border: 0px solid black;\
            display: inline-block;\
            `
            //Passando por cima do quadrado, muda de cor
            div2.onmouseenter = ()=>{
                div2.style.backgroundColor = `rgb(${randomColor()},${randomColor()},${randomColor()})`
            }

            //colocando div dentro do container
            CONTAINER.appendChild(div2)
        }
    }

}

//Chamando função de criação dos quadrados
makeGrid(squares)

//Criando botão de input para quantidade de quadrados
let button = document.querySelector('#set-squares')
button.textContent = 'Mudar quantidade de quadrados'
button.style.padding = '8px'
button.style.margin = '15px 0'
button.style.backgroundColor = 'rgb(245,222,179)'
button.style.borderRadius = '5px'
button.style.border = '1px solid rgb(220,220,220)'

//Adicionando evento de hover(passar por cima) ao botão
button.addEventListener('click',()=>{
    squares = parseInt(prompt('Quantos quadrados você deseja?\nEscolha entre 1-100 '))

    if (squares < 1 || squares > 100){
        alert('Coloque entre 1 a 100 quadrados')
    }
    else if(!Number(squares)){
        alert('Insira um valor válido!')
    }
    else{
        makeGrid(squares)
    }
})
