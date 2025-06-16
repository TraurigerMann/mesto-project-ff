import { postCard } from '../api.js';

import { 
  renderCard 
} from '../card.js';

import { closePopup } from '../modal.js';

import {
  newCardForm,
  newPlaceNameInput,
  newLinkInput,
  cardsList
} from '../constants.js';

import { handleSubmit } from './forms.js';

// Обработчик события отправки формы добавления карточки
export function handleNewCardFormSubmit(event, callbacksObject, userId) {
  function makeRequest() {
    return postCard(newPlaceNameInput.value, newLinkInput.value)
      .then((card) => {
        const newCardElement = renderCard(card, callbacksObject, userId);
        cardsList.prepend(newCardElement);
        closePopup(newCardForm);
      });
  }

  handleSubmit(makeRequest, event);
}