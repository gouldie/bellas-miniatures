import { useState, useEffect } from 'react'
import { Blog } from '../components'
import '../public/sass/blog.scss'

const client = require('contentful').createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
})

export default () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const contentType = await client.getContentType('blogPost')
      const posts = await fetchEntriesForContentType(contentType)
      setPosts(posts)
    }

    fetchData()
  }, [])

  const fetchEntriesForContentType = async (contentType) => {
    const entries = await client.getEntries({
      content_type: contentType.sys.id
    })
    if (entries.items) return entries.items
    console.log(`Error getting Entries for ${contentType.name}.`)
  }

  return <Blog posts={posts} />
}
