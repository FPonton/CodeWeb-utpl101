let currentIndex = 0;

function moveSlide(step) {
    const images = document.querySelectorAll('.carousel-item');
    currentIndex += step;
    if (currentIndex < 0) currentIndex = images.length - 1; // Si es negativo, va al final
    if (currentIndex >= images.length) currentIndex = 0; // Si se pasa, va al principio
    const newTransformValue = -currentIndex * 100; // Desplaza el carrusel
    document.querySelector('.carousel-images').style.transform = `translateX(${newTransformValue}%)`;
}
HTML Completo: