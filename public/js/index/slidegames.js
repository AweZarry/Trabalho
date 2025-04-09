let prevButton = document.getElementById('prev')
let nextButton = document.getElementById('next')
let containerslide = document.querySelector('.slideContainer')
let itens = containerslide.querySelectorAll('.list .itens')
let indicadores = document.querySelector('.indicadores')
let dots = indicadores.querySelectorAll('ul li')

let active = 0
let firstPosition = 0
let lastPosition = itens.length - 1



nextButton.onclick = () => {

    let itensOld = containerslide.querySelector('.list .itens.active')
    itensOld.classList.remove('active')


    active = active + 1 > lastPosition ? 0 : active + 1
    itens[active].classList.add('active')

    let dotsOlds = indicadores.querySelector('ul li.ativo')
    dotsOlds.classList.remove('ativo')
    dots[active].classList.add('ativo')

    document.querySelector('.numeros').textContent = '0' + (active + 1);

}

prevButton.onclick = () => {

    let itensOld = containerslide.querySelector('.list .itens.active')
    itensOld.classList.remove('active')

    active = active  -1 < firstPosition ? lastPosition : active -1
    itens[active].classList.add('active')

    let dotsOlds = indicadores.querySelector('ul li.ativo')
    dotsOlds.classList.remove('ativo')
    dots[active].classList.add('ativo')

    document.querySelector('.numeros').textContent = '0' + (active + 1);

}