let nav = document.getElementById('headerNav');

let fixingNav = function() {

    if (document.documentElement.clientWidth >= 991.98) {
        window.addEventListener('scroll', function() {
            if (window.scrollY >= 700) {
                nav.classList.add('fixed-header');
            }
            else {
                nav.classList.remove('fixed-header');
            }
        });
    }

};

fixingNav();


let mobileMenuButton = document.getElementById('mobileMenuButton');
let mobileMenu = document.getElementById('headerNav');
let mobileMenuCloseButton = document.getElementById('mobileMenuCloseButton');

let headerLinksArrow = Array.from(document.getElementsByClassName('mobile__link_arrow'))

let mobileMenuLinks = Array.from(document.getElementsByClassName('header__nav a'));
mobileMenuLinks.push(document.getElementById('headerOrderButton'));


let sublist = Array.from(document.getElementsByClassName('header__sublist'));

mobileMenuButton.addEventListener('click', function() {
    mobileMenu.classList.add('header__nav_active');
});

mobileMenuCloseButton.addEventListener('click', function() {
    mobileMenu.classList.remove('header__nav_active');
});

headerLinksArrow.forEach(function(el) {
   el.addEventListener('click', function() {

       let index = headerLinksArrow.indexOf(el);

       el.classList.toggle('header__link_arrow_active');

       sublist[index].classList.toggle('header__sublist_active');
   });
});


mobileMenuLinks.forEach(function(el) {
    el.addEventListener('click', function() {
        mobileMenu.classList.remove('header__nav_active');
    });
});
