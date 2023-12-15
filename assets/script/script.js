function toggleAnswer(card) {
  const answer = card.querySelector('.answer');
  card.classList.toggle('expanded');
  answer.style.display = answer.style.display === 'block' ? 'none' : 'block';

  // Fecha outras respostas ao abrir uma nova
  const allCards = document.querySelectorAll('.faq-card');
  allCards.forEach((otherCard) => {
    if (otherCard !== card) {
      otherCard.classList.remove('expanded');
      otherCard.querySelector('.answer').style.display = 'none';
    }
  });
}





