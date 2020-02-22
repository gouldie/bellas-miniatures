import { useState, useEffect } from 'react'
import { HomeImage } from '../../components'
import Carousel, { Modal, ModalGateway } from 'react-images'

const FooterCaption = (text) => <span>{text}</span>

export default ({ projects, text }) => {
  const [photoIndex, setPhotoIndex] = useState(0)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    window.addEventListener('resize', resizeImages)
  }, [])

  useEffect(() => {
    resizeImages()
  }, [projects])

  const resizeImages = () => {
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

  const open = (i) => {
    setIsOpen(true)
    setPhotoIndex(i)
  }

  const close = () => {
    setIsOpen(false)
  }

  const images = projects && projects.map(p => {
    return {
      src: p.fields.image.fields.file.url + '?fit=pad'
    }
  })

  return (
    <div className='home-wrapper'>
      <div className='home-container'>
        {text && <p style={{ maxWidth: '800px', margin: '20px auto 40px', fontSize: '20px', padding: '0 5px', textAlign: 'center' }}>{text}</p>}
        <div className='gallery'>
          {projects.length > 0
            ? projects.map((p, i) => (
              <HomeImage
                key={i}
                index={i}
                image={p.fields.image.fields.file.url + '?fit=pad'}
                alt={p.fields.image.fields.description}
                title={p.fields.image.fields.title}
                onClick={open}
              />
            ))
            : null}
        </div>

        <ModalGateway>
          {isOpen && (
            <Modal onClose={close}>
              <Carousel currentIndex={photoIndex} views={images} components={{ FooterCaption: () => FooterCaption(projects[photoIndex].fields.caption) }} />
            </Modal>
          )}
        </ModalGateway>
      </div>
    </div>
  )
}
