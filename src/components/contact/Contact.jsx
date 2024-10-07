import './contact.css';
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
  const [state, handleSubmit] = useForm('xgvwvzlj');

  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Get in touch</h2>
      <span className="section__subtitle">Contact Me </span>

      <div className="contact__container container grid">
        <div className="contact__content">
          <div className="contact__info">
            <div className="contact__card">
              <i className="bx bx-envelope contact__card-icon"></i>

              <h3 className="contact__card-title">Email</h3>
              {/* <span className="contact__card-data">
                farisalialharthi@gmail.com
              </span> */}

              <a
                href="mailto:examplemail@gmail.com.com"
                className="contact__button"
              >
                Write me{' '}
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>

            <div className="contact__card">
              <i className="bx bxl-whatsapp contact__card-icon"></i>

              <h3 className="contact__card-title">Only Whatsapp</h3>
              {/* <span className="contact__card-data">053 530 7770</span> */}

              <a
                href="https://api.whatsapp.com/send?phone=966535307770&text=Hello"
                className="contact__button"
              >
                Write me{' '}
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="contact__content">
          <h3 className="contact__title"></h3>
          <form onSubmit={handleSubmit} className="contact__form">
            <div className="contact__form-div">
              <label className="contact__form-tag">Email Address</label>
              <input
                autoComplete="off"
                required
                type="email"
                name="email"
                className="contact__form-input"
                placeholder="Insert your email"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>

            <div className="contact__form-div contact__form-area">
              <label className="contact__form-tag">Your message</label>
              <textarea
                required
                name="message"
                // @ts-ignore
                cols="30"
                // @ts-ignore
                rows="10"
                className="contact__form-input"
                placeholder="Message . . ."
              ></textarea>

              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>

            <button
              type="submit"
              disabled={state.submitting}
              className="button button--flex"
            >
              {state.submitting ? 'Submitting . . .' : 'Send Message'}

              <i
                className=" uil uil-message"
                style={{
                  color: 'var(--container-color)',
                  fontSize: '1rem',
                  marginLeft: '10px',
                }}
              ></i>
            </button>

            {state.succeeded && (
              <p style={{ fontSize: '16px', marginTop: '1.7rem' }}>
                Your message has been sent successfully👌
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
