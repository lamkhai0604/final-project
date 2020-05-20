import React from 'react';
import "./ContactUs.css"

export default function ContactUs() {
    return (
        <div>
            <section id="contact" className="contact">
      <div className="container">

        <div className="section-title">
          <h2><span>Contact</span> Us</h2>
          <p>Ut possimus qui ut temporibus culpa velit eveniet modi omnis est adipisci expedita at voluptas atque vitae autem.</p>
        </div>
      </div>

      {/* <div className="map">
        <iframe style="border:0; width: 100%; height: 350px;" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" frameborder="0" allowfullscreen></iframe>
      </div> */}

      <div className="container mt-5">

        <div className="info-wrap">
          <div className="row">
            <div className="col-lg-3 col-md-6 info">
              <i className="icofont-google-map" />
              <h4>Location:</h4>
              <p>12 Ton Dan Street district 4, ward 14</p>
            </div>

            <div className="col-lg-3 col-md-6 info mt-4 mt-lg-0">
              <i className="icofont-clock-time icofont-rotate-90"></i>
              <h4>Open Hours:</h4>
              <p>Monday-Saturday: 11:00 AM - 2300 PM</p>
            </div>

            <div className="col-lg-3 col-md-6 info mt-4 mt-lg-0">
              <i className="icofont-envelope"></i>
              <h4>Email:</h4>
              <p>lamkhai0604@gmail.com</p>
            </div>

            <div className="col-lg-3 col-md-6 info mt-4 mt-lg-0">
              <i className="icofont-phone"></i>
              <h4>Call:</h4>
              <p>+1 2345 6789 10</p>
            </div>
          </div>
        </div>

        {/* <form action="forms/contact.php" method="post" role="form" className="php-email-form">
          <div className="form-row">
            <div className="col-md-6 form-group">
              <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
              <div className="validate"></div>
            </div>
            <div className="col-md-6 form-group">
              <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
              <div className="validate"></div>
            </div>
          </div>
          <div className="form-group">
            <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
            <div className="validate"></div>
          </div>
          <div className="form-group">
            <textarea className="form-control" name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Message"></textarea>
            <div className="validate"></div>
          </div>
          <div className="mb-3">
            <div className="loading">Loading</div>
            <div className="error-message"></div>
            <div className="sent-message">Your message has been sent. Thank you!</div>
          </div>
          <div className="text-center"><button type="submit">Send Message</button></div>
        </form> */}

      </div>
    </section>
        </div>
    )
}
