import { Component } from 'react'
import { HomeImage } from '../../components'
import Carousel, { Modal, ModalGateway } from 'react-images'

const FooterCaption = () => {
  return (
    <span>
      Example text
    </span>
  )
}

class Home extends Component {
  constructor () {
    super()

    this.state = {
      photoIndex: 0,
      isOpen: false
    }
  }

  componentDidMount () {
    window.addEventListener('resize', this.resizeImages)
  }

  componentDidUpdate (nextState) {
    if (this.state.projects !== nextState.projects) {
      this.resizeImages()
    }
  }

  resizeImages = () => {
    const projectList = document.getElementsByClassName('gallery-image')

    for (let i = 0; i < projectList.length; i++) {
      projectList[i].style.height = projectList[i].offsetWidth * 0.8 + 'px'

      const image = projectList[i].firstChild
      image.onload = function () {
        const ratio = image.offsetWidth / image.offsetHeight
        const galleryRatio = projectList[i].offsetWidth / projectList[i].offsetHeight

        if (ratio < galleryRatio) {
          image.style.width = '100%'
        } else {
          image.style.height = '100%'
        }
      }
    }
  }

  open = (i) => {
    this.setState({ isOpen: true, photoIndex: i })
  }

  close = () => {
    this.setState({ isOpen: false })
  }

  render () {
    const { isOpen, photoIndex } = this.state
    const { projects } = this.props

    const images = projects && projects.map(p => {
      return {
        src: p.fields.image.fields.file.url + '?fit=pad'
      }
    })

    return (
      <div className='home-wrapper'>
        <div className='home-container'>
          <p style={{ maxWidth: '800px', margin: '40px auto 35px', fontSize: '20px', padding: '0 5px', textAlign: 'center' }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
          <div className='gallery'>
            {projects.length > 0
              ? projects.map((p, i) => (
                <HomeImage
                  key={i}
                  index={i}
                  image={p.fields.image.fields.file.url + '?fit=pad'}
                  onClick={this.open}
                />
              ))
              : null}
          </div>

          <ModalGateway>
            {isOpen && (
              <Modal onClose={this.close}>
                <Carousel currentIndex={photoIndex} views={images} components={{ FooterCaption }} />
              </Modal>
            )}
          </ModalGateway>
        </div>
      </div>
    )
  }
}

export default Home
