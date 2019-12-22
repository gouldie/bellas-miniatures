import { Component } from 'react'
import '../public/sass/blog.scss'

const client = require('contentful').createClient({
  space: process.env.SPACE_ID,
  accessToken: process.env.ACCESS_TOKEN
})

class Blog extends Component {
  constructor () {
    super()

    this.state = {
      blogPosts: []
    }
  }

  async componentDidMount () {
    const contentTypes = await this.fetchContentTypes()
    const blogPosts = await this.fetchEntriesForContentType(contentTypes[2])
    this.setState({ blogPosts }, () => {

    })
    this.resizeImages()
    window.addEventListener('resize', this.resizeImages)
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
    return (
      <div className='blog-container'>

      </div>
    )
  }
}

export default Blog
