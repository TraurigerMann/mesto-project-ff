import './pages/index.css';

import {
  getCards,
  getUser,
} from './components/api.js';

import { 
  enableValidation, 
  clearValidation, 
  validationConfig
} from './components/validation.js';

import {
  cardsList,
  renderCard,
  handleCardLike
} from './components/card.js';

import {
  popupsArray,
  editForm,
  newCardForm,
  avatarForm,
  deleteCardForm,
  profileEditButton,
  profileAddButton,
  popupImage,
  popupImageCaption,
  buttonTypeCard,
  titleInput,
  descriptionInput,
  titleElement,
  descriptionElement,
  avatarImage 
} from './components/constants.js';

import {
  handleOverlayClick,
  openPopup,
  handleCloseButtonClick
} from './components/modal.js';

import { 
  setInitialEditProfileFormValues,
  handleEditProfileFormSubmit
} from './components/forms/profileEditForm.js'

import { handleNewCardFormSubmit } from './components/forms/newCardForm.js'

import { 
  openPopupDelete,
  handleCardDelete
} from './components/forms/deleteForm.js';

import { handleAvatarFormSubmit } from './components/forms/avatarForm.js';

// Конец импортов


let userId = '';


enableValidation(validationConfig);

function openImagePopup(
  cardImg,
  popupImage,
  popupImageCaption,
  buttonTypeCard
) {
  popupImage.src = cardImg.src;
  popupImage.alt = cardImg.alt;
  popupImageCaption.textContent = cardImg.alt;
  openPopup(buttonTypeCard);
}

// Коллбэки ждя обработки событий карточек
const callbacksObject = {
  openImageCallback: openImagePopup,
  deleteCardCallback: openPopupDelete,
  handleLikesCallback: handleCardLike
};

// Слушатель для редактирования аватара
avatarImage.addEventListener('click', () => {
  clearValidation(avatarForm, validationConfig);
  openPopup(avatarForm);
});

// Слушатель для редактрирования профиля
profileEditButton.addEventListener('click', () => {
  clearValidation(editForm, validationConfig);
  setInitialEditProfileFormValues();
  openPopup(editForm);
});

// Слушатель для добавления карточки
profileAddButton.addEventListener('click', () => {
  clearValidation(newCardForm, validationConfig);
  openPopup(newCardForm);
});


// Слушатель для поп-апа карточки
// cardsArray.forEach((card) => {
//   const cardImage = card.querySelector('.card__image');
//   cardImage.addEventListener('click', () => {
//     openImagePopup(cardImage, popupImage, popupImageCaption, buttonTypeCard);
//   });
// });

// Слушатель для закрытия поп-апа
popupsArray.forEach((popup) => { 
  const closeButton = popup.querySelector('.popup__close');
  popup.addEventListener('click', handleOverlayClick);
  closeButton.addEventListener('click', handleCloseButtonClick);
});

// Слушатель для подтверждения изменений в профиле
editForm.addEventListener('submit', handleEditProfileFormSubmit);

// Слушатель для подтверждения создания карточки
newCardForm.addEventListener('submit', (event) => {
  handleNewCardFormSubmit(event, callbacksObject, userId);
});

// Слушатель для подтверждения изменений аватара
avatarForm.addEventListener('submit', handleAvatarFormSubmit);

// Слушатель для подтверждения удаления карточки
deleteCardForm.addEventListener('submit', handleCardDelete);


function setUserInfo(user) {
  titleElement.textContent = user.name;
  descriptionElement.textContent = user.about;
  console.log(user.name, titleInput.textContent);
  avatarImage.setAttribute('style', `background-image: url('${user.avatar}')`);
  userId = user._id;
}

// Создание карточек новых карточек
function createCard(cards, callbacksObject, userId) {
  cards.forEach(card => {
    const newCard = renderCard(card, callbacksObject, userId);
    cardsList.appendChild(newCard); 
  })
}

// Асинхронные запросов на сервер для получения информации о пользователе и карточках
Promise.all([getUser(), getCards()])
.then(([user, cards]) => {
  setUserInfo(user);
  createCard(cards, callbacksObject, userId);
})
.catch((err) => {
  console.error('Произошла ошибка при получении данных:', err);
});
