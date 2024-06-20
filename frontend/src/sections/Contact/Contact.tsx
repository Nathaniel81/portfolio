import React, { useState } from 'react';
import { ImSpinner2 } from "react-icons/im";
import styles from './ContactStyles.module.scss';
import toast from 'react-hot-toast';


function Contact() {
  const [loading, setLoading] = useState(false);
  const notify = (message: string) => toast(message);

  const sendEmail = async (e: React.BaseSyntheticEvent) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.target);

    try {
      const response = await fetch('/api/messages/', {
        method: 'POST',
        body: formData,
      });
      if (response.ok) {
        notify("Message sent successfully!");
      } else {
        const data = await response.json();
        const errorMessage = data.email[0];
        notify(errorMessage);
      }
    } catch (error) {
      notify("Failed to send the message, please try again.");
    } finally {
      setLoading(false);
    }
    e.target.reset();
  };

  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">Contact</h1>
      <form onSubmit={sendEmail}>
        <div className="formGroup">
          <label htmlFor="name" hidden>Name</label>
          <input type="text" name="name" id="name" placeholder="Name" required />
        </div>
        <div className="formGroup">
          <label htmlFor="email" hidden>Email</label>
          <input type="text" name="email" id="email" placeholder="Email" required />
        </div>
        <div className="formGroup">
          <label htmlFor="message" hidden>Message</label>
          <textarea name="message" id="message" placeholder="Message" required></textarea>
        </div>
        <button className={`${styles.submitButton} ${loading ? styles.loading : ''}`} type="submit" disabled={loading}>
          {loading ? (
            <span className={styles.pending}>
              <ImSpinner2 className={styles.spinner} size={20} />
              <span>Please wait...</span>
            </span>
          ) : 'Submit'}
        </button>
      </form>
    </section>
  );
}

export default Contact;
