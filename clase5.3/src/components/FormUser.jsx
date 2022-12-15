import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { setUserGlobal } from '../store/slices/user.slice'


const FormUser = () => {

    const { register, handleSubmit, reset } = useForm()

    const dispatch = useDispatch()

    const submit = (data) => {
        dispatch(setUserGlobal(data))
        reset({
            firstName: '',
            lastName: '',
            email: '',
            age: '',
            menber: false
        })
    }

    return (
        <form action="" onSubmit={handleSubmit(submit)}>
            <div>
                <label htmlFor="">First Name: </label>
                <input type="text" {...register('firstName')} />
            </div>
            <div>
                <label htmlFor="">Last Name: </label>
                <input type="text" {...register('lastName')} />
            </div>
            <div>
                <label htmlFor="">Email: </label>
                <input type="email" {...register('email')} />
            </div>
            <div>
                <label htmlFor="">Age: </label>
                <input type="number" {...register('age')} />
            </div>
            <div>
                <label htmlFor="">Menber: </label>
                <input type="checkbox" {...register('menber')} />
            </div>
            <button> Submit </button>
        </form>
    )
}

export default FormUser