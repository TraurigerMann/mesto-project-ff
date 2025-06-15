// Формы
export const editFormElement = document.forms["edit-profile"];
export const newPlaceFormElement = document.forms["new-place"];
export const avatarFormElement = document.forms["edit-avatar"];
export const deleteCardForm = document.forms["delete-card"];

// Кнопки
export const buttonTypeCard = document.querySelector('.popup_type_image');
export const profileEditButton = document.querySelector(".profile__edit-button");
export const profileAddButton = document.querySelector(".profile__add-button");

// Попапы
export const popupsArray = Array.from(document.querySelectorAll('.popup'));
export const editForm = document.querySelector('.popup_type_edit');
export const newCardForm = document.querySelector('.popup_type_new-card');
export const popupImageCaption = document.querySelector(".popup__caption");
export const popupImage = document.querySelector(".popup__image");
export const avatarForm = document.querySelector(".popup_type_avatar");
export const deletePopup = document.querySelector(".popup_type_delete-card");

// Поля формы
export const titleInput = document.querySelector('.popup__input_type_name');
export const descriptionInput = document.querySelector('.popup__input_type_description');
export const avatarImage = document.querySelector(".profile__image");

// Элементы полей профиля
export const titleElement = document.querySelector('.profile__title');
export const descriptionElement = document.querySelector('.profile__description');

// Элементы полей карточки
export const newPlaceNameInput = newPlaceFormElement.elements["place-name"];
export const newLinkInput = newPlaceFormElement.elements.link;
