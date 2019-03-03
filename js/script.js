/* constantes */

const btnMenu = document.getElementById('iconos');
const menuCat = document.querySelector('nav.categorias');
const menuSoc = document.querySelector('nav.redes-sociales');

/* eventListeners */

eventListeners();


function eventListeners() {

    btnMenu.addEventListener('click', menuResponsivo)


}

let contador = 0;

function menuResponsivo() {
    contador++;
    if (contador == 1) {
        btnMenu.className = "fas fa-times"
        btnMenu.classList.remove('fas.fa-bars')
        menuCat.style.opacity = .9;
        menuCat.style.marginTop = '21rem';
        menuSoc.style.opacity = .9;

        // btnMenu.style.color = "white"

    } else {
        btnMenu.className = "fas fa-bars"
        btnMenu.classList.remove('fas.fa-times')
        menuCat.style.opacity = 0;
        menuCat.style.marginTop = '-50rem';
        menuSoc.style.opacity = 0;
        contador = 0
    }

}