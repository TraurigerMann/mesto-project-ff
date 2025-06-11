import { initialCards } from './cards.js';

const cardTemplate = document.querySelector('#card-template').content;
const cardsList = document.querySelector('.places__list');


function renderCard(cardInfo, deleteCallback) {
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
  const deleteCardButton = cardElement.querySelector('.card__delete-button');
  
  const cardImage = cardElement.querySelector('.card__image');
  const cardTitle = cardElement.querySelector('.card__title');

  cardImage.src = cardInfo.link;
  cardImage.alt = cardInfo.name;
  cardTitle.textContent = cardInfo.name;

  deleteCardButton.addEventListener('click', () => {
    deleteCallback(cardElement);
  });

  return cardElement;
}

initialCards.forEach((card) => {
  const newCard = renderCard(card, handleDelete);
  cardsList.append(newCard);
});

function handleDelete(cardToDelete) {
  cardToDelete.remove();
}
