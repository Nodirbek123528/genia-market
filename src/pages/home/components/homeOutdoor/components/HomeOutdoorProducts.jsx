import React from 'react'
import { Link } from 'react-router-dom'

function HomeOutdoorProduct({ list }) {

  return (
    <div className="homeOutdoor-products">
      {
        list.map(item => (
          <Link to={`/product/${item.slug}`}key={item.id}>
            <div className="homeOutdoor-product" key={item.id}>
              <h4 className='homeOutdoor-product__title'>{item.name}</h4>
              <p className='homeOutdoor-product__price'>{item.price.toLocaleString()} UZS</p>
              <div className="homeOutdoor-product__image">
                <img src={item.image} alt={item.title} />
              </div>
            </div>
          </Link>
        ))
      }

    </div>
  )
}

export default HomeOutdoorProduct