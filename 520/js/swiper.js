var swiper = new Swiper('.swiper-container-lovesyr1', {
    pagination: '.swiper-pagination-lovesyr1',
    paginationClickable: true,
    spaceBetween: 30,
});

var swiper = new Swiper('.swiper-container-lovesyr2', {
    pagination: '.swiper-pagination-lovesyr2',
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflow: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true
    }
});

var swiper = new Swiper('.swiper-container-lovesyr3', {
    pagination: '.swiper-pagination-lovesyr3',
    effect: 'flip',
    grabCursor: true,
    nextButton: '.swiper-button-next-lovesyr3',
    prevButton: '.swiper-button-prev-lovesyr3'
});