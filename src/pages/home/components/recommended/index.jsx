import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function RecommendedList() {

  const {productsRecommended} = useSelector(state => state.home)

  return (
    <section className="recommended">
      <div className="container">
        <div className="recommended-wrapper">
          <div className="recommended-title">
            <h1 className='recommended-title__title'>Recommended items</h1>
          </div>
          <div className="recommended-products">
            {
              productsRecommended.list.map(item => (
                <Link to={`/product/${item.slug}`} key={item.id}>
                  <div className="recommended-product">
                    <div className="recommended-product__image">
                      <img src={item.image} alt={item.title} />
                    </div>
                    <p className="recommended-product__price">{item.price.toLocaleString()} UZS</p>
                    <h4 className="recommended-product__title">{item.name}</h4>
                  </div>
                </Link>
              ))
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default RecommendedList