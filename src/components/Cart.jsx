import React from 'react'
import { useCart } from '../store/StoreContext'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
const Cart = () => {
  const { state, dispatch } = useCart()
  const { cart } = state;
  const navigate=useNavigate()

  function handleIncrement(productId) {
    dispatch({ type: 'ADD_TO_CART', payload: { id: productId } }); // Example action type
    toast.success('Item Added ');
  }
  // function for Handling the decrement
  function handleDecrement(productId) {
    dispatch({ type: "DECREMENT", payload: { id: productId } })
    toast.success("Item Removed ")
  }
  // function for Handling the Remove
  function handleRemove(productId) {
    dispatch({ type: "REMOVE_ITEM_IN_CART", payload: { id: productId } })
    toast.success("Removed item from cart")
  }
  const formatPrice = (price) =>
    new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(price);

  const totalPrice = cart.reduce((acc, item) => acc + item.quantity * item.price, 0);
  const handleCheckout = () => {
    if (cart.length === 0) {
      toast.error('Cart is empty. Add items to checkout!');
      return;
    }
    navigate('/checkout'); // Redirect to Checkout page
  };

  return (
    <div className='container'>
      <div className='row'>
        {
          cart.length > 0 ? (cart.map((item) => (
            <div className='col-12  col-sm-12 col-md-3 col-lg-3 mt-2'>
              <div className="card shadow p-3 mb-2">
                <img src={item.image} className="card-img-top prod-img" alt="..." />
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">$ {item.quantity * item.price}</p>
                <p className='card-text'>{item.quantity}</p>
                <div className='d-flex gap-2'>
                  <button className="btn btn-outline-success fs-4 " onClick={() => handleIncrement(item.id)}>+</button>
                  <button className="btn btn-outline-warning fs-4" onClick={() => handleDecrement(item.id)}>-</button>
                  <button className="btn btn-outline-danger fs-4" onClick={() => handleRemove(item.id)}>🗑️</button>
                </div>
              </div>
            </div >
          ))) :
            (<>
              <h1>Cart is Empty</h1>
              <p className='fs-2'>Add items to cart 😞</p>
            </>
            )
        }
      </div>
      {cart.length > 0 && (
        <div className="justify-content-end align-items-end text-end">
          <h4>Total Price: {formatPrice(totalPrice)}</h4>
          <button className="btn btn-primary" onClick={handleCheckout}>Checkout</button>
        </div>
      )}
    </div>
  )
}

export default Cart
