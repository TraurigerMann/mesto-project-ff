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

// Обработчик закрытия поп-апа по нажатию esc
function handleOverlayClick(evt) { 
  if (evt.target === evt.currentTarget) {
    closePopup(evt.target);
  }
}

// Обработчик закрытия поп-апа
function handleCloseButtonClick(evt) {
  const button = evt.target;
  const popup = button.closest('.popup');
  closePopup(popup);
}

// Обработчик открытия поп-апа
function openPopup(popup) {
  popup.classList.add('popup_is-animated');
  popup.classList.add('popup_is-opened');
  document.addEventListener("keydown", handleEscClick);
}

function closePopup(popup) {
  if (popup) {
    popup.classList.add('popup_is-animated');
    popup.classList.remove("popup_is-opened");
    document.removeEventListener("keydown", handleEscClick);
  }
}

// Обработчик открытия поп-апа-картинки
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


export { 
  handleOverlayClick,
  closePopup, 
  openPopup,
  openImagePopup,
    handleCloseButtonClick
};
