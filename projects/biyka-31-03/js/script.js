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



// sticky header__nav

