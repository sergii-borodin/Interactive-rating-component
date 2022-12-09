import React, { useState } from 'react'
import sprite from '../../icons/sprite.svg'
// import FormInput from '../FormInput/FormInput'

import './SubmitForm.css'


const SubmitForm = () => {
  const ratingValues = [1, 2, 3, 4, 5];

  const [submitFormIsOpen, setSubmitFormIsOpen] = useState(true);
  const [rating, setRating] = useState(0);
  
  const onSubmitButtonClick = (e) => {
    e.preventDefault();
    setSubmitFormIsOpen(false)
  }

  const onChangeRatingHandler = (e) => {
    setRating(e.target.value);
  }

  return (
    <form className='submit-form'>
      {submitFormIsOpen ? (
        <>
        <div className='submit-form__circle-container'>
        <svg xmlnsXlink="http://www.w3.org/1999/xlink" className="icon" width={15} height={15}>
  <use xlinkHref={`${sprite}#icon-star`}></use></svg>
     </div>
      <h2 className='submit-form__title'>How did we do?</h2>
      <p className='submit-form__text'>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
      <div className='submit-form__rating-container' >
        {ratingValues.map(ratingValue => {
          return <label className='submit-form__circle-container submit-form__circle-container--rating' key={ratingValue} htmlFor={ratingValue}><input className='submit-form__input' key={ratingValue} type="radio" id={ratingValue} name="rating" value={ratingValue} onClick={(e) => onChangeRatingHandler(e)} />{ratingValue}</label>
        }
)}
      </div>
          <button className='submit-form__button' type="submit" onClick={(e) => onSubmitButtonClick(e)}>Submit</button>
          </>
      ) : (
          <>
          <div className='submit-form__image-container'>
        <svg xmlnsXlink="http://www.w3.org/1999/xlink" className="icon" width={200} height={100}>
  <use xlinkHref={`${sprite}#illustration-thank-you`}></use></svg>
            </div>
            <div className='submit-form__result-text'>You selected { rating } out of 5</div>
      <h2 className='submit-form__title'>Thank you!</h2>
      <p className='submit-form__text'>We appreciate you taking your time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>
          </>
        )}
    </form>
  )
}

export default SubmitForm