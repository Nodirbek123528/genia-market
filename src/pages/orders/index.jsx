import React from 'react'
import OrdersList from './components/OrdersList'
import OrdersInfo from './components/OrdersInfo'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'


function OrdersPage() {
  const { items } = useSelector(state => state.orders)
  const navigate = useNavigate()
  const handleBack = () => {
    navigate('/')
  }


  return (
    <div className='order-page'>
      <div className="container">
        {
          items.length <= 0 ?
            <div className='cart-empty'>
              <div className="cart-empty__imag">
                <img src="./public/images/no-order.png" className='cart-empty__image_image' alt="empty cart image" />
              </div>
              <div className="cart-empty__content">
                <h3 className="cart-empty__title">Sevimli mahsulotlar yo'q</h3>
                <Link to='/'>
                  <button className="cart-empty__button">Bosh menyuga qaytish</button>
                </Link>
              </div>
            </div>
            :
            <>
              <h1 className="order-page__title">Orders</h1>
              <div className="order-page__row">
                <OrdersList />
                {/* <OrdersInfo /> */}
              </div>
            </>
        }
      </div>
    </div>
  )
}

export default OrdersPage