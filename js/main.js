// nav
const primaryNav = document.querySelector('.primary');
const mobile = document.querySelector('.mobile');

mobile.addEventListener('click', ()=>{
    const visibility = primaryNav.getAttribute('data-visible')

    if(visibility === "false"){
        primaryNav.setAttribute('data-visible', true);
        mobile.setAttribute('aria-expanded', true);
    }else if(visibility === "true"){
        primaryNav.setAttribute('data-visible', false);
        mobile.setAttribute('aria-expanded', false);
    }
});
// scroll Tesimonial
$('#owl-carousel2').owlCarousel({
    autoPlay:true,
    autoplaySpeed:1000,
    loop:true,
    margin:10,
    nav:true,
    navText:[ `<i class="fa-solid fa-angle-left"></i>` ,
    `<i class="fa-solid fa-chevron-right"></i>`],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
// scroll photo
$('#owl-carousel').owlCarousel({
    autoPlay:true,
    autoplaySpeed:1000,
    loop:true,
    margin:10,
    nav:true,
    navText:[ `<i class="fa-solid fa-angle-left"></i>` ,
    `<i class="fa-solid fa-chevron-right"></i>`],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})
// room
$('#owl-carousel3').owlCarousel({
    autoPlay:true,
    autoplaySpeed:1000,
    loop:true,
    margin:10,
    nav:true,
    navText:[ `<i class="fa-solid fa-angle-left"></i>` ,
    `<i class="fa-solid fa-chevron-right"></i>`],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:2
        }
    }
})
// photo
$('#owl-carousel4').owlCarousel({
    autoPlay:true,
    autoplaySpeed:1000,
    loop:true,
    margin:10,
    nav:true,
    navText:[ `<i class="fa-solid fa-angle-left"></i>` ,
    `<i class="fa-solid fa-chevron-right"></i>`],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:2
        }
    }
})