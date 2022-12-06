import React from 'react'
import { useForm } from 'react-hook-form'

const FromNewCar = ({createNewCars}) => {
    const {register, handleSubmit } = useForm()

    const onSubmit = data =>{
      createNewCars(data)
    }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <div>
            <label htmlFor="brand"><samp>Brand: </samp></label>
            <input id='brand' type="text" {...register('brand')}/>
        </div>
        <div>
            <label htmlFor="color"><samp>Color: </samp></label>
            <input id='color' type="text" {...register('color')}/>
        </div>
        <div>
            <label htmlFor="model"><samp>Model: </samp></label>
            <input id='model' type="text" {...register('model')}/>
        </div>
        <div>
            <label htmlFor="price"><samp>Price: </samp></label>
            <input id='price' type="text" {...register('price')}/>
        </div>
        <div>
            <label htmlFor="year"><samp>Year: </samp></label>
            <input id='year' type="text" {...register('year')}/>
        </div>
        <button>registrar</button>
    </form>
  )
}


export default FromNewCar