

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


const BotonControlAnimacion = document.getElementById('Button-Restart')


    const Animacion = gsap.to('.Skills-Grid  svg', {

        duration: 3,

        scale: .9,

        opacity: 0,

        stagger:{

            each: 1.5,

            repeat: -1,

            yoyo: true,

            from: 'end'
        }
})

BotonControlAnimacion.addEventListener('click', () =>{

    Animacion.restart();

})



// 1. Usa gsap.utils.toArray para obtener TODOS los elementos <h2> en tu página
gsap.utils.toArray('h2').forEach(h2Element => {
    // 2. Para CADA h2 encontrado, crea una nueva instancia de SplitText
    const splitH2 = new SplitText(h2Element, {
        type: 'chars' // Divide el h2 actual en caracteres
    });

    // 3. Crea una animación de GSAP para los caracteres de ESE h2
    gsap.from(splitH2.chars, {
        autoAlpha: 0, // Inicia invisible
        stagger: .1, // Stagger (retraso) entre cada carácter
        duration: 1, // Duración total de la animación de los caracteres de ese h2
        ease: "power1.out", // Suavidad de la animación
        scrollTrigger: {
            // ¡CLAVE! El trigger es el h2Element actual en la iteración.
            // Esto significa que CADA H2 tendrá su propio punto de activación.
            trigger: h2Element,
            start: 'top bottom', // La animación empieza cuando la parte superior del h2 entra por la parte inferior de la pantalla
            once: true,          // La animación se ejecuta solo una vez para cada h2
            // markers: true,     // Descomenta para depurar: verás las marcas de ScrollTrigger para CADA h2
            // Si quieres un pequeño retraso ANTES de que empiece a escribir el H2 una vez en pantalla:
            // delay: 0.2 // Esto añadiría un retraso de 0.2s después de que el trigger se activa
        }
    });
});



