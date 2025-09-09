import React from 'react';
import './Contacts.css';
import AnimatedSection from './AnimatedSection';

const Contacts = () => (
  <AnimatedSection title="Contacts">
    <section id="contacts" className="card">
      <div id="contacts-content">
        {/* Contact Methods */}
        <div className="contact-methods">
          <div className="icon">
            <img src="https://cdn-icons-png.flaticon.com/512/732/732200.png" alt="Email" />
            <a href="mailto:its.dev@example.com">its.dev@example.com</a>
          </div>
          <div className="icon">
            <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub" />
            <a href="https://github.com/its-dev" target="_blank" rel="noopener noreferrer">GitHub Profile</a>
          </div>
          <div className="icon">
            <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" />
            <a href="https://linkedin.com/in/its-dev" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a>
          </div>
          <div className="icon">
            <img src="https://cdn-icons-png.flaticon.com/512/597/597177.png" alt="Phone" />
            <a href="tel:+254712345678">+254 712 345 678</a>
          </div>
          <div className="icon">
            <img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" alt="Twitter" />
            <a href="https://twitter.com/its_dev" target="_blank" rel="noopener noreferrer">@its_dev</a>
          </div>
          <div className="icon">
            <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="Instagram" />
            <a href="https://instagram.com/its.dev" target="_blank" rel="noopener noreferrer">@its.dev</a>
          </div>
          <div className="icon">
            <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook" />
            <a href="https://facebook.com/its.dev" target="_blank" rel="noopener noreferrer">Facebook Page</a>
          </div>
          <div className="icon">
            <img src="https://cdn-icons-png.flaticon.com/512/733/733585.png" alt="WhatsApp" />
            <a href="https://wa.me/254112587164" target="_blank" rel="noopener noreferrer">WhatsApp Chat</a>
          </div>
        </div>

        {/* Contact Form */}
        <form
          action="https://formspree.io/f/yourFormID"
          method="POST"
          className="contact-form"
        >
          <h3>Send a Message</h3>
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </section>
  </AnimatedSection>
);

export default Contacts;
