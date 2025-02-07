import styles from './Header.module.scss';
import Header1 from './../../assets/images/header-1.png';

const Header = () => {
  return (
    <div className={styles.content}>
      <div className={styles.headerItem}>
        <div className={styles.item}>
          <h1 className={styles.headerTitle}>
            <span>истории</span> <br />
            <span className={styles.headerMini}>и</span> смыслы:
          </h1>
          <div className={styles.line}></div>
          <p className={styles.headerSubText}>
            Программа повышения квалификации
          </p>
        </div>
        <div className={styles.item2}>
          <h1 className={styles.headerTitle2}>Просветительская коммуникация</h1>
          <p className={styles.headerSubText2}>
            в музейном и экскурсионном деле
          </p>
        </div>
      </div>
      <div className={styles.headerItem}>
        <img src={Header1} alt={Header1} className={styles.headerImg} />
      </div>
      <div className={styles.blur_overlay}></div>
    </div>
  );
};

export default Header;
