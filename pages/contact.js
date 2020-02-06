import { Component } from 'react'
import { Loader } from '../components'
import '../public/sass/contact.scss'

class Contact extends Component {
  constructor () {
    super()

    this.state = {
      name: '',
      email: '',
      message: '',
      submitting: false,
      submitted: false,
      error: null
    }
  }

  onChangeName = (e) => {
    this.setState({ error: null, name: e.target.value })
  }

  onChangeEmail = (e) => {
    this.setState({ error: null, email: e.target.value })
  }

  onChangeMessage = (e) => {
    this.setState({ error: null, message: e.target.value })
  }

  submit = (e) => {
    e.preventDefault()

    const { name, email, message } = this.state

    if (name.length <= 0 || email.length <= 0 || message.length <= 0) {
      this.setState({ error: true })
      return
    }

    this.setState({ submitting: true })

    setTimeout(() => {
      this.setState({ submitting: false, submitted: true })
    }, 2000)
  }

  render () {
    const { submitting, submitted, error, name, email, message } = this.state

    return (
      <div className='contact-container'>
        <h2>Contact</h2>
        <p style={{ margin: 0 }}>Have a question or want to work together?</p>
        <hr />

        { submitting && <Loader margin='20px 0' /> }
        { submitted && <p data-testid='success' style={{ color: 'green', margin: '20px 0 30px' }}>Your message has been sent. We'll be in touch!</p> }
        { !submitting && !submitted &&
          <form onSubmit={this.submit}>
            <input name='name' type='text' placeholder='Name' value={name} onChange={this.onChangeName} />
            <input name='email' type='email' placeholder='Email' value={email} onChange={this.onChangeEmail} />
            <textarea name='message' type='text' placeholder='Your message' value={message} onChange={this.onChangeMessage} ></textarea>

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
}

export default Contact
// action="https://formspree.io/meqqpjdj"
