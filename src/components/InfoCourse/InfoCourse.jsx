import styles from './InfoCourse.module.scss';

const InfoCourse = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.content_item}>
          <h2 className={styles['content_item-title']}>СТАРТ КУРСА</h2>
          <div className={styles['content_sub-text']}>
            <h3 className={styles['content_item-subtitle']}>Весна</h3>
            <p className={styles['content_item-description']}>2025 года</p>
          </div>
        </div>
        <div className={styles.content_line}></div>
        <div className={styles.content_item}>
          <h2 className={styles['content_item-title']}>ФОРМА ОБУЧЕНИЯ</h2>
          <div className={styles['content_sub-text']}>
            <h3 className={styles['content_item-subtitle']}>очно-заочная</h3>
            <p className={styles['content_item-description']}>
              12 недель 72 часа
            </p>
          </div>
        </div>
      </div>
      <button className={styles.content_btn}>Подать заявку</button>
    </div>
  );
};

export default InfoCourse;
