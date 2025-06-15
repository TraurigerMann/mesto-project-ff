import { popupsArray } from './constants.js';

// Обработчик закрытия поп-апа по нажатию esc
function handleEscClick(evt) {
  if (evt.key === "Escape") {
    const openedPopup = popupsArray.find(popup => popup.classList.contains('popup_is-opened'));
    if (openedPopup) {
      closePopup(openedPopup);
    }
  }
}

// Обработчик закрытия поп-апа по нажатию на оверлей
function handleOverlayClick(evt) { 
  if (evt.target === evt.currentTarget) {
    closePopup(evt.target);
  }
}

// Обработчик закрытия поп-апа
function handleCloseButtonClick(evt) {
  const closeButton = evt.target;
  const popup = closeButton.closest('.popup');
  closePopup(popup);
}

// Функция открытия поп-апа
function openPopup(popup) {
  popup.classList.add('popup_is-animated');
  popup.classList.add('popup_is-opened');
  document.addEventListener("keydown", handleEscClick);
}

// Функция закрытия поп-апа
function closePopup(popup) {
  if (popup) {
    popup.classList.add('popup_is-animated');
    popup.classList.remove("popup_is-opened");
    document.removeEventListener("keydown", handleEscClick);
  }
}


export { 
  handleOverlayClick,
  closePopup, 
  openPopup,
  handleCloseButtonClick
};
