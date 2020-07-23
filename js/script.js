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