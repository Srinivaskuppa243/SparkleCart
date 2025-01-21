import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useCart } from '../store/StoreContext'; // Import useCart
import { toast } from 'react-toastify'; // Import toast

const ProdDetails = () => {
  //Getting the id from product
  const { id } = useParams()
  let [prods, setProds] = useState([])
  const {dispatch}=useCart()
  const nav=useNavigate()
  //useEffect for fetching the data from an api

  useEffect(() => {
    const fetchProd = async () => {
      const response = await axios.get(`https://fakestoreapi.com/products/${id}`)
      setProds(response.data)
    }
    //calling the function to fetch the Products
    fetchProd()
    return () => { }
  }, [])
  function handleAddtoCart() {
      dispatch({ type: 'ADD_TO_CART', payload: prods }); // Example action type
      toast.success('Added to cart');
  }

  const { image, title, price, description,rating: { rate, count } = {} } = prods
  if (prods.length == 0)
    return (
      <div className="spinner">
        <div className="cube1"></div>
        <div className="cube2"></div>
      </div>
    )
  return (
    <div>
      <div className="card my-2 mx-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={image} className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{price}</p>
              <p className="card-text">{description}</p>
              <button className='btn btn-success my-3' onClick={() => handleAddtoCart(prods)}>Add to Cart</button>
              <button className='btn btn-success' onClick={()=>nav('/shop')}>Back</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProdDetails
