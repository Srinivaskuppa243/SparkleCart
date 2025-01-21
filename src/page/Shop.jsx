import { useState, useEffect } from 'react'
import axios from 'axios'
import ProductCard from '../components/Product'
import Search from '../components/Search'
const Shop = () => {
  let [prods, setProds] = useState([])
  const [searchQue, setSearchQue] = useState("")
  //useEffect for fetching the data from an api

  useEffect(() => {
    const fetchProd = async () => {
      const response = await axios.get("https://fakestoreapi.com/products")
      setProds(response.data)
    }
    //calling the function to fetch the Products
    fetchProd()
    return () => { }
  }, [])
  if (prods.length == 0)
    return (
      <div className="spinner">
        <div className="cube1"></div>
        <div className="cube2"></div>
      </div>
    )
  const filteredProds = prods.filter(prod =>
    prod.title.toLowerCase().includes(searchQue.toLowerCase())
  );
  return (
    <>
      <div className='container'>
        <Search onSearch={setSearchQue} />
        <div className='row'>
          {
            filteredProds.map((prod) => <ProductCard prod={prod} />)
          }
        </div>
      </div>
      <div class="footer bg-dark text-center text-white p-4 w-100">
        <h5>&copy; 2025 SparkleCart. All Rights Reserved.</h5>
      </div>
    </>
  )
}

export default Shop
