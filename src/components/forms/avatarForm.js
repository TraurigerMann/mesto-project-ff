import { 
  avatarFormElement, 
  avatarImage, 
  avatarForm 
} from '../constants.js';

import { patchAvatar } from '../api.js';

import { closePopup } from '../modal.js';

import { handleSubmit } from './forms.js';

// Функция для обработки отправки формы добавления аватара
export function handleAvatarFormSubmit(event) {
  
  function makeRequest() {
    const avatar = avatarFormElement.elements["avatar-link"].value;
    return patchAvatar(avatar)
      .then((res) => {
        avatarImage.setAttribute("style", `background-image: url('${res.avatar}')`);
        closePopup(avatarForm);
      });
  }

  handleSubmit(makeRequest, event);
}