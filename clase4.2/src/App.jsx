import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import CardProducts from './components/CardProducts'

function App() {
  //http://products-crud.academlo.tech/swagger/
  const [products, setProducts] = useState()

  const getAllProducts = () => {
    const URL = `http://products-crud.academlo.tech/products/`
    axios.get(URL)
      .then(res => setProducts(res.data))
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getAllProducts()
  }, [])

  console.log(products)
  return (
    <div className="App">
      {
        products?.map(product => (
          <CardProducts
            key={product.id}
            product={product}
          />
        ))
      }
    </div>
  )
}

export default App
