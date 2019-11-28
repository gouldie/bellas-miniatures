import { Component } from 'react'
import Post from '../components/post'
import Banner from '../components/banner/banner'
import './styles.css'

const client = require('contentful').createClient({
  space: process.env.SPACE_ID,
  accessToken: process.env.ACCESS_TOKEN
})

class Home extends Component {
  constructor () {
    super()

    this.state = {
      posts: []
    }
  }

  async componentDidMount () {
    const contentTypes = await this.fetchContentTypes()
    const allPosts = await this.fetchEntriesForContentType(contentTypes[0])
    this.setState({ posts: allPosts })
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
    const { posts } = this.state

    return (
      <div>
        <Banner />
        <p>test test</p>
        {posts.length > 0
          ? posts.map(p => (
            <Post
              alt={p.fields.alt}
              date={p.fields.date}
              key={p.fields.title}
              image={p.fields.image}
              title={p.fields.title}
              url={p.fields.url}
            />
          ))
          : null}
      </div>
    )
  }
}

export default Home
