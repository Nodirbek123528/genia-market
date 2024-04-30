import React from 'react'
import HomeOutdoorContent from './components/HomeOutdoorContent'
import HomeOutdoorProduct from './components/HomeOutdoorProducts'

function Products({category, list}) {

  return (
    <section className="homeOutdoor">
      <div className="container">
        <div className="homeOutdoor-wrapper">
          <HomeOutdoorContent category={category} />
          <HomeOutdoorProduct list={list}/>
        </div>
      </div>
    </section>
  )
}

export default Products