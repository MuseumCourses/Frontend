import styles from './Cost.module.scss';

const Cost = () => {
  return (
    <section className={styles.cost_section}>
      <h2 className={styles.cost_title}>
        СТОИМОСТЬ КУРСА <span>(за оба модуля)</span>
      </h2>
      <div className={styles.cost_section_price}>
        <p className={styles.cost_price_text}>
          <span>7 440 руб. -</span> для обучающихся, которые в настоящее время
          <span className={styles.spec_span}> являются</span> студентами ЮФУ
        </p>
        <p className={styles.cost_price_text}>
          <span>12 400 руб. -</span> для обучающихся, которые в настоящее время
          <span className={styles.spec_span}> не являются</span> студентами ЮФУ
        </p>
      </div>
      <ul className={styles.costBlock}>
        <li className={styles.costListItem}>
          &nbsp;&nbsp;Программа состоит из двух модулей, которые по отдельности
          пройти нельзя. Приведённая стоимость курса является общей для обоих
          модулей.
        </li>
        <li className={styles.costListItem}>
          &nbsp;&nbsp;Оплата обучения происходит после подачи заявки и
          подписания заявления об участии.
        </li>
        <li className={styles.costListItem}>
          &nbsp;&nbsp;Для слушателей, которые в настоящее время являются
          студентами Южного Федерального Университета, - скидка 40% (актуальная
          сумма приведена выше).
        </li>
        <li className={styles.costListItem}>
          &nbsp;&nbsp;Возможна оплата частями.
        </li>
      </ul>
    </section>
  );
};

export default Cost;
