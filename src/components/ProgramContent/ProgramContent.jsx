import ProgramImage1 from './../../assets/images/program-1.png';
import ProgramImage2 from './../../assets/images/program-2.png';

import styles from './ProgramContent.module.scss';

const ProgramContent = () => {
  return (
    <section className={styles.program_content}>
      <div className={styles.program_content_header}>ПРОГРАММА</div>
      <div className={styles.module_buttons}>
        <div className={styles.module_button}>
          <p className={styles.module_button_text}>
            Модуль 1<br />
          </p>
          <button>
            <a>ИССЛЕДОВАНИЕ</a>
          </button>
        </div>
        <div className={styles.module_button}>
          <p className={styles.module_button_text}>Модуль 2</p>
          <button>
            <a>РЕАЛИЗАЦИЯ</a>
          </button>
        </div>
      </div>
      <div className={styles.description}>
        Модули разработаны для проведения занятий в смешанном формате и
        подразумевают комплексное обучение, включающее деловые игры, круглые
        столы, посещение музейных площадок и общение со специалистами.
        Программные часы направлены на интенсивный курс практических и
        академических занятий оффлайн и онлайн с преподавателями, обсуждение
        интересных тематических кейсов, а также подготовку и презентацию
        проекта.
      </div>
      <div className={styles.line}></div>
      <div className={styles.learning_section}>
        <div className={styles.learning_section_learning_item}>
          <img
            src={ProgramImage1}
            alt="Процесс обучения"
            className={styles.learning_section_learning_img_1}
          />
          <h3 className={styles.learning_section_learning_item_1}>
            ПРОЦЕСС ОБУЧЕНИЯ
          </h3>
        </div>
        <div className={styles.learning_section_learning_item}>
          <img
            src={ProgramImage2}
            alt="Чему научитесь"
            className={styles.learning_section_learning_img_2}
          />
          <h3 className={styles.learning_section_learning_item_2}>
            ЧЕМУ НАУЧИТЕСЬ
          </h3>
        </div>
      </div>
    </section>
  );
};

export default ProgramContent;
