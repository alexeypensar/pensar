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

let faqList = document.getElementsByClassName('faq__item');

for(let i = 0; i < faqList.length; i++) {
    let question = faqList[i].firstElementChild;
    let answer = faqList[i].lastElementChild;
    let block = faqList[i];
    question.addEventListener('click', function(el) {
        el.preventDefault();
        block.classList.toggle('faq__item_opened')
        answer.classList.toggle('faq__answer_opened');
    })
}






// faqList.forEach(function(e) {



//     this.question = e.firstElementChild;
//     this.answer = e.lastElementChild;

//     console.log(question);
//     console.log(answer);

//     question.addEventListener('click', function(el) {
//         el.preventDefault();
//         answer.classList.toggle('faq__answer_opened');

//         console.log(answer);
//     })
// });

let portfolio = function() {


    // let portfolioItem = document.getElementById('portfolioItem');

    let pHeading = document.getElementById('pHeading');
    let pText = document.getElementById('pText');
    let pImage = document.getElementById('pImage');

    let pButtonPrev = document.getElementById('pButtonPrev');
    let pButtonNext = document.getElementById('pButtonNext');

    let portfolioElements = [
        {
            portfolioHeading: 'Лендинг',
            portfolioText: 'Одностраничные сайты идеально подойдут для презентации компании, запуска нового продукта или услуги. Стоимость разработки такого сайта начинается от 18 500 рублей, срок от 7 дней.',
            portfolioImageSrc: 'img/portfolio/building.jpg'
        },
        {
            portfolioHeading: 'Лендинг алала',
            portfolioText: 'АЛАЛА Одностраничные сайты идеально подойдут для презентации компании, запуска нового продукта или услуги. Стоимость разработки такого сайта начинается от 18 500 рублей, срок от 7 дней.',
            portfolioImageSrc: 'img/portfolio/spa.jpg'
        },
        {
            portfolioHeading: 'Ещё один сайт, для теста',
            portfolioText: 'ОБА ОБА Одностраничные сайты идеально подойдут для презентации компании, запуска нового продукта или услуги. Стоимость разработки такого сайта начинается от 18 500 рублей, срок от 7 дней.',
            portfolioImageSrc: 'img/portfolio/dentist.jpg'
        }
    ];

    //todo не забыть элементы в портфолио заменить на нормальные.
    //todo добавить ещё один атрибут, чтобы у ссылки href менялся.

    // defaults, first portfolio element:
    pHeading.innerHTML = portfolioElements[0].portfolioHeading;
    pText.innerHTML = portfolioElements[0].portfolioText;
    pImage.setAttribute('src', portfolioElements[0].portfolioImageSrc);
    pButtonPrev.setAttribute('disabled', 'disabled');


    let animatePortfolio = function() {
        pHeading.classList.toggle('portfolio_animated');
        pText.classList.toggle('portfolio_animated');
        pImage.classList.toggle('portfolio_animated');

        // todo анимашку перехода допилить

        // pHeading.classList.remove('portfolio_animated');
        // pText.classList.remove('portfolio_animated');
        // pImage.classList.remove('portfolio_animated');


        // pHeading.removeAttribute('style');
        // pText.removeAttribute('style');
        // pImage.removeAttribute('style');
    };


    let switchPortfolio = function(counter) {
        counter = 0;

        pButtonNext.addEventListener('click', function() {
            animatePortfolio();
            counter++;
            pButtonPrev.removeAttribute('disabled');
            if (counter === portfolioElements.length - 1) {
                pButtonNext.setAttribute('disabled', 'disabled');
            };
            pHeading.innerHTML = portfolioElements[counter].portfolioHeading;
            pText.innerHTML = portfolioElements[counter].portfolioText;
            pImage.setAttribute('src', portfolioElements[counter].portfolioImageSrc);

            
        });

        pButtonPrev.addEventListener('click', function() {
            animatePortfolio();
            counter--;
            if (counter === 0) {
                pButtonPrev.setAttribute('disabled', 'disabled');
                pButtonNext.removeAttribute('disabled');
            };
            pHeading.innerHTML = portfolioElements[counter].portfolioHeading;
            pText.innerHTML = portfolioElements[counter].portfolioText;
            pImage.setAttribute('src', portfolioElements[counter].portfolioImageSrc);
        });

        

    };



    switchPortfolio();
    
    // for (let i = 0; i < portfolioElements.length; i++) {
    //     pHeading.innerHTML = portfolioElements[i].portfolioHeading;
    //     pText.innerHTML = portfolioElements[i].portfolioText;
    //     pImage.setAttribute('src', portfolioElements[i].portfolioImageSrc);

    //     pButtonNext.addEventListener('click', function() {
    //         i++;
    //         console.log('Next!')
    //     });

    //     pButtonPrev.addEventListener('click', function() {
    //         i--;
    //         console.log('Previous!')
    //     });

        
            
    //     if (i === 0) {
    //         pButtonPrev.setAttribute('disabled', 'disabled');
    //     }
    //     else if (i === portfolioElements.length - 1) {
    //         pButtonNext.setAttribute('disabled', 'disabled');
    //     }

    // }
    
};

portfolio();

