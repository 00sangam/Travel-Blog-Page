const cta = document.querySelector('.cta');
const hero = document.querySelector('.hero');

cta.addEventListener('click', () => {
hero.classList.add('fade-out');
});

hero.addEventListener('animationend', () => {
hero.style.display= 'none';
});

const gallery = document.querySelector('.gallery-container');
const overlay = document.querySelector('.overlay');
const overlayImage = overlay.querySelector('img');

function generateHTML([h, v]) {
return `<div class="item h${h} v${v}"> <img src="img/gallery/${randomNumber(12)}.jpg"> <div class="item-overlay"> <button>View &gt;&gt;</button> </div> </div> ;`
}

function randomNumber(limit) {
return Math.floor(Math.random() * limit) + 1;
}

function handleClick(e) {
const src = e.currentTarget.querySelector('img').src;
overlayImage.src = src;
overlay.classList.add('open');
}

function close() {
overlay.classList.remove('open');
}

const digits = Array.from({ length: 50 }, () => [
randomNumber(4),
randomNumber(4),
]);

const html = digits.map(generateHTML).join('');
gallery.innerHTML = html;

const items = document.querySelectorAll('.item');
items.forEach((item) => item.addEventListener('click', handleClick));
overlay.addEventListener('click', close);