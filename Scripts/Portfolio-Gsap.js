
// Registrando el Plugin
gsap.registerPlugin('SplitText')

gsap.registerPlugin('ScrollTrigger')

gsap.registerPlugin('TextPlugin')



// Tween del Titulo Principal
const SloganPerfil = new SplitText ('h1', {
    
    type: "chars"
})

gsap.from (SloganPerfil.chars, {

    autoAlpha: 0,

    stagger: .1,

    duration: .1
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




gsap.utils.toArray('h2').forEach(h2Element => {
   
    const splitH2 = new SplitText(h2Element, {
        type: 'chars'
    });

   
    gsap.from(splitH2.chars, {
        autoAlpha: 0, 
        stagger: .1, 
        duration: 1, 
        ease: "power1.out", 
        scrollTrigger: {
           
            trigger: h2Element,
            start: 'top bottom', 
            once: true,          
        }
    });
}); 





    
gsap.to('.Title-Form', {

    y: -30,

    duration: .8,

    ease: "circ",

    yoyo: true,

    repeat: -1

})

 












