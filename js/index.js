document.addEventListener('keydown', (event) => {
    let arvore = document.querySelector('.arvore')
    let pokemon = document.getElementById('pokemon')

    switch(event.keyCode) {
        case 65: {
            if (pokemon.style.left == '' || pokemon.style.left == '0px') {
            arvore.style.animation = 'arvores-reverse 6s infinite linear'
            pokemon.style.animation = 'pikachu-mudando 2s linear'
            pokemon.src = '../assets/pikachu-reverse.gif'
            setTimeout(() => {
                pokemon.style.animation = 'none'
                pokemon.style.left = '520px'
            },1900)
        }
            break
        }

        case 32: {
            if (pokemon.style.left == '0px' || pokemon.style.left == '520px') {
                pokemon.style.animation = 'pulo 500ms linear'
                setTimeout(() => {
                    pokemon.style.animation = 'none'
                },500)
            }
            break
        }

        case 68: {
            if (pokemon.style.left == '520px') {
                arvore.style.animation = 'arvores 6s infinite linear'
                pokemon.style.animation = 'pikachu-mudando-reverse 2s linear'
                pokemon.src = '../assets/pikachu.gif'
                setTimeout(() => {
                    pokemon.style.animation = 'none'
                    pokemon.style.left = '0'
                },1900)
            } else{
                arvore.style.animation = 'arvores 6s infinite linear'
                pokemon.src = '../assets/pikachu.gif'
                pokemon.style.animation = 'none'
                pokemon.style.left = '0'
            }
            break
        }
    }
})