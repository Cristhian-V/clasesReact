import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import CardProducts from './components/CardProducts'
import FormProduct from './components/FormProduct'

function App() {
  //http://products-crud.academlo.tech/swagger/
  const [products, setProducts] = useState()
  const [dataUpd, setDataUpd] = useState()

  const getAllProducts = () => {
    const URL = `http://products-crud.academlo.tech/products/`
    axios.get(URL)
      .then(res => setProducts(res.data))
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getAllProducts()
  }, [])

  const createProduct = data => {
    const URL = `http://products-crud.academlo.tech/products/`
    axios.post(URL,data)
      .then(res => getAllProducts())
      .catch(err => console.log(err))
  }

  const updateProductById = (data)=>{
    const URL = `http://products-crud.academlo.tech/products/${data.id}/`
    axios.patch(URL,data)
      .then(res => getAllProducts())
      .catch(err => console.log(err))
  }

  return (
    <div className="App">
      <div className='form-container'>
        <FormProduct 
          createProduct={createProduct}
          dataUpd={dataUpd}
          updateProductById={updateProductById}
          setDataUpd={setDataUpd}
        />
      </div>
      <div className='cardProduct-container'>
      {
        products?.map(product => (
          <CardProducts
            key={product.id}
            product={product}
            getAllProducts={getAllProducts}
            setDataUpd={setDataUpd}
          />
        ))
      }
      </div>
    </div>
  )
}

export default App
