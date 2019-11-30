import React, { Component } from 'react'
import './banner.css'

const parallax = () => {
  const img = document.getElementById('parallax')
  img.style.top = (window.pageYOffset / 3) * -1 + 'px'
}

class Banner extends Component {
  componentDidMount () {
    window.addEventListener('scroll', parallax)
  }

  render () {
    return (
      <div className='banner'>
        <img id='parallax' src='/banner.jpg' />
      </div>
    )
  }
}

export default Banner
