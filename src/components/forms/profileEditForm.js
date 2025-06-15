import { patchUser } from '../../components/api.js';

import { closePopup } from '../../components/modal.js';

import {
  titleInput,
  descriptionInput,
  titleElement,
  descriptionElement,
} from '../constants.js';

import { handleSubmit } from './forms.js';


// Заполнение полей в поп-апе редактирования профиля
function setInitialEditProfileFormValues() {
  titleInput.value = titleElement.textContent;
  descriptionInput.value = descriptionElement.textContent;
}

// Обработчик изменений в профиле
function handleEditProfileFormSubmit(evt) {

  function makeRequest() {
    const name = titleInput.value;
    const about = descriptionInput.value;

    return patchUser(name, about)
      .then((dataUser) => {
        titleElement.textContent = dataUser.name;
        descriptionElement.textContent = dataUser.about;
        console.log(name, about);
        setInitialEditProfileFormValues();
        closePopup(evt.target.closest(".popup_is-opened"));
      });
  }

  handleSubmit(makeRequest, evt);
}

export { setInitialEditProfileFormValues, handleEditProfileFormSubmit }