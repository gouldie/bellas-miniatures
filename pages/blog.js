import { Component } from 'react'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import '../public/sass/blog.scss'

const options = {
  renderNode: {
    'embedded-asset-block': (node) =>
      <img style={{ width: '50%' }} src={`${node.data.target.fields.file.url}`}/>
  }
}

const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC']

const formatDate = (date) => {
  const month = months[date.getMonth()]
  const day = ('0' + date.getDate()).slice(-2)
  const year = date.getFullYear()

  return `${month}, ${day} ${year}`
}

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
    const contentType = await client.getContentType('blogPost')
    const blogPosts = await this.fetchEntriesForContentType(contentType)
    this.setState({ blogPosts })
  }

  fetchEntriesForContentType = async (contentType) => {
    const entries = await client.getEntries({
      content_type: contentType.sys.id
    })
    if (entries.items) return entries.items
    console.log(`Error getting Entries for ${contentType.name}.`)
  }

  render () {
    const { blogPosts } = this.state

    console.log('bp', blogPosts)

    return (
      <div className='blog-container'>
        {
          blogPosts.map((b, i) => (
            <div className='blog-post' key={i}>
              <p className='date'>{formatDate(new Date(b.sys.createdAt))}</p>
              <p className='title'>{b.fields.title}</p>
              {documentToReactComponents(b.fields.description, options)}
            </div>
          ))
        }
      </div>
    )
  }
}

export default Blog
