import { Component } from 'react'
import '../public/sass/contact.scss'

class Contact extends Component {
  constructor () {
    super()

    this.state = {

    }
  }

  render () {
    return (
      <div className='contact-container'>
        <h2>Contact</h2>
        <p style={{ margin: 0 }}>Have a question or want to work together?</p>
        <hr />

        <form method="POST" onsubmit="">
          <input name='name' type='text' placeholder='Name' />
          <input name='email' type='email' placeholder='Email' />
          <textarea name='message' type='text' placeholder='Your message'></textarea>
          <p id='sent'>Your message has been sent.</p>
          <p id='incomplete'>Please complete all fields.</p>
          <p id='error'>Failed to send message. Please try again.</p>
          <button id='submit' type='submit'>SUBMIT</button>
          <img id='loader' src='public/imgs/loader.svg' />
        </form>

        {/* <img src="public/imgs/linkedin.svg" alt="linkedin icon" onClick='window.open("https://www.linkedin.com/in/matthew-gould/")'/> */}
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
