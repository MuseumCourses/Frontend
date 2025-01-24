import RelevanceBg from './../../assets/images/relevance-bg.png';
import styles from './Relevance.module.scss';

const Relevance = () => {
  return (
    <div className={styles.container}>
      <img
        src={RelevanceBg}
        alt={RelevanceBg}
        className={styles.relevance_img}
      />
      <div className={styles.relevance_item}>
        <h2 className={styles.relevance_title}>АКТУАЛЬНОСТЬ ПРОГРАММЫ</h2>
        <p className={styles.relevance_text}>
          В современном мире перед специалистами культурной сферы появляются
          новые вызовы не только теоретического, но и практического характера.
        </p>
        <p className={styles.relevance_text}>
          Границы и различия между профессиями размываются, что увеличивает
          потребность в междисциплинарных методах работы.
        </p>
        <p className={styles.relevance_text}>
          Так, работники в музейной и экскурсионной деятельности становятся
          многоплановыми специалистами, у которых коммуникация занимает важное
          место в привлечении и удержании внимания аудитории. Это специалисты,
          владеющие навыками работы с источниками и их трансляции, создания
          своего актуального интеллектуального продукта для широких масс.
        </p>
      </div>
    </div>
  );
};

export default Relevance;
