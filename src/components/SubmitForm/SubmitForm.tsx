import React from 'react'
import './SubmitForm.css'

const SubmitForm = () => {
  return (
    <form className='submit_form'>

     <svg width="17" height="16" xmlns="http://www.w3.org/2000/svg"><path d="m9.067.43 1.99 4.031c.112.228.33.386.58.422l4.45.647a.772.772 0 0 1 .427 1.316l-3.22 3.138a.773.773 0 0 0-.222.683l.76 4.431a.772.772 0 0 1-1.12.813l-3.98-2.092a.773.773 0 0 0-.718 0l-3.98 2.092a.772.772 0 0 1-1.119-.813l.76-4.431a.77.77 0 0 0-.222-.683L.233 6.846A.772.772 0 0 1 .661 5.53l4.449-.647a.772.772 0 0 0 .58-.422L7.68.43a.774.774 0 0 1 1.387 0Z" fill="#FC7614"/></svg>
      <h2 className='submit_form-title'>How did we do?</h2>
      <p className='submit_form-text'>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
      <div className='submit_form-rating-container' >
        <input className='submit_form-input' type="radio" id="1" name="rating" value="1"/>
        <label className='submit_form-label' htmlFor='1'>1</label>

        <input className='submit_form-input' type="radio" id="2" name="rating" value="2"/>
        <label className='submit_form-label' htmlFor="2">2</label>

        <input className='submit_form-input' type="radio" id="3" name="rating" value="3"/>
        <label className='submit_form-label' htmlFor="3">3</label>

        <input className='submit_form-input' type="radio" id="4" name="rating" value="4"/>
        <label className='submit_form-label' htmlFor="4">4</label>

        <input className='submit_form-input' type="radio" id="5" name="rating" value="5"/>
        <label className='submit_form-label' htmlFor="5">5</label>
      </div>
      <button className='submit_form-button' type="submit">Submit</button>
    </form>
  )
}

export default SubmitForm