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
        <div className={styles.content_item}>
          <h2 className={styles['content_item-title']}>ФОРМА ОБУЧЕНИЯ</h2>
          <div className={styles['content_sub-text-even']}>
            <h3 className={styles['content_item-subtitle']}>
              смешанная (онлайн/оффлайн)
            </h3>
            <p className={styles['content_item-description']}>
              72 часа (2,5 мес)
            </p>
          </div>
        </div>
      </div>
      <div className={styles.contentProcess}>
        <h2 className={styles.processTitle}>ПРОЦЕСС ОБУЧЕНИЯ</h2>
        <p className={styles.processText}>
          Модули разработаны для проведения занятий в смешанном формате и
          подразумевают комплексное обучение, включающее деловые игры, круглые
          столы, посещение музейных площадок и общение со специалистами.
        </p>
        <p className={styles.processText}>
          Программные часы направлены на интенсивный курс практических и
          академических занятий оффлайн и онлайн с преподавателями, обсуждение
          интересных тематических кейсов, а также подготовку и презентацию
          проекта.
        </p>
      </div>
      <div className={styles.line}></div>
    </div>
  );
};

export default InfoCourse;
