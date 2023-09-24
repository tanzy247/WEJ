const carouselElements = document.querySelectorAll('[data-bs-ride="false"]');
carouselElements.forEach((element) => {
  const carousel = bootstrap.Carousel.getOrCreateInstance(element);
  carousel.pause();
});