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
    // let pDescription = document.getElementById('pDescription');

    let pButtonPrev = document.getElementById('pButtonPrev');
    let pButtonNext = document.getElementById('pButtonNext');


    let portfolioElements = [
        {
            heading: 'Лендинг',
            text: 'Одностраничные сайты идеально подойдут для презентации компании, запуска нового продукта или услуги. Стоимость разработки такого сайта начинается от 18 500 рублей, срок от 7 дней.',
            imageSrc: 'img/portfolio/building.jpg'
        },
        {
            heading: 'Лендинг алала',
            text: 'АЛАЛА Одностраничные сайты идеально подойдут для презентации компании, запуска нового продукта или услуги. Стоимость разработки такого сайта начинается от 18 500 рублей, срок от 7 дней.',
            imageSrc: 'img/portfolio/spa.jpg'
        },
        {
            heading: 'Ещё один сайт, для теста',
            text: 'ОБА ОБА Одностраничные сайты идеально подойдут для презентации компании, запуска нового продукта или услуги. Стоимость разработки такого сайта начинается от 18 500 рублей, срок от 7 дней.',
            imageSrc: 'img/portfolio/dentist.jpg'
        }
    ];

    //todo не забыть элементы в портфолио заменить на нормальные.
    //todo добавить ещё один атрибут, чтобы у ссылки href менялся.

    // defaults, first portfolio element:
    pHeading.innerHTML = portfolioElements[0].heading;
    pText.innerHTML = portfolioElements[0].text;
    pImage.setAttribute('src', portfolioElements[0].imageSrc);
    pButtonPrev.setAttribute('disabled', 'disabled');



    pButtonPrev.addEventListener('mouseover', function() {
        pButtonPrev.firstElementChild.style.transform = 'scale(2)';
    });

    pButtonPrev.addEventListener('mouseout', function() {
        pButtonPrev.firstElementChild.style.transform = 'scale(1)';
    })
    pButtonNext.addEventListener('mouseover', function() {
        pButtonNext.firstElementChild.style.transform = 'scale(2)';
    });
    pButtonNext.addEventListener('mouseout', function() {
        pButtonNext.firstElementChild.style.transform = 'scale(1)';
    })

    
};


let switcher = function(prevButton, nextButton, elementsArray, heading, text, imageSrc) {
    counter = 0;

    nextButton.addEventListener('click', function() {
        nextButton.firstElementChild.style.transform = 'scale(1)';
        counter++;
        prevButton.removeAttribute('disabled');
        if (counter === elementsArray.length - 1) {
            nextButton.setAttribute('disabled', 'disabled');
        };
        heading.innerHTML = elementsArray[counter].heading;
        text.innerHTML = elementsArray[counter].text;
        imageSrc.setAttribute('src', elementsArray[counter].imageSrc);

        
    });

    prevButton.addEventListener('click', function() {
        prevButton.firstElementChild.style.transform = 'scale(1)';
        counter--;
        nextButton.removeAttribute('disabled');
        if (counter === 0) {
            prevButton.setAttribute('disabled', 'disabled');
        };
        
        heading.innerHTML = elementsArray[counter].heading;
        heading.innerHTML = elementsArray[counter].text;
        heading.setAttribute('src', elementsArray[counter].imageSrc);
    });

    

};


switcher(pButtonPrev, pButtonNext, portfolioElements, pHeading, pText, portfolioImageSrc);






portfolio();

