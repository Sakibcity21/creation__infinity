function locoMotiveScroll(){
    const scroll = new LocomotiveScroll({
        el: document.querySelector('#main'),
        smooth: true
    });
    
}
locoMotiveScroll();

gsap.from("#abouthead h1,h3",{
    y: 100,
    opacity: 0,
    delay: 0.5,
    duration: 0.9,
    stagger: 0.3,
});

gsap.from(".about2",{
    y: 100,
    opacity: 0,
    delay: 0.5,
    duration: 1.1,
    stagger: 0.3,
});
gsap.from(".aboutpara2",{
    y: 100,
    opacity: 0,
    delay: 0.5,
    duration: 1.1,
    stagger: 0.3,
});