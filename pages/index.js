import { Component } from 'react'
import { HomeImage } from '../components'
import '../public/sass/core.scss'

const client = require('contentful').createClient({
  space: process.env.SPACE_ID,
  accessToken: process.env.ACCESS_TOKEN
})

class Home extends Component {
  constructor () {
    super()

    this.state = {
      projects: []
    }
  }

  async componentDidMount () {
    const contentTypes = await this.fetchContentTypes()
    const projects = await this.fetchEntriesForContentType(contentTypes[0])
    this.setState({ projects }, () => {

    })
    this.resizeImages()
    window.addEventListener('resize', this.resizeImages)
  }

  resizeImages = () => {
    const projectList = document.getElementsByClassName('project')

    for (let i = 0; i < projectList.length; i++) {
      projectList[i].style.height = projectList[i].offsetWidth * 0.8 + 'px'
    }
  }

  fetchContentTypes = async () => {
    const types = await client.getContentTypes()
    if (types.items) return types.items
    console.log('Error getting Content Types.')
  }

  fetchEntriesForContentType = async (contentType) => {
    const entries = await client.getEntries({
      content_type: contentType.sys.id
    })
    if (entries.items) return entries.items
    console.log(`Error getting Entries for ${contentType.name}.`)
  }

  render () {
    const { projects } = this.state

    return (
      <div>
        <div className='projects'>
          {projects.length > 0
            ? projects.map((p, i) => (
              <HomeImage
                key={i}
                image={p.fields.images[0].fields.file.url}
              />
            ))
            : null}
        </div>
      </div>
    )
  }
}

export default Home
