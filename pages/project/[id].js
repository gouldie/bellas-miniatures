import { useRouter } from 'next/router'
import ImageGallery from 'react-image-gallery'
import { Loader } from '../../components'
import { useEntry } from '../../hooks/http'
import '../../public/sass/project.scss'
import 'react-image-gallery/styles/scss/image-gallery.scss'

export default () => {
  const router = useRouter()
  const [project] = useEntry(router.query.id, [])

  const images = project && project.images.map(i => ({
    original: i.fields.file.url,
    thumbnail: i.fields.file.url,
    sizes: '100px'
  }))

  return (
    <div className='project-container'>
      {project === null && <Loader margin='30px 0 0' />}
      {project === false && <p>No project found.</p>}
      {project &&
        <div>
          <h1>{project.title}</h1>
          <ImageGallery items={images} />
          <p>{project.description}</p>
        </div>
      }
    </div>
  )
}
