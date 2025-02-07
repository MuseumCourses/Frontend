import { useState } from 'react';
import ReactDOM from 'react-dom';
import styles from './UnderConstruction.module.scss';

// Портал для отображения плашки
const portalRoot =
  document.getElementById('portal-root') || document.createElement('div');

const UnderConstruction = () => {
  const [isVisible, setIsVisible] = useState(true);

  // Функция для закрытия плашки
  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return ReactDOM.createPortal(
    <div className={styles.container}>
      <div className={styles.box}>
        <p className={styles.text}>
          Примечание: На данный момент сайт находится в разработке, поэтому
          некоторые данные могут отсутствовать. Актуальная информация будет
          пополняться со временем. Просим прощения за неудобства!
        </p>
        <p className={styles.message}>
          Мы открыты для общения, обмена опытом и совместной работы! Приглашаем
          вас присоединиться к нашему курсу.
        </p>
        <button className={styles.closeButton} onClick={handleClose}>
          &#10006; {/* Крестик */}
        </button>
      </div>
    </div>,
    portalRoot
  );
};

export default UnderConstruction;
