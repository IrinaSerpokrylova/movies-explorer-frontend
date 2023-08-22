import { ERRORS, INVALID_STATUSES, SUCCESS_STATUSES } from '../../utils/const';

function ErrorPopup({ statusCode, onClose, opened, statusInfo }) {
  const handleMesage = () => {
    if (statusCode === 400) {
      return INVALID_STATUSES[statusInfo];
    } else if (statusCode === 200) {
      return SUCCESS_STATUSES[statusInfo];
    } else {
      return ERRORS[statusCode];
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
