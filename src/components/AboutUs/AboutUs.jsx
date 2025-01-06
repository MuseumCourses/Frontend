import AboutUs1 from './../../assets/images/about-us-1.png';
import AboutUs2 from './../../assets/images/about-us-2.png';
import styles from './AboutUs.module.scss';

const AboutUs = () => {
  return (
    <section className={styles.container}>
      <div className={`${styles.about_us_item} ${styles.reverse}`}>
        <img src={AboutUs1} alt={AboutUs1} className={styles.about_us_image} />
        <div className={styles.about_us_content}>
          <h1 className={styles.about_us_title}>О НАС</h1>
          <p className={styles.about_us_text}>
            Проект направлен на формирование у студентов ряда практических,
            <br /> академических <br /> компетенций, знаний и навыков, связанных
            с коммуникативной и интерактивной работой с аудиторией, созданием и
            проведением экскурсий, использованием актуальных методов и
            технологий в проведении культурных мероприятий.
          </p>
        </div>
      </div>
      <div className={`${styles.about_us_item} ${styles.center_text}`}>
        <div className={styles.about_us_content}>
          <p className={styles.about_us_text}>
            Программа повышения квалификации подготовлена для студентов, которые
            <br />
            хотели бы
            <br /> попробовать применить своё образование на практике,
            рассмотреть свои знания как способ реализации актуальных задач в
            культурной сфере и научиться в <br />
            интересной
            <br /> форме транслировать культуру и историю широкой аудитории.
            Также курс будет интерес тем, кто хочет попробовать себя в новой
            профессиональной области.
          </p>
        </div>
        <img src={AboutUs2} alt={AboutUs2} className={styles.about_us_image} />
      </div>
    </section>
  );
};

export default AboutUs;
