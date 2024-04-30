import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';

const Funk = () => {
  const [phone, setPhone] = useState('');

  return (
    <div className=''>
      <PhoneInput
        defaultCountry="uz"
        value={phone}
        onChange={(phone) => setPhone(phone)}
      />
    </div>
  );
};



function CheckoutPage() {
  const [showConfirmation, setShowConfirmation] = useState(false);

  return (
    <div className='checkout'>
      <div className="checkout-top">
        <h3 className="checkout-top__title">Buyurtmani rasmiylashtirish</h3>
      </div>
      <div className='checkout-wrapper'>
        <form className="checkout-form">
          <div className="checkout-row">
            <p className="checkout-title">Yetkazib berish shahri</p>
            <select className='checkout-select'>
              <option>Toshkent</option>
              <option>Samarqand</option>
              <option>Navoi</option>
              <option>Buxoro</option>
              <option>Andijon</option>
              <option>Jizzax</option>
              <option>Xorazm</option>
              <option>Qashqadaryo</option>
              <option>Surxandaryo</option>
              <option>Sirdaryo</option>
              <option>Farg'ona</option>
              <option>Namangan</option>
              <option>Qoraqalpokiston</option>
            </select>
          </div>
          <div className="checkout-wrap">
            <div className="checkout-row">
              <label htmlFor="checkout-name" className='checkout-name'>Ism</label>
              <input type="text" id='checkout-name' className='checkout-input' placeholder='Ismingizni kiriting' />
            </div>
            <div className="checkout-row">
              <label htmlFor="checkout-surname" className='checkout-name'>Familiya</label>
              <input type="text" id='checkout-surname' className='checkout-input' placeholder='Familiya kiriting' />
            </div>
          </div>
          <div className='checkout-wrap'>
            <div className="checkout-row">
              <label htmlFor="checkout-num" className='checkout-name'>Telefon raqami </label>
              <Funk/>
            </div>
            <div className="checkout-row">
              <label htmlFor="checkout-addres" className='checkout-name'>Addres</label>
              <input type="email" id='checkout-addres' className='checkout-input' placeholder='Email Addresni kiriting' />
            </div>
          </div>
          <button type="submit" className='checkout-btn'>Checkout</button>

        </form>
      </div>
    </div>
  )
}

export default CheckoutPage