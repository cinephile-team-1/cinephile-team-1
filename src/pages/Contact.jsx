<<<<<<< HEAD
import React from 'react'

function Contact() {
  return (
    <div>Contact</div>
  )
}

export default Contact
=======
import './contact.scss';

function Contact() {
  return (
    <main className="contact">
      <div className="contact__container">

        {/* LEFT */}
        <div className="contact__left">
          <span className="contact__tag">ESTABLISH LINK</span>

          <h1 className="contact__title">
            STAY <br /> CONNECTED
          </h1>

          <p className="contact__description">
            Experience precision-engineered streaming. Our specialized team is
            standing by to resolve technical queries and partnership requests with cinematic efficiency.
          </p>
        </div>

        {/* RIGHT */}
        <div className="contact__card">
        
          <form>

            <div className="contact__row">
              <div>
                <label>IDENTITY</label>
                <input type="text" placeholder="FULL NAME" />
              </div>

              <div>
                <label>E-MAIL</label>
                <input type="email" placeholder="EMAIL ADDRESS" />
              </div>
            </div>

            <div>
              <label>MESSAGE</label>
              <textarea placeholder="HOW CAN WE ASSIST YOUR CINEPHILE EXPERIENCE?" />
            </div>

            <div className="contact__footer">
              <span className="contact__secure">
                🔒 END-TO-END SECURE
              </span>

              <button type="submit">SEND</button>
            </div>

          </form>
        </div>

      </div>
    </main>
  );
}

export default Contact;
>>>>>>> feature-contact
