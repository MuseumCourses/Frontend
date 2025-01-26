import styles from './Cost.module.scss';

const Cost = () => {
  return (
    <section className={styles.cost_section}>
      <div className={styles.cost_section_circle}>
        <span className={styles.cost_section_text}>СТОИМОСТЬ КУРСА</span>
      </div>
      <div className={styles.costBlock}>
        <span>100 000 руб.</span>
      </div>
    </section>
  );
};

export default Cost;
