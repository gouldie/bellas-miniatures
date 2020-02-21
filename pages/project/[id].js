import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import ImageGallery from 'react-image-gallery'
import { Loader } from '../../components'
import '../../public/sass/project.scss'
import 'react-image-gallery/styles/scss/image-gallery.scss'

const client = require('contentful').createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
})

export default () => {
  const [project, setProject] = useState(null)
  const router = useRouter()

  useEffect(() => {
    const id = router.query.id

    client.getEntry(id)
      .then(res => {
        setProject(res.fields)
      })
      .catch(err => {
        console.log('err', err)
        setProject(false)
      })
  }, [])

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
