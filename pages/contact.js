import { useState } from 'react'
import { Loader } from '../components'
import '../public/sass/contact.scss'

export default () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState(null)

  const onChangeName = (e) => {
    setError(null)
    setName(e.target.value)
  }

  const onChangeEmail = (e) => {
    setError(null)
    setEmail(e.target.value)
  }

  const onChangeMessage = (e) => {
    setError(null)
    setMessage(e.target.value)
  }

  const submit = (e) => {
    e.preventDefault()

    if (name.length <= 0 || email.length <= 0 || message.length <= 0) {
      setError(true)
      return
    }

    setSubmitting(true)

    setTimeout(() => {
      setSubmitting(false)
      setSubmitted(true)
    }, 2000)
  }

  return (
    <div className='contact-container'>
      <h2>Contact</h2>
      <p style={{ margin: 0 }}>Have a question or want to work together?</p>
      <hr />

      { submitting && <Loader margin='20px 0' /> }
      { submitted && <p data-testid='success' style={{ color: 'green', margin: '20px 0 30px' }}>Your message has been sent. We'll be in touch!</p> }
      { !submitting && !submitted &&
        <form onSubmit={submit}>
          <input name='name' type='text' placeholder='Name' value={name} onChange={onChangeName} />
          <input name='email' type='email' placeholder='Email' value={email} onChange={onChangeEmail} />
          <textarea name='message' type='text' placeholder='Your message' value={message} onChange={onChangeMessage} ></textarea>

          {error && <p style={{ color: 'red' }}>Please complete all fields.</p>}
          <button id='submit' type='submit'>SUBMIT</button>
        </form> }

      <div className='social-media-icons'>
        <a href='https://twitter.com/?lang=en-gb' target='_blank'><i className="fab fa-twitter fa-2x"></i></a>
        <a href='https://www.linkedin.com/' target=''></a> <i className="fab fa-linkedin fa-2x"></i>
      </div>
    </div>
  )
}

// action="https://formspree.io/meqqpjdj"
