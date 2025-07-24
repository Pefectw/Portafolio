

// Registrando el Plugin
gsap.registerPlugin('SplitText')

gsap.registerPlugin('ScrollTrigger')


// Tween del Titulo Principal
const SloganPerfil = new SplitText ('h1', {
    
    type: "chars"
})

gsap.from (SloganPerfil.chars, {

    autoAlpha: 0,

    stagger: .1,

    duration: .1
})



// Modificación en la barra de navegación
const BarraNavegacion = document.getElementById('header');

window.addEventListener('scroll', () => {

    if (window.scrollY > 90){

        BarraNavegacion.classList.add('Scroll-Bar-Navigation')
    } else {

        BarraNavegacion.classList.remove('Scroll-Bar-Navigation')
    }
})


const BotonControlAnimacion = document.getElementById('Button-Pause')

const ButtonPaused = document.getElementById('Button-Paused')


    // Tween de la sección de Habilidades 
    const Animacion = gsap.to('.Skills-Grid  svg', {

        duration: 3,

        scale: .9,

        opacity: 0,

        stagger:{

            each: 1.5,

            repeat: -1,

            yoyo: true,

            from: 'random'
        }
})

    Animacion.pause()

BotonControlAnimacion.addEventListener('click', () =>{

    if (Animacion.paused()) {
        
        Animacion.resume();

        ButtonPaused.classList.remove('Button-Paused')

    } else {

        Animacion.pause();

        ButtonPaused.classList.add('Button-Paused')

        
    }
   
})






