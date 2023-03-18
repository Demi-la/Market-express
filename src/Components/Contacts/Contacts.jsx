import React from "react";
import Nav from "../landing_page/Nav/Nav";
import { IoIosArrowForward } from "react-icons/io";
import Account_logo from "../Account/Account_logo/Account_logo";
import { useRef } from "react";
import emailjs from "emailjs-com";
import Whyus from "../landing_page/Whyus/Whyus";
import "./Contacts.css";
import Newsletter from "../landing_page/Newsletter/Newsletter";
import Footer from "../landing_page/Footer/Footer";

const Contacts = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_l262ust",
      "template_w1jmn9a",
      form.current,
      "vSnq1YjhSfmHOrQ38"
    );

    e.target.reset();
  };

  return (
    <>
      <div className="contact__section">
        <div className="contacts__container">
          <Account_logo />
          <Nav />
          <div className="contacts__home">
            <p>
              Home
              <IoIosArrowForward /> <a href="/">Help</a>
            </p>
            <h1>Contact us</h1>
          </div>
          <div className="contacts__wrapper">
            <div className="contacts__email">
              <form ref={form} onSubmit={sendEmail}>
                <label className="contacts__label">Full Name</label>
                <input
                  className="contacts__input"
                  type="text"
                  name="name"
                  placeholder="Your Full Name"
                  required
                />
                <label className="contacts__label"> Email Address</label>
                <input
                  className="contacts__input"
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                />
                <label className="contacts__label">Your Message</label>
                <textarea
                      className="contacts__input"
                  name="message"
                  rows="7"
                  placeholder="Your Message"
                  required
                />
                <button type="submit" className="contacts_btn">
                  Submit
                </button>
              </form>
            </div>
            <div className="contacts__text">
                <p>For easier customer care service,<br/>
                      you can call us directly on <span>09080520324</span> or send a message to us <br/>on whatsapp on <span>09158985264</span> 
                      to talk to our customer service<br/> representatives.
                      We are available on weekdays;<span>Mondays to Fridays<br/>8am to 7pm and weekends 9am to 6pm.</span> </p>
            </div>
          </div>
          <Whyus/>
          <Newsletter/>
          <Footer/>
        </div>
      </div>
    </>
  );
};

export default Contacts;
