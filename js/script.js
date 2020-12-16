// let submenu = document.getElementById('submenu');
// let submenuButton = document.getElementById('submenuButton');
// let submenuArrow = document.getElementById('submenuArrow');
//
//
// submenuButton.addEventListener('click', function(el) {
//     el.preventDefault();
//     submenu.classList.toggle('header__submenu_opened');
//     submenuArrow.classList.toggle('submenu__arrow_active');
// });



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




// функция для блоков "портфолио" и "схема работы"

let switcher = function(prevButton, nextButton, elementsArray, heading, text, imageSrc) {
    let counter = 0;

    nextButton.addEventListener('click', function() {
        nextButton.firstElementChild.style.transform = 'scale(1)';
        counter++;
        prevButton.removeAttribute('disabled');
        if (counter === elementsArray.length - 1) {
            nextButton.setAttribute('disabled', 'disabled');
        }
        heading.innerHTML = elementsArray[counter].heading;
        text.innerHTML = elementsArray[counter].text;

        if(imageSrc === null) {
            return null;
        }
        else {
            imageSrc.setAttribute('src', elementsArray[counter].imageSrc);
        }

        
    });

    prevButton.addEventListener('click', function() {
        prevButton.firstElementChild.style.transform = 'scale(1)';
        counter--;
        nextButton.removeAttribute('disabled');
        if (counter === 0) {
            prevButton.setAttribute('disabled', 'disabled');
        }
        
        heading.innerHTML = elementsArray[counter].heading;
        text.innerHTML = elementsArray[counter].text;
        if(imageSrc === null) {
            return null;
        }
        else {
            imageSrc.setAttribute('src', elementsArray[counter].imageSrc);
        }
    });


    prevButton.addEventListener('mouseover', function() {
        prevButton.firstElementChild.style.transform = 'scale(2)';
    });

    prevButton.addEventListener('mouseout', function() {
        prevButton.firstElementChild.style.transform = 'scale(1)';
    })
    nextButton.addEventListener('mouseover', function() {
        nextButton.firstElementChild.style.transform = 'scale(2)';
    });
    nextButton.addEventListener('mouseout', function() {
        nextButton.firstElementChild.style.transform = 'scale(1)';
    })

    

};


// настройки для блока портфолио:

let pHeading = document.getElementById('pHeading');
let pText = document.getElementById('pText');
let pImage = document.getElementById('pImage');
let pButtonPrev = document.getElementById('pButtonPrev');
let pButtonNext = document.getElementById('pButtonNext');


let portfolioElements = [
    {
        heading: 'Многостраничный сайт-каталог по продаже кожаных изделий',
        text: 'Brandys Leather Workshop занимается изготовлением изделий ручной из натуральной кожи. Премиальное качество, долговечность, уникальный стиль. Стоимость разработки такого сайта начинается от 32 000 рублей, срок - от 10 дней. ',
        imageSrc: 'img/portfolio/brandy.jpg'
    },
    {
        heading: 'Одностраничный сайт-каталог климатического оборудования',
        text: 'Climate-help занимаются продажей, ремонтом, установкой и диагностикой климатического, холодильного и отопительного оборудования. Стоимость разработки такого лендинга начинается от 28 000 руб., срок - от 7 дней.',
        imageSrc: 'img/portfolio/climatehelp.jpg'
    },
    {
        heading: 'Корпоративный сайт транспортной компании',
        text: 'ООО "Транс-Сервис" занимаются доставками грузов в Якутию всеми видами транспорта. Сайт предлагает различные варианты доставки груза, а также позволяет просчитать стоимость в специально разработанном калькуляторе. Стоимость разработки такого сайта начинается от 42 000 руб., срок - от 10 дней.',
        imageSrc: 'img/portfolio/transservis.jpg'
    },
    {
        heading: 'Дизайн оптового интернет-магазина детской одежды',
        text: 'Крошкин Клуб - оптовый интернет-магазин, осуществляющий продажу детской и подростковой одежды по оптовым ценам. Стоимость дизайна такого интернет-магазина - от 28 000 руб., разработка "под ключ" - от 60 000 руб. Срок - от 14 дней. ',
        imageSrc: 'img/portfolio/kidsclub.jpg'
    },
    {
        heading: 'Дизайн сайта стоматологической клиники',
        text: 'Сайт стоматологической клиники с информацией о ней, а также возможностью записаться на приём и посмотреть информацию о врачах. Стоимость разработки такого лендинга - от 28 000 руб., срок - от 5 дней.',
        imageSrc: 'img/portfolio/dentist.jpg'
    },
    {
        heading: 'Лендинг для юридической компании',
        text: 'Сайт для компании, проводящей независимые строительно-технические экспертизы с дальнейшим предоставлением независимых экспертных заключений по результатам выполненных подрядчиком работ. Стоимость разработки такого сайта - от 28 000 руб., срок - от 7 дней.',
        imageSrc: 'img/portfolio/lawyer.jpg'
    },
    {
        heading: 'Дизайн сайта спа-салона',
        text: 'Одностраничный сайт спа-салона с информацией об услугах и возможностью записи на приём.',
        imageSrc: 'img/portfolio/spa.jpg'
    }
];

//todo не забыть элементы в портфолио заменить на нормальные.
//todo добавить ещё один атрибут, чтобы у ссылки href менялся.

// Портфолио - значения по умолчанию, чтобы отображался первый блок портфолио:
pHeading.innerHTML = portfolioElements[0].heading;
pText.innerHTML = portfolioElements[0].text;
pImage.setAttribute('src', portfolioElements[0].imageSrc);
pButtonPrev.setAttribute('disabled', 'disabled');




// настройки для блока "схема работы":

let hHeading = document.getElementById('hHeading');
let hText = document.getElementById('hText');
let hImage = null;
let hButtonPrev = document.getElementById('hButtonPrev');
let hButtonNext = document.getElementById('hButtonNext');


let howtoElements = [
    {
        heading: 'ШАГ 1. Начало работы',
        text: 'В самом начале мы с вами подробно обсуждаем задачу, при необходимости заполняем бриф. Составляем ТЗ (техническое задание) и создаем Доску проекта в Trello. Данный сервис позволит вам отслеживать все этапы работы над вашим сайтом в режиме онлайн.'
    },
    {
        heading: 'ШАГ 2. Прототипирование',
        text: 'На данном этапе мы проводим анализ конкурентов и ниши вашего бизнеса для создания  лучшего решения задачи. Копирайтером создаются продающие тексты, готовится прототип. Согласовываем с вами данный этап.'
    },
    {
        heading: 'ШАГ 3. Дизайн',
        text: 'Переходим к созданию дизайна. На основании проведенного анализа и ваших предпочтений отрисовываем сам макет, а также адаптивные версии, всплывающие окна, состояния интерактивных элементов. Оформляем все это в презентацию и снова согласовываем с вами.'
    },
    {
        heading: 'ШАГ 4. Верстка + CMS',
        text: 'Начинается техническая часть разработки сайта. . Верстаем полученный дизайн и устанавливаем CMS - систему для будущего редактирования . Настраиваем отправку форм, анимируем элементы.'
    },
    {
        heading: 'ШАГ 5. Сдача проекта',
        text: 'Публикуем сайт на хостинге, подключаем выбранное доменное имя. Добавляем сайт в поисковые системы. Все готово! Вы полноценный владелец вашего собственного сайта.'
    }
];

//todo не забыть элементы в блоке "схема работы" заменить на нормальные.

// "Схема работы" - значения по умолчанию, чтобы отображался первый блок:
hHeading.innerHTML = howtoElements[0].heading;
hText.innerHTML = howtoElements[0].text;
hButtonPrev.setAttribute('disabled', 'disabled');


// запуск функции для портфолио:
switcher(pButtonPrev, pButtonNext, portfolioElements, pHeading, pText, pImage);


// запуск функции для блока "схема работы":
switcher(hButtonPrev, hButtonNext, howtoElements, hHeading, hText, hImage);


