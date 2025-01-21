import React from 'react';
import { useCart } from '../store/StoreContext';

const Checkout = () => {
  const { state } = useCart();
  const { cart } = state;

  const formatPrice = (price) =>
    new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(price);

  const totalPrice = cart.reduce((acc, item) => acc + item.quantity * item.price, 0);

  return (
    <div className="container mt-5">
      <div className="card shadow-lg p-4">
        <h1 className="card-title text-center">Checkout Bill</h1>
        <hr />
        <table className="table table-bordered table-hover mt-3">
          <thead className="table-dark">
            <tr>
              <th scope="col">Item</th>
              <th scope="col">Price</th>
              <th scope="col">Qty</th>
              <th scope="col">Total</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => (
              <tr key={item.id}>
                <td>{item.title}</td>
                <td>{formatPrice(item.price)}</td>
                <td>{item.quantity}</td>
                <td>{formatPrice(item.price * item.quantity)}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="text-end mt-3">
          <h4>
            <span className="text-secondary">Grand Total: </span>
            <span className="fw-bold text-primary">{formatPrice(totalPrice)}</span>
          </h4>
        </div>
        <button className="btn btn-success w-100 mt-4 fs-5 py-2 shadow-sm">Pay Now!!</button>
      </div>
    </div>
  );
};

export default Checkout;
