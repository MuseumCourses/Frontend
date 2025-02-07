import AboutUs1 from './../../assets/images/about-us-1.png';
import AboutUs3 from './../../assets/images/about-us-3.png';

import styles from './AboutUs.module.scss';

const AboutUs = () => {
  return (
    <section className={styles.container}>
      <div className={styles.about_us_item}>
        <img
          src={AboutUs1}
          alt={AboutUs1}
          className={`${styles.about_us_image} ${styles.reverse_image}`}
        />
        <img
          src={AboutUs3}
          alt={AboutUs3}
          className={`${styles.about_us_image_2}`}
        />
        <div className={styles.about_us_content}>
          <h1 className={styles.about_us_title}>О НАС</h1>
          <p className={styles.about_us_text}>
            Привет! Мы – молодая команда, которая увлечена просвещением и
            стремится сделать историю и культуру интересными для всех. Наша
            программа поможет воплотить эту идею в реальность.
          </p>
          <p className={styles.about_us_text}>
            Мы создали проект, способствующий развитию просветительской
            коммуникации в музейном и экскурсионной деятельности. Программа
            поможет нам вместе раскрыть свой потенциал и таланты, научиться
            актуальным подходам и методикам просвещения, а также создавать
            интересные проекты в музейной сфере, привлекающих людей лучше
            понимать и ценить историю и культуру!
          </p>
          <div className={styles.about_us_desc}>
            Мы открыты для общения, обмена опытом и совместной работы!
            Приглашаем вас присоединиться к нашему курсу!
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
