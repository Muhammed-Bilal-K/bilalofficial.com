
//////////////////////////
$(document).ready (function(){
    $('#icon').click(function(){
        $('a').toggleClass('nav');
    });
});






//////////////////////////////////
const typed = new Typed ('.multiple-text',{
    strings: ['Web Developer' , 'Frontend Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 100,
    loop:true
});


/////////////////////////////////

ScrollReveal({ 
    distance: '80px',
    duration: 2000,
    delay:200
});

ScrollReveal().reveal('.home-content, .heading', { orgin: 'top' });
ScrollReveal().reveal('.home-img, .services-container , .portfolio-box, .contact form', { orgin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img ', { orgin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content ', { orgin: 'left' });