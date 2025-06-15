const BASE_URL = "https://nomoreparties.co/v1/cohort-mag-4";

// Объект с маршрутами API
const apiRoutes = {
  user: "users/me",
  cards: "cards",
  likes: "likes",
};

// Хедеры
const headers = {
  Authorization: "002f9355-cf09-4e73-b969-d71acfa1d959",
  "Content-Type": "application/json",
};

// Проверка возвращаемых данных
const checkData = (data) => {
  if (data.ok) {
    return data.json();
  } else {
    return Promise.reject(`Error: ${data.status}`);
  }
};

// Отправка запроса
function request(endpoint, options) {
  return fetch(`${BASE_URL}/${endpoint}`, options).then(checkData);
}

// Получение карточек
const getCards = () => {
  return request(apiRoutes.cards, {
    method: "GET",
    headers,
  });
};

// Добавление новой карточки
const postCard = (name, link) => {
  return request(apiRoutes.cards, {
    method: "POST",
    headers,
    body: JSON.stringify({
      name,
      link,
    }),
  });
};

// Удаление карточки по идентификатору
const deleteCardApi = (id) => {
  return request(`${apiRoutes.cards}/${id}`, {
    method: "DELETE",
    headers,
  });
};

// Получение информации о пользователе
const getUser = () => {
  return request(apiRoutes.user, {
    method: "GET",
    headers,
  });
};

// Обновление информации о пользователе
const patchUser = (name, about) => {
  return request(apiRoutes.user, {
    method: "PATCH",
    headers,
    body: JSON.stringify({
      name,
      about,
    }),
  });
};

// Добавление лайка карточке
const addLikeCard = (id)  => {
  return request(`${apiRoutes.cards}/${apiRoutes.likes}/${id}`, {
    method: "PUT",
    headers
  });
};

// Удаление лайка с карточки
const deleteLikeCard = (id) => {
  return request(`${apiRoutes.cards}/${apiRoutes.likes}/${id}`, {
    method: "DELETE",
    headers,
  });
};

// Обновление аватара пользователя
const patchAvatar = (avatar) => {
  return request(`${apiRoutes.user}/avatar`, {
    method: "PATCH",
    headers,
    body: JSON.stringify({ avatar: avatar }),
  });
};

export {
  getCards,
  postCard,
  deleteCardApi,
  getUser,
  patchUser,
  addLikeCard,
  deleteLikeCard,
  patchAvatar
};