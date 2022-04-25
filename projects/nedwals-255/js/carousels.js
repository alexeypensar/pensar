const swiperMain = new Swiper('.main-carousel', {
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    spaceBetween: 30

});

const swiperProjects = new Swiper('.projects__carousel', {
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    spaceBetween: 54,
    width: 986,
    slideActiveClass: 'projects__item_active'

});

const swiperEquipment = new Swiper('.equipment__carousel', {
    loop: true,
    slidesPerView: 1,
    slideActiveClass: 'equipment__item_active',

    breakpoints: {
        768: {
            slidesPerView: 7,
            spaceBetween: 20
        }

    }

});

const swiperReviews = new Swiper('.reviews__carousel', {
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    slidesPerView: 1,
    breakpoints: {
        768: {
            slidesPerView: 3,
            spaceBetween: 30
        }
    }


});