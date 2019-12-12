import React, { Component } from 'react';

import Button from '../../../components/UI/Button/Button';

import style from './ContactData.module.css';

class ContactData extends Component {
  state = {
    name: '',
    email: '',
    address: {
      street: '',
      postalCode: ''
    }
  };

  render() {
    return (
      <div className={style.ContactData}>
        <h4>Enter your Contact Data</h4>
        <form>
          <input type="text" name="name" placeholder="your name here" />
          <input type="text" name="email" placeholder="your email here" />
          <input
            type="text"
            name="street"
            placeholder="your street name here"
          />
          <input
            type="text"
            name="postal"
            placeholder="your postal code here"
          />
          <Button btnType="Success">ORDER</Button>
        </form>
      </div>
    );
  }
}

export default ContactData;
