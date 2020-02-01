import { Component } from 'react'
import { withRouter } from 'next/router'
import ImageGallery from 'react-image-gallery'
import '../../public/sass/project.scss'
import 'react-image-gallery/styles/scss/image-gallery.scss'

const client = require('contentful').createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
})

class Project extends Component {
  constructor () {
    super()

    this.state = {
      project: null
    }
  }

  async componentDidMount () {
    const id = this.props.router.query.id

    client.getEntry(id)
      .then(res => {
        console.log('res', res)
        this.setState({ project: res.fields })
      })
      .catch(err => {
        console.log('err', err)
        this.setState({ project: false })
      })
  }

  render () {
    const { project } = this.state

    const images = project && project.images.map(i => ({
      original: i.fields.file.url,
      thumbnail: i.fields.file.url,
      sizes: '100px'
    }))

    return (
      <div className='project-container'>
        {project === null && <p>Loading</p>}
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
}

export default withRouter(Project)
