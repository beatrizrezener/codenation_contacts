import React from 'react';

import './Contact.scss';

class Contact extends React.Component {

  getDate(strDate) {
    const date = new Date(strDate);
    if (this.isValidDate(date)) {
      return date.toLocaleDateString('pt-br');
    }
    return strDate;
  }

  isValidDate(d) {
    return d instanceof Date && !isNaN(d);
  }

  render() {
    const contact = this.props.data;
    return (
      <article data-testid="contact" className="contact">
        <span className="contact__avatar">
          <img alt="Contact" src={contact.avatar}/>
          </span>
        <span className="contact__data" data-testid="contact-name">{contact.name}</span>
        <span className="contact__data" data-testid="contact-phone">{contact.phone}</span>
        <span className="contact__data" data-testid="contact-country">{contact.country}</span>
        <span className="contact__data" data-testid="contact-date">{this.getDate(contact.admissionDate)}</span>
        <span className="contact__data" data-testid="contact-company">{contact.company}</span>
        <span className="contact__data" data-testid="contact-department">{contact.department}</span>
      </article>
    );
  }
}

export default Contact;
