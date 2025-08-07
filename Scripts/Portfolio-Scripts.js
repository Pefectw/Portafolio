
// Modificación en la barra de navegación
const BarraNavegacion = document.getElementById('header');

window.addEventListener('scroll', () => {

    if (window.scrollY > 90){

        BarraNavegacion.classList.add('Scroll-Bar-Navigation')
    } else {

        BarraNavegacion.classList.remove('Scroll-Bar-Navigation')
    }
})

