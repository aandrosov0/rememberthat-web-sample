const mobileBtn = document.getElementById('mobile-cta');
const mobileBtnExit = document.getElementById('mobile-exit');
const nav = document.querySelector('nav');

mobileBtn.addEventListener('click', () => {
    nav.classList.add('menu-btn');
});

mobileBtnExit.addEventListener('click', () => {
    nav.classList.remove('menu-btn');
});