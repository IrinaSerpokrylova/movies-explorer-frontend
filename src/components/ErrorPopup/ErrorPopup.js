import React from 'react';

// попап для отображения ошибок, с кнопкой закрытия + 
// реализовать автоскрытие после n секунд отображения
// на этапе "оживления" проекта

function ErrorPopup({ errorMessage }) {
  return (
    <div className="error-popup">
      <div className="error-popup__container">
        <h2 className="error-popup__message">{errorMessage}</h2>
        <div className="error-popup__tools">
          <button type="button" className="error-popup__close-button"></button>
          <div className="error-popup__sign">!</div>
        </div>
      </div>
    </div>
  );
}

export default ErrorPopup;
