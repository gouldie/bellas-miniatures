import { Component } from 'react'
import { Home } from '../components'
import '../public/sass/home.scss'

const client = require('contentful').createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
})

class HomeContainer extends Component {
  constructor () {
    super()

    this.state = {
      projects: [],
      text: null
    }
  }

  async componentDidMount () {
    const contentTypeGallery = await client.getContentType('galleryImage')
    const contentTypeText = await client.getContentType('text')
    const projects = await this.fetchEntriesForContentType(contentTypeGallery)
    const text = await this.fetchEntriesForContentType(contentTypeText)
    const homePageText = text.find(t => t.fields.name === 'Home Page Title')

    this.setState({ projects, text: homePageText && homePageText.fields.text })
  }

  fetchEntriesForContentType = async (contentType) => {
    const entries = await client.getEntries({
      content_type: contentType.sys.id,
      limit: 12
    })
    if (entries.items) return entries.items
    console.log(`Error getting Entries for ${contentType.name}.`)
  }

  render () {
    const { projects, text } = this.state

    return <Home projects={projects} text={text} />
  }
}

export default HomeContainer
