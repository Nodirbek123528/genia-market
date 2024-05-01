import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function CartInfo() {
  const { items } = useSelector(state => state.cart)

  const subtotal = items.reduce((a, b) => a + (b.oldPrice * b.qty), 0)
  const discount = items.reduce((a, b) => a + ((b.oldPrice - b.price) * b.qty), 0)
  const total = items.reduce((a, b) => a + (b.price * b.qty), 0)

  return (
    <div className='cart-info'>
      <div className="cart-info__list">
        <div className="cart-info__row">
          <p className='cart-info__text'>Subtotal</p>
          <p className='cart-info__price'>{subtotal.toLocaleString()} UZS</p>
        </div>
        <div className="cart-info__row">
          <p className='cart-info__text'>Discount</p>
          <p className='cart-info__price_red'>{discount.toLocaleString()} UZS</p>
        </div>
        <div className="cart-info__row">
          <p className='cart-info__text_black'>Total</p>
          <p className='cart-info__price_black'>{total.toLocaleString()} UZS</p>
        </div>
        <Link to={'/checkout'}>
          <button className='cart-info__btn'>Checkout</button>
        </Link>
      </div>
      <div className='cart-info__icons'>
          <span>
            <img src="./images/card-checkout/americanexpress.svg" alt="americanexpress icon" />
          </span>
          <span>
            <img src="./images/card-checkout/mastercard.svg" alt="mastercard icon" />
          </span>
          <span>
            <img src="./images/card-checkout/paypal.svg" alt="paypal icon" />
          </span>
          <span>
            <img src="./images/card-checkout/visa.svg" alt="visa icon" />
          </span>
          <span>
            <img src="./images/card-checkout/apple-pay.svg" alt="apple-pay icon" />
          </span>
        </div>
      
    </div>
  )
}

export default CartInfo