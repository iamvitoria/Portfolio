const carouselContents = document.querySelectorAll('.carousel-content');
const btnRight = document.querySelector('.carousel-button.right');
const btnLeft = document.querySelector('.carousel-button.left');
let currentIndex = 0;

function showContent(index) {
    carouselContents.forEach(content => content.classList.remove('active'));
    carouselContents[index].classList.add('active');
}

// Botão para direita
btnRight.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % carouselContents.length;
    showContent(currentIndex);
});

// Botão para esquerda
btnLeft.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + carouselContents.length) % carouselContents.length;
    showContent(currentIndex);
});
