import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';

function OffersProducts() {

  const { productsOffers } = useSelector(state => state.home)


  return (
    <div className="offers-products">
      {
        productsOffers.list.map(item => (
          <Link to={`/product/${item.slug}`}key={item.id}>
            <div className="offers-product" key={item.id}>
              <div className="offers-product__image">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="offers-product__content">
                <p className="offers-product__title">{item.name}</p>
                <p className="offers-product__percent">-{item.discount}%</p>
              </div>
            </div>
          </Link>
        ))
      }
    </div>
  )
}

export default OffersProducts