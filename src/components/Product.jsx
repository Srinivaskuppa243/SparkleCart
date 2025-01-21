import { Link } from 'react-router-dom'
import { useCart } from '../store/StoreContext'
import { toast } from 'react-toastify'

const ProductCard = ({ prod }) => {
  console.log("prodcard: ", prod)
  const { id, image, title, price, rating: { rate, count } = {} } = prod
  let cardTitle = title.length <= 51 ? title : title.slice(0, 50)
  const { dispatch } = useCart()
  //handling the add to cart functionality
  function handleAddtoCart() {
    dispatch({ type: 'ADD_TO_CART', payload: prod }); // Example action type
    toast.success('Added item to cart 🎉');
  }
  return (
    <div className='prod col-12  col-sm-12 col-md-3 col-lg-3'>
      <div className="card shadow p-3 m-2">
        <Link to={`/shop/${id}`} className='nav-link'>
          <img src={image} className="card-img-top prod-img" alt="..." />
          <div>
            <h5 className="card-title">{cardTitle}</h5>
            <p className="card-text">＄{price}</p>
          </div>
        </Link>
        <button className='btn btn-success' onClick={()=>{handleAddtoCart(prod)}}>AddtoCart</button>
      </div>
    </div >
  )
}

export default ProductCard