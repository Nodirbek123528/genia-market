import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Products from '.'
import { getCategoryRecommendedProducts } from '../../../../store/actions/homeActions'

function ProductsSection() {
  const { categoryRecommended, categoryRecommendedProducts } = useSelector(state => state.home)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCategoryRecommendedProducts(categoryRecommended.list.map(item => (item.id))))
  }, [categoryRecommended.list])


  return (
    <section>
      {
        categoryRecommended.list.map(item => (
          <Products
            category={item}
            key={item.id} 
            list={categoryRecommendedProducts.list.filter(el => el.category_id === item.id)} />))
      }
    </section>
  )
}

export default ProductsSection