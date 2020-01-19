import { Component } from 'react'
import { Blog } from '../components'
import '../public/sass/blog.scss'

const client = require('contentful').createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
})

class BlogContainer extends Component {
  constructor () {
    super()

    this.state = {
      posts: []
    }
  }

  async componentDidMount () {
    const contentType = await client.getContentType('blogPost')
    const posts = await this.fetchEntriesForContentType(contentType)
    this.setState({ posts })
  }

  fetchEntriesForContentType = async (contentType) => {
    const entries = await client.getEntries({
      content_type: contentType.sys.id
    })
    if (entries.items) return entries.items
    console.log(`Error getting Entries for ${contentType.name}.`)
  }

  render () {
    const { posts } = this.state

    return <Blog posts={posts} />
  }
}

export default BlogContainer
