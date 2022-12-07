import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'


const FormProduct = ({createProduct, dataUpd, updateProductById, setDataUpd}) => {
  const {register, handleSubmit, reset} = useForm()
  useEffect(()=>{
    reset(dataUpd)
  },[dataUpd])

  const onsubmit = data =>{
    if(dataUpd){
      updateProductById(data)
      setDataUpd(undefined)
    }else{
      createProduct(data)
    }
  
    reset({
      name:'',
      category:'',
      price:'',
      isAvailable:''
    })
  }

  return (
    <form onSubmit={handleSubmit(onsubmit)}>
      <div>
        <label htmlFor="name"> Name: </label>
        <input type="text" id='name' {...register('name')}/>
      </div>
      <div>
        <label htmlFor="category"> Category: </label>
        <input type="text" id='category' {...register('category')}/>
      </div>
      <div>
        <label htmlFor="price"> Price: </label>
        <input type="text" id='price' {...register('price')}/>
      </div>
      <div>
        <label htmlFor="isAvailable"> Available: </label>
        <select {...register("isAvailable")}>
          <option value="">Select...</option>
          <option value={true}>Disponible</option>
          <option value={false}>Agotado</option>
        </select>
      </div>
      <button>Registrar</button>
    </form>
  )
}

export default FormProduct