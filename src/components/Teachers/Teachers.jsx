import TeacherPhoto from './../../assets/images/teachers-bg.png';
import styles from './Teachers.module.scss';

const Teachers = () => {
  return (
    <section className={styles.container}>
      <h1 className={styles.teachers_title}>Преподаватели</h1>
      <img
        className={styles.teachers_bg}
        src={TeacherPhoto}
        alt={TeacherPhoto}
      />
      <ul className={styles.nav}>
        <li className={styles.nav_item}>
          <img
            src="https://via.placeholder.com/200x300"
            alt="testing photos"
            className={styles.nav_img}
          />
        </li>
        <li className={styles.nav_item}>
          <img
            src="https://via.placeholder.com/200x300"
            alt="testing photos"
            className={styles.nav_img}
          />
        </li>
        <li className={styles.nav_item}>
          {/* <img
            src="https://via.placeholder.com/200x300"
            alt="testing photos"
            className={styles.nav_img}
          /> */}
        </li>
      </ul>
    </section>
  );
};

export default Teachers;
