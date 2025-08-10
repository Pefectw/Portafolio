
// Registros Plugins
gsap.registerPlugin('SplitText')

gsap.registerPlugin('ScrollTrigger')

gsap.registerPlugin('TextPlugin')



// Tween Titulo Principal
const SloganPerfil = new SplitText ('h1', {
    
    type: "chars"
})

gsap.from (SloganPerfil.chars, {

    autoAlpha: 0,

    stagger: .1,

    duration: .1
})


// Tween Subtitulos
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



// Tween Título Formulario 

gsap.to('.Title-Form', {

    y: -30,

    duration: .8,

    ease: "circ",

    yoyo: true,

    repeat: -1

})









