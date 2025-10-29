// Animasi muncul saat di-scroll
const layananCards = document.querySelectorAll('.layanan-card');

window.addEventListener('scroll', checkCards);

function checkCards() {
  const triggerBottom = window.innerHeight * 0.8;

  layananCards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;

    if (cardTop < triggerBottom) {
      card.classList.add('show');
    } else {
      card.classList.remove('show');
    }
  });
}
