import { Component } from 'react'
import Slider from 'react-slick'
// import 'slick-carousel/slick/slick.css'
// import 'slick-carousel/slick/slick-theme.css'
import './carousel.css'

const NextArrow = (props) => {
  const { className, style, onClick } = props
  return (
    <i className={`${className} fas fa-arrow-circle-right`} style={{ ...style }} onClick={onClick}></i>
  )
}

class Carousel extends Component {
  render () {
    return (
      <div className='carousel' style={{ padding: '40px' }}>
        <Slider nextArrow={<NextArrow />}>
          <div className='carousel-slider'>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <div>
                <p>Projects made</p>
                <p>with <span>love</span></p>
              </div>
              <img style={{ width: '400px' }} src="https://images.ctfassets.net/r920pumuvpph/3c7dJyNYYgorkFLkOgQ15j/cfe4ab8ff7c24b4e93f486abd2158a19/flowerhousetopview.jpeg" />
            </div>
          </div>
        </Slider>
      </div>
    )
  }
}

export default Carousel
