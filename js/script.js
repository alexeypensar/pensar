let submenu = document.getElementById('submenu');
let submenuButton = document.getElementById('submenuButton');
let submenuArrow = document.getElementById('submenuArrow');


submenuButton.addEventListener('click', function(el) {
    el.preventDefault();
    submenu.classList.toggle('header__submenu_opened');
    submenuArrow.classList.toggle('submenu__arrow_active');
});

//todo убирать субменю по клику вне блока, либо по клику на ссылку


// document.addEventListener('mouseup', function(e) {
//     // var container = $("YOUR CONTAINER SELECTOR");
//     if (submenu.has(e.target).length === 0){
//         submenu.classList.remove('submenu__arrow_active');
//     }
// });

