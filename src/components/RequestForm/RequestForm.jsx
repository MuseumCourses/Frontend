import { useState } from 'react';
import Request1 from './../../assets/images/request-1.png';
import Request2 from './../../assets/images/request-2.png';
import styles from './RequestForm.module.scss';

const RequestForm = () => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [question, setQuestion] = useState('');
  const [student, setStudent] = useState(false);
  const [consent, setConsent] = useState(false);
  const [processing, setProcessing] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(phone, email, student, consent);
    setProcessing(true);
    setTimeout(() => {
      setProcessing(false);
      alert('Заявка успешно отправлена!');
    }, 2000);
  };

  return (
    <section className={styles.requestForm}>
      <h2 className={styles.title}>КАК ПОДАТЬ ЗАЯВКУ</h2>
      <p className={styles.description}>
        Для поступления на программу требуется лишь заполнить необходимую
        заявку. Набор на курс не требует конкурсного отбора, написания
        мотивационных или рекомендательных писем, а также сдачи
        профессионального опыта.
      </p>
      <p className={styles.description}>
        Мы считаем, что желание работать, откровенность и взаимопонимание
        являются залогом успешного прохождения программы.
      </p>
      <div className={styles.requestField}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <table className={styles.table}>
            <tbody>
              <tr>
                <td className={styles.desc}>
                  <label htmlFor="fio">ФИО</label>
                </td>
                <td>
                  <input
                    type="text"
                    id="fio"
                    className={styles.input}
                    required
                  />
                </td>
              </tr>
              <tr>
                <td className={styles.desc}>
                  <label htmlFor="email">e-mail</label>
                </td>
                <td>
                  <input
                    type="email"
                    id="email"
                    className={styles.input}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </td>
              </tr>
              <tr>
                <td className={styles.desc}>
                  <label htmlFor="phone">тел.: +7</label>
                </td>
                <td>
                  <input
                    type="tel"
                    id="phone"
                    className={styles.input}
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </td>
              </tr>
              <tr>
                <td className={`${styles.desc} ${styles.checkboxSpec}`}>
                  <input
                    type="checkbox"
                    id="consent"
                    className={styles.checkbox}
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                    required
                  />
                </td>
                <td className={styles.checkboxField}>
                  <label
                    htmlFor="consent"
                    className={`${styles.label} ${consent ? styles.checked : ''}`}
                  >
                    Согласие на обработку персональных данных
                  </label>
                </td>
              </tr>
              <tr>
                <td className={`${styles.desc} ${styles.checkboxSpec}`}>
                  <input
                    type="checkbox"
                    id="student"
                    className={styles.checkbox}
                    checked={student}
                    onChange={(e) => setStudent(e.target.checked)}
                    required
                  />
                </td>
                <td className={styles.checkboxField}>
                  <label
                    htmlFor="student"
                    className={`${styles.label} ${student ? styles.checked : ''}`}
                  >
                    Являюсь студентом
                  </label>
                </td>
              </tr>
            </tbody>
          </table>
          <button type="submit" className={styles.button} disabled={processing}>
            {processing ? 'Отправка...' : 'ПОДАТЬ ЗАЯВКУ'}
          </button>
        </form>

        {/* Вторая форма */}
        <form className={styles.form} onSubmit={handleSubmit}>
          <table className={styles.table}>
            <tbody>
              <tr>
                <td className={styles.desc}>
                  <label htmlFor="fio">ФИО</label>
                </td>
                <td>
                  <input
                    type="text"
                    id="fio"
                    className={styles.input}
                    required
                  />
                </td>
              </tr>
              <tr>
                <td className={styles.desc}>
                  <label htmlFor="email">e-mail</label>
                </td>
                <td>
                  <input
                    type="email"
                    id="email"
                    className={styles.input}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </td>
              </tr>
              <tr>
                <td className={styles.desc}>
                  <label htmlFor="phone">тел.: +7</label>
                </td>
                <td>
                  <input
                    type="tel"
                    id="phone"
                    className={styles.input}
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </td>
              </tr>
              <tr>
                <td className={styles.desc}>
                  <label htmlFor="question">
                    <svg
                      width="11.231995"
                      height="23.167969"
                      viewBox="0 0 11.232 23.168"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                    >
                      <desc>Created with Pixso.</desc>
                      <defs />
                      <path
                        id="?"
                        d="M0.25 0.7L7.86e-6 4.6L0.64 4.6C1.37 2.43 3.07 1.34 4.54 1.34C6.17 1.34 7 2.39 7 3.87C7 5.21 6.33 6.78 5.53 7.93L4.32 9.66C3.29 11.13 2.33 12.63 2.33 14.07C2.33 15.13 2.84 16.09 4.25 16.95L4.54 16.63C4.48 16.38 4.44 16.12 4.44 15.87C4.44 14.17 5.92 12.86 7.13 11.45L9.28 8.99C10.62 7.45 11.23 5.91 11.23 4.54C11.23 1.95 8.92 -0.01 4.6 -0.01C3 -0.01 1.53 0.25 0.25 0.7ZM2.14 20.92C2.14 22.2 3.1 23.16 4.38 23.16C5.56 23.16 6.62 22.2 6.62 20.92C6.62 19.74 5.56 18.68 4.38 18.68C3.1 18.68 2.14 19.74 2.14 20.92Z"
                        fill="#FFFFFF"
                        fillOpacity="1.000000"
                        fillRule="evenodd"
                      />
                    </svg>
                  </label>
                </td>
                <td>
                  <input
                    type="question"
                    id="question"
                    className={styles.input}
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    required
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <button type="submit" className={styles.button} disabled={processing}>
            {processing ? 'Отправка...' : 'Задать вопрос'}
          </button>
        </form>
      </div>
      <img src={Request1} alt={Request1} className={styles.requestBg1} />
      <img src={Request2} alt={Request2} className={styles.requestBg2} />
    </section>
  );
};

export default RequestForm;
