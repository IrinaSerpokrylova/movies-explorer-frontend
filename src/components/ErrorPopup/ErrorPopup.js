function ErrorPopup({ statusCode, onClose, opened, statusInfo }) {
  const errores = {
    200: `Данные успешно отправлены`,
    409: `Пользователь с таким email уже существует`,
    404: `Фильм с указанным _id не найден`,
    500: `На сервере произошла ошибка`,
    403: `Недостаточно прав для удаления фильма`,
    401: `Вы ввели неправильный логин или пароль`,
    400: `Переданы некорректные данные`,
    429: `Слишком много запросов`,
  };

  const successStatuses = {
    updateProfile: `Профиль успешно обновлен`,
    saveMovie: `Фильм успешно сохранен`,
  };

  const invalidStatuses = {
    updateProfile: `При обновлении профиля произошла ошибка`,
    saveMovie: `Переданы некорректные данные при создании фильма`,
    createUser: `Переданы некорректные данные при создании пользователя`,
    deleteMovie: `Передан невалидный id`,
  };

  const handleMesage = () => {
    if (statusCode === 400) {
      return invalidStatuses[statusInfo];
    } else if (statusCode === 200) {
      return successStatuses[statusInfo];
    } else {
      return errores[statusCode];
    }
  };

  return (
    <div className={`error-popup ${opened ? 'error-popup_opened' : ''}`}>
      <div className='error-popup__container'>
        <h2 className='error-popup__message'>{handleMesage()}</h2>
        <div className='error-popup__tools'>
          <button
            type='button'
            className='error-popup__close-button'
            onClick={onClose}
          ></button>
          <div
            className={`error-popup__sign ${
              statusCode === 200 ? 'error-popup__sign_type_success' : ''
            }`}
          >
            {statusCode === 200 ? '' : '!'}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ErrorPopup;
