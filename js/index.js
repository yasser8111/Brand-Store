
function flipCard(cardElement) {
  const cardInner = cardElement.querySelector('.card-inner');
  cardInner.classList.toggle('flipped');
}