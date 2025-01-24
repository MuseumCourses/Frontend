import AboutUs2 from './../../assets/images/about-us-2.png';
import styles from './AboutUs.module.scss';

const AboutUsProgram = () => {
  return (
    <section className={styles.container}>
      <div className={`${styles.about_us_item} ${styles.item_center}`}>
        <div className={`${styles.about_us_content} ${styles.content_text}`}>
          <h1 className={styles.about_us_title}>О ПРОГРАММЕ</h1>
          <p className={styles.about_us_text}>
            Проект направлен на формирование у студентов ряда практических,
            академических компетенций, знаний и навыков, связанных с
            коммуникативной и интерактивной работой с аудиторией, созданием и
            проведением экскурсий,  использованием актуальных методов и
            технологий в проведении культурных мероприятий.
          </p>
          <p className={styles.about_us_text}>
            Программа повышения квалификации подготовлена для студентов, которые
            хотели бы попробовать применить своё образование на практике,
            рассмотреть свои знания как способ реализации актуальных задач в
            культурной сфере и научиться в интересной форме транслировать
            культуру и историю широкой аудитории.
          </p>
          <p className={styles.about_us_text}>
            Курс будет интерес тем, кто хочет попробовать себя в новой
            профессиональной области или только начинает в ней свой путь.
          </p>
        </div>
        <img
          src={AboutUs2}
          alt={AboutUs2}
          className={styles.about_us_image_program}
        />
      </div>
    </section>
  );
};

export default AboutUsProgram;
