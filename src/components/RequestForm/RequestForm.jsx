import { useState } from 'react';
import Request1 from './../../assets/images/request-1.png';
import Request2 from './../../assets/images/request-2.png';

import TopImage1 from './../../assets/images/topImage-1.png';
import TopImage2 from './../../assets/images/topImage-2.png';

import styles from './RequestForm.module.scss';

const SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbxnuC8kwSQ6W6A6DAj3mgypYtw6u8FWOgrpZWDcv4GZzJ9nOJRoy5e4YmMX_7MRx545/exec';

const RequestForm = () => {
  const [applicationForm, setApplicationForm] = useState({
    fio: '',
    email: '',
    phone: '',
    student: false,
    consent: false,
  });

  const [questionForm, setQuestionForm] = useState({
    fio: '',
    email: '',
    phone: '',
    question: '',
  });

  const [isSubmitting, setIsSubmitting] = useState({
    application: false,
    question: false,
  });

  const handleSubmit = async (formData, isQuestion) => {
    const type = isQuestion ? 'question' : 'application';
    try {
      const response = await fetch(SCRIPT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain',
          Accept: 'text/plain',
        },
        mode: 'no-cors',
        body: JSON.stringify({
          ...formData,
          type,
        }),
      });
      return true;
    } catch (error) {
      console.error('Submission error:', error);
      alert(`Ошибка отправки: ${error.message}`);
      return false;
    }
  };

  const handleApplicationSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting((prev) => ({ ...prev, application: true }));
    const success = await handleSubmit(applicationForm, false);
    if (success) {
      setApplicationForm({
        fio: '',
        email: '',
        phone: '',
        student: false,
        consent: false,
      });
      alert('Заявка успешно отправлена!');
    }
    setIsSubmitting((prev) => ({ ...prev, application: false }));
  };

  const handleQuestionSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting((prev) => ({ ...prev, question: true }));
    const success = await handleSubmit(questionForm, true);
    if (success) {
      setQuestionForm({
        fio: '',
        email: '',
        phone: '',
        question: '',
      });
      alert('Вопрос успешно отправлен!');
    }
    setIsSubmitting((prev) => ({ ...prev, question: false }));
  };

  const renderInputField = (
    form,
    setForm,
    prefix,
    field,
    type = 'text',
    extraProps = {}
  ) => {
    return (
      <input
        key={`${prefix}-${field}`}
        value={form[field]}
        onChange={(e) => {
          if (type === 'checkbox') {
            setForm((prev) => ({
              ...prev,
              [field]: e.target.checked,
            }));
          } else if (field === 'phone') {
            let sanitizedValue = e.target.value.replace(/[^+80-9]/g, '');

            // Проверяем формат номера
            if (sanitizedValue.startsWith('+')) {
              sanitizedValue = sanitizedValue.slice(0, 12);
            } else if (sanitizedValue.startsWith('8')) {
              sanitizedValue = sanitizedValue.slice(0, 11);
            } else {
              sanitizedValue = '';
            }

            setForm((prev) => ({
              ...prev,
              [field]: sanitizedValue,
            }));
          } else {
            setForm((prev) => ({
              ...prev,
              [field]: e.target.value,
            }));
          }
        }}
        type={type}
        {...extraProps}
      />
    );
  };

  // Рендер чекбокса
  const renderCheckbox = (form, setForm, prefix, field, label) => (
    <>
      <td className={`${styles.desc} ${styles.checkboxSpec}`}>
        <input
          type="checkbox"
          id={`${prefix}-${field}`}
          className={styles.checkbox}
          checked={form[field]}
          onChange={(e) =>
            setForm((prev) => ({
              ...prev,
              [field]: e.target.checked,
            }))
          }
          required={field === 'consent'}
        />
      </td>
      <td>
        <label
          htmlFor={`${prefix}-${field}`}
          className={`${styles.label} ${form[field] ? styles.checked : ''}`}
        >
          {label}
        </label>
      </td>
    </>
  );

  return (
    <section className={styles.requestForm}>
      <div className={styles.TopImage2mages}>
        <img src={TopImage2} alt={TopImage1} className={styles.topImages1} />
        <img src={TopImage1} alt={TopImage2} className={styles.topImages2} />
      </div>
      <h2 className={styles.title}>КАК записаться на курс?</h2>

      <div className={styles.descriptions}>
        <p className={styles.description}>
          Для поступления на программу требуется лишь заполнить необходимую
          заявку. Набор на курс не требует конкурсного отбора, написания
          мотивационных или рекомендательных писем, а также наличие
          профессионального опыта. <br /> <br /> Мы считаем, что желание
          работать, открытость и взаимопонимание являются залогом успешного
          прохождения программы.
        </p>
      </div>

      <div className={styles.requestField}>
        <form className={styles.form} onSubmit={handleApplicationSubmit}>
          <table className={styles.table}>
            <tbody>
              {['fio', 'email', 'phone'].map((field) => (
                <tr key={field}>
                  <td className={styles.desc}>
                    <label htmlFor={`app-${field}`}>
                      {field === 'fio'
                        ? 'ФИО'
                        : field === 'email'
                          ? 'e-mail'
                          : 'тел.: +7'}
                    </label>
                  </td>
                  <td>
                    {renderInputField(
                      applicationForm,
                      setApplicationForm,
                      'app',
                      field,
                      field === 'email'
                        ? 'email'
                        : field === 'phone'
                          ? 'tel'
                          : 'text',
                      {
                        required: true,
                        ...(field === 'phone' && {
                          placeholder: '',
                        }),
                      }
                    )}
                  </td>
                </tr>
              ))}

              <tr>
                {renderCheckbox(
                  applicationForm,
                  setApplicationForm,
                  'app',
                  'consent',
                  'Согласие на обработку персональных данных'
                )}
              </tr>

              <tr>
                {renderCheckbox(
                  applicationForm,
                  setApplicationForm,
                  'app',
                  'student',
                  'Получаю/ имею высшее образование'
                )}
              </tr>
            </tbody>
          </table>

          <button
            type="submit"
            className={styles.submitButton}
            disabled={isSubmitting.application}
          >
            {isSubmitting.application ? 'Отправка...' : 'ПОДАТЬ ЗАЯВКУ'}
          </button>

          <span className={styles.requestSpan}>
            После обработки заявки с Вами свяжутся координаторы программы. (по
            почте, далее – связь через Telegram-канал после вашего подтверждения
            об участии).
          </span>
        </form>

        <form className={styles.form} onSubmit={handleQuestionSubmit}>
          <table className={styles.table}>
            <tbody>
              {['fio', 'email', 'phone'].map((field) => (
                <tr key={field}>
                  <td className={styles.desc}>
                    <label htmlFor={`question-${field}`}>
                      {field === 'fio'
                        ? 'ФИО'
                        : field === 'email'
                          ? 'e-mail'
                          : 'тел.: +7'}
                    </label>
                  </td>
                  <td>
                    {renderInputField(
                      questionForm,
                      setQuestionForm,
                      'question',
                      field,
                      field === 'email'
                        ? 'email'
                        : field === 'phone'
                          ? 'tel'
                          : 'text',
                      {
                        required: true,
                        ...(field === 'phone' && {
                          placeholder: '',
                        }),
                      }
                    )}
                  </td>
                </tr>
              ))}

              <tr>
                <td className={styles.desc}>
                  <label htmlFor="question-text">
                    <svg
                      width="11.23"
                      height="23.17"
                      viewBox="0 0 11.232 23.168"
                      className={styles.questionIcon}
                    >
                      <path
                        d="M0.25 0.7L7.86e-6 4.6L0.64 4.6C1.37 2.43 3.07 1.34 4.54 1.34C6.17 1.34 7 2.39 7 3.87C7 5.21 6.33 6.78 5.53 7.93L4.32 9.66C3.29 11.13 2.33 12.63 2.33 14.07C2.33 15.13 2.84 16.09 4.25 16.95L4.54 16.63C4.48 16.38 4.44 16.12 4.44 15.87C4.44 14.17 5.92 12.86 7.13 11.45L9.28 8.99C10.62 7.45 11.23 5.91 11.23 4.54C11.23 1.95 8.92 -0.01 4.6 -0.01C3 -0.01 1.53 0.25 0.25 0.7ZM2.14 20.92C2.14 22.2 3.1 23.16 4.38 23.16C5.56 23.16 6.62 22.2 6.62 20.92C6.62 19.74 5.56 18.68 4.38 18.68C3.1 18.68 2.14 19.74 2.14 20.92Z"
                        fill="currentColor"
                      />
                    </svg>
                  </label>
                </td>
                <td>
                  <textarea
                    id="question-text"
                    value={questionForm.question}
                    onChange={(e) =>
                      setQuestionForm((prev) => ({
                        ...prev,
                        question: e.target.value,
                      }))
                    }
                    placeholder="Введите ваш вопрос"
                    required
                  />
                </td>
              </tr>
            </tbody>
          </table>

          <button
            type="submit"
            className={styles.submitButton}
            disabled={isSubmitting.question}
          >
            {isSubmitting.question ? 'Отправка...' : 'ЗАДАТЬ ВОПРОС'}
          </button>

          <span className={styles.requestSpan}>
            Если возник вопрос – напишете нам. Мы оперативно Вам на него
            ответим!
          </span>
        </form>
      </div>

      <img src={Request1} alt="Decoration 1" className={styles.requestBg1} />
      <img src={Request2} alt="Decoration 2" className={styles.requestBg2} />
    </section>
  );
};

export default RequestForm;
