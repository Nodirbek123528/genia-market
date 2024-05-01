import React from 'react'
import { useDispatch } from 'react-redux'
import { addOrder, removeOrder } from '../../../store/slices/orders'
import toast, { Toaster } from 'react-hot-toast';
import { addCart } from '../../../store/slices/cart';

function OrdersProduct({ product }) {
  // const { id, title, mainImage, model, price } = product
  const dispatch = useDispatch()
  const handleRemove = () => {
    dispatch(removeOrder(product.id))
  }
  const handleAddCart = () => {
    dispatch(addCart(product))
  }


  const notify = () => toast.success('Savatga qo\'shildi!');
  const Toast = () => {
    return (
      <div>
        <button className="ordres-product__btn" onClick={notify}>Savatga qo'shish</button>
        <Toaster
          position="top-right"
          reverseOrder={false}
        />
      </div>
    );
  };


  return (
    <div className='ordres-product'>
      <div className="ordres-product__image">
        <img src={product.image} alt="" />
      </div>
      <div className="ordres-product__content">
        <div className="ordres-product__row">
          <p className="ordres-product__title">{product.title}</p>
          <p className='ordres-product__price'>{product.price.toLocaleString()} UZS</p>
        </div>
        <div className="ordres-product__row">
          <p className='ordres-product__subtitle'>{product.model}</p>
        </div>
        <div className="ordres-product__row">
          <button className="ordres-product__button" onClick={handleRemove}>Remove</button>
          <button className="" onClick={handleAddCart}><Toast/></button>
        </div>
      </div>
    </div>
  )
}

export default OrdersProduct