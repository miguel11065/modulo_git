const form = document.getElementById('captcha');

form.addEventListener('submit', function(e){
    e.preventDefault();
})

let numeroA = document.getElementById('campoA')
let numeroB = document.getElementById('campoB')

form.addEventListener('submit', function(e){
    e.preventDefault()
    if (numeroA.value >= numeroB.value) {
        document.querySelector('.error-message').style.display = 'block'
        document.querySelector('.concluido').style.display = 'none'

        numeroA.value = '';
        numeroB.value = '';

    } else {
        document.querySelector('.concluido').style.display = 'block'
        document.querySelector('.error-message').style.display = 'none'

        numeroA.value = '';
        numeroB.value = '';
    }
    })
