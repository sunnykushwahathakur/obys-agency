document.querySelector("h1")
gsap.from("h1",{
    opacity:0,
    y:50,
    delay: 0.5,
    duration: 1,
    onStart: function(){
        $('h1').textillate({ in: { effect: 'fadeIn' } });
    }
})