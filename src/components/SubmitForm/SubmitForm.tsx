import React from 'react'
import sprite from '../../icons/sprite.svg'
// import FormInput from '../FormInput/FormInput'

import './SubmitForm.css'


const SubmitForm = () => {
      const ratingValues = [1, 2, 3, 4, 5];

  return (
    <form className='submit_form'>

      <div className='submit_form-circle-container'>
        <svg xmlnsXlink="http://www.w3.org/1999/xlink" className="icon" width={15} height={15}>
  <use xlinkHref={`${sprite}#icon-star`}></use></svg>
     </div>
      <h2 className='submit_form-title'>How did we do?</h2>
      <p className='submit_form-text'>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
      <div className='submit_form-rating-container' >
        {ratingValues.map(ratingValue => {
          return <label className='submit_form-circle-container' htmlFor={{ratingValue}.toString()}><input className='submit_form-input' type="radio" id={{ratingValue}.toString()} name="rating" value={{ratingValue}.toString()} />{ratingValue}</label>
        }
)}
      </div>
      <button className='submit_form-button' type="submit">Submit</button>
    </form>
  )
}

export default SubmitForm