new TypeIt("#zyssyr", {
        loop: true,
        cursorSpeed: 1000,
        speed: 100
    })
    .type("ZYS && SYR")
    .pause(2000)
    .delete(null, {
        delay: 500
    })
    .type("一起走过的第一个520...")
    .pause(3000)
    .go();

new TypeIt('#talkTosyr', {
    lifeLike: true,
    cursorSpeed: 1000,
    waitUntilVisible: true,
    speed: 100
}).go();