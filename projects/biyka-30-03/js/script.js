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



// let routesButtons = Array.from(document.getElementsByClassName('routes__button'));
// let routes = Array.from(document.getElementsByClassName('route'));
//
// console.log(routes);
// console.log(routesButtons);
//
// let activeRouteNumber = '';
//
// let changingActiveButton = function() {
//     routes.forEach(function(el) {
//         if (el.classList.contains('swiper-slide-active')) {
//             // если содержит, то проверяем номер в id
//             // вычисляем id кнопки и назначаем ей класс active
//             // у остальных класс active удаляем
//
//             activeRouteNumber = el.id.toString().slice(-1);
//             console.log('активный слайд: ' + activeRouteNumber);
//
//
//             routesButtons.forEach(function(button) {
//                 button.addEventListener('click', function() {
//                     let activeButtonNumber = this.id.toString().slice(-1);
//                     console.log('активная кнопка: ' + activeButtonNumber);
//
//                     if (activeButtonNumber === activeRouteNumber) {
//                         this.classList.add('routes__button_active');
//                         console.log('класс изменён')
//                     }
//                 })
//
//             });
//
//
//         }
//     });
// };
//
// changingActiveButton();
//
//

//
// let button1 = document.getElementById('routeButton1');
// let button2 = document.getElementById('routeButton2');
// let button3 = document.getElementById('routeButton3');
// let button4 = document.getElementById('routeButton4');
// let button5 = document.getElementById('routeButton5');
// let button6 = document.getElementById('routeButton6');
//
// let route1 = document.getElementById('route1');
// let route2 = document.getElementById('route2');
// let route3 = document.getElementById('route3');
// let route4 = document.getElementById('route4');
// let route5 = document.getElementById('route5');
// let route6 = document.getElementById('route6');
//
//
// button1.addEventListener('click', function() {
//     route1.classList.add('swiper-slide-active');
//     route2.classList.add('swiper-slide-next');
//     route2.classList.remove('swiper-slide-active');
//     route3.classList.remove('swiper-slide-active');
//     route4.classList.remove('swiper-slide-active');
//     route5.classList.remove('swiper-slide-active');
//     route6.classList.remove('swiper-slide-active');
//
//     button1.classList.add('routes__button_active');
//     button2.classList.remove('routes__button_active');
//     button3.classList.remove('routes__button_active');
//     button4.classList.remove('routes__button_active');
//     button5.classList.remove('routes__button_active');
//     button6.classList.remove('routes__button_active');
// });
//
// button2.addEventListener('click', function() {
//     route2.classList.add('swiper-slide-active');
//     route3.classList.add('swiper-slide-next');
//     route1.classList.remove('swiper-slide-active');
//     route3.classList.remove('swiper-slide-active');
//     route4.classList.remove('swiper-slide-active');
//     route5.classList.remove('swiper-slide-active');
//     route6.classList.remove('swiper-slide-active');
//
//     button2.classList.add('routes__button_active');
//     button1.classList.remove('routes__button_active');
//     button3.classList.remove('routes__button_active');
//     button4.classList.remove('routes__button_active');
//     button5.classList.remove('routes__button_active');
//     button6.classList.remove('routes__button_active');
// });
//


