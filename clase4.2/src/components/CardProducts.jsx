import axios from 'axios'
import React from 'react'

const CardProducts = ({ product, getAllProducts, setDataUpd }) => {
    const Available = (isAvailable)=>{
        if (isAvailable){
            return 'Disponible'
        }else{
            return 'Agotado'
        }
    }

    const deleteProduct = () => {
        const URL = `http://products-crud.academlo.tech/products/${product.id}/`
        axios.delete(URL)
          .then(res => getAllProducts())
          .catch(err => console.log(err))
      }

    const updateProduct = () => {
        setDataUpd(product)
    }

    return (
        <article>
            <ul>
                <li><spam>Nombre: </spam>{product.name}</li>
                <li><spam>Categoria: </spam>{product.category}</li>
                <li><spam>Precio: </spam>{product.price}</li>
                <li><spam>Estado en almacen: </spam>{Available(product.isAvailable)}</li>
            </ul>
            <button onClick={deleteProduct}>Eliminar</button>
            <button onClick={updateProduct}>Actualizar</button>
        </article>
    )
}

export default CardProducts