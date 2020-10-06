import React from 'react';
import success from '../images/info-tool-tip-success.svg';
import failure from '../images/info-tool-tip-failure.svg';

function InfoTooltip({
  isOpen, onClose, isOK,
}) {
  return (
    <div className={(isOpen ? 'popup  popup_open' : 'popup ')}>
          <div className="info-tooltip">
          <button
                className="popup__button-close"
                type="button"
                aria-label="закрыть"
                onClick={onClose}
            />
            <img src={isOK ? success : failure}
                 alt={isOK ? 'Успешная регистрация.' : 'Ошибка при регистрации'}
                 className="popup__image_type_infoTooltip"/>
            <h2 className="popup__title_type_infoTooltip">
              {isOK ? 'Вы успешно зарегистрировались!' : 'Что-то пошло не так! Попробуйте ещё раз.'}
            </h2>
          </div>
        </div>
  );
}

export default InfoTooltip;
