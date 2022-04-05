document.querySelectorAll('.parallax').forEach((elem) => {

    const modifier = elem.getAttribute('data-modifier')

    basicScroll.create({
        elem: elem,
        from: 0,
        to: 519,
        direct: true,
        props: {
            '--translateY': {
                from: '0',
                to: `${ 10 * modifier }px`
            }
        }
    }).start()

});



let routesButtons = Array.from(document.getElementsByClassName('routes__button'));

routesButtons[0].innerText = '1 день';
routesButtons[1].innerText = '2 дня';
routesButtons[2].innerText = '3 дня';
routesButtons[3].innerText = '5 дней';
routesButtons[4].innerText = '6 дней';
routesButtons[5].innerText = '7 дней';


let mobileMenuButton = document.getElementById("mobileMenuButton");
let mobileMenuCloseButton = document.getElementById("mobileMenuCloseButton");

let mobileMenu = document.getElementById("mobileMenu");

let mobileMenuLinks = Array.from(document.querySelectorAll("#mobileMenu a"));


console.log(mobileMenuLinks);


mobileMenuButton.addEventListener('click', function() {
    mobileMenu.classList.add("mobile-menu_active");
});

mobileMenuCloseButton.addEventListener('click', function() {
    mobileMenu.classList.remove("mobile-menu_active");
});

mobileMenuLinks.forEach(function(el) {
    el.addEventListener('click', function() {
        mobileMenu.classList.remove("mobile-menu_active");
    });
});
//
//
// let headerHeading = document.getElementsByClassName("header__heading");
// let headerSubheading = document.getElementsByClassName("header__subheading");
//
// let detect = new MobileDetect(window.navigator.userAgent);
//
// let detectingMobile = function() {
//     if(detect.mobile()) {
//         headerHeading.classList.remove('parallax');
//         headerSubheading.classList.remove('parallax');
//     }
// };
//
// detectingMobile();

