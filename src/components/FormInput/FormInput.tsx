import React from 'react'

const FormInput = (value: number) => {
  return (        
      <label className='submit_form-label' htmlFor={{value}.toString()}><input className='submit_form-input' type="radio" id={{value}.toString()} name="rating" value={{value}.toString()} />{value}</label>
  )
}

export default FormInput