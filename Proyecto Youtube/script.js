const scrollBox = document.querySelector('.scroll-box');
document.querySelector('.izquierda').onclick = () => scrollBox.scrollBy({ left: -100, behavior: 'smooth' });
document.querySelector('.derecha').onclick = () => scrollBox.scrollBy({ left: 100, behavior: 'smooth' });