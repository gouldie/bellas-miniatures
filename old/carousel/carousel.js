import { Component } from 'react'
import Slider from 'react-slick'
// import 'slick-carousel/slick/slick.css'
// import 'slick-carousel/slick/slick-theme.css'
import './carousel.css'

class CustomSlide extends Component {
  componentDidMount () {
    console.log('didmount')
  }

  render () {
    const { index, ...props } = this.props

    return (
      <div className='carousel-slider-wrapper'>
        <div className='carousel-slider'>
          <div className='carousel-text'>
            <h3>Think big,</h3>
            <h3>make <span>small</span></h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div className='carousel-image'>
            <img src="https://images.ctfassets.net/r920pumuvpph/3c7dJyNYYgorkFLkOgQ15j/cfe4ab8ff7c24b4e93f486abd2158a19/flowerhousetopview.jpeg" />
          </div>
        </div>
      </div>
    )
  }
}

const NextArrow = (props) => {
  const { className, style, onClick } = props
  return (
    <i className={`${className} fas fa-arrow-circle-right`} style={{ ...style }} onClick={onClick}></i>
  )
}

class Carousel extends Component {
  render () {
    return (
      <div className='carousel'>
        <Slider
          speed={1000}
          fade={true}
          dots={true}
          nextArrow={<NextArrow />}
        >
          <div className='carousel-slider-wrapper'>
            <div className='carousel-slider'>
              <div className='carousel-text'>
                <h3>Think big,</h3>
                <h3>make <span>small</span></h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
              <div className='carousel-image'>
                <img src="https://images.ctfassets.net/r920pumuvpph/3c7dJyNYYgorkFLkOgQ15j/cfe4ab8ff7c24b4e93f486abd2158a19/flowerhousesmall.jpeg" />
              </div>
            </div>
          </div>
          <div className='carousel-slider-wrapper'>
            <div className='carousel-slider'>
              <div className='carousel-text'>
                <h3>Projects made,</h3>
                <h3>with <span>love</span></h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
              <div className='carousel-image'>
                <img src="https://images.ctfassets.net/r920pumuvpph/3c7dJyNYYgorkFLkOgQ15j/cfe4ab8ff7c24b4e93f486abd2158a19/flowerhousetopview.jpeg" />
              </div>
            </div>
          </div>
          <div className='carousel-slider-wrapper'>
            <div className='carousel-slider'>
              <div className='carousel-text'>
                <h3>Lorem,</h3>
                <h3>madke <span>sdmall</span></h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
              <div className='carousel-image'>
                <img src="https://images.ctfassets.net/r920pumuvpph/3c7dJyNYYgorkFLkOgQ15j/cfe4ab8ff7c24b4e93f486abd2158a19/flowerhousetopview.jpeg" />
              </div>
            </div>
          </div>
        </Slider>
      </div>
    )
  }
}

export default Carousel
