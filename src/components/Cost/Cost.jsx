import styles from './Cost.module.scss';

const Cost = () => {
  return (
    <section className={styles.cost_section}>
      <div className={styles.cost_section_circle}>
        <span className={styles.cost_section_text}>СТОИМОСТЬ КУРСА</span>
      </div>
      <div className={styles.costBlock}>
        <p className={styles.text}>
          Примечание: На данный момент сайт находится в разработке, поэтому
          некоторые данные могут отсутствовать. Актуальная информация будет
          пополняться со временем. Просим прощения за неудобства!
        </p>
        <p className={styles.message}>
          Мы открыты для общения, обмена опытом и совместной работы! Приглашаем
          вас присоединиться к нашему курсу.
        </p>
      </div>
    </section>
  );
};

export default Cost;
