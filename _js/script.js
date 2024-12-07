
// Menu hamburguer
const menuMobile = document.getElementById('menu-mobile') 
const btnMenu = document.getElementById('btn-menu')

menuMobile.addEventListener('click', clicar)

function clicar() {
    menuMobile.classList.toggle('abrir')
    btnMenu.classList.toggle('ativo')
}

// Menu fixo
window.addEventListener("scroll", function(){
    let header = document.querySelector('#header')
    header.classList.toggle('rolagem', window.scrollY > 5)
}) 
