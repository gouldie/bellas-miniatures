import { useState, useEffect } from 'react'
import { Home } from '../components'
import '../public/sass/home.scss'

const client = require('contentful').createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
})

export default () => {
  const [projects, setProjects] = useState([])
  const [text, setText] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const contentTypeGallery = await client.getContentType('galleryImage')
      const contentTypeText = await client.getContentType('text')
      const projects = await fetchEntriesForContentType(contentTypeGallery)
      const text = await fetchEntriesForContentType(contentTypeText)
      const homePageText = text.find(t => t.fields.name === 'Home Page Title')

      setProjects(projects)
      setText(homePageText && homePageText.fields.text)
    }

    fetchData()
  }, [])

  const fetchEntriesForContentType = async (contentType) => {
    const entries = await client.getEntries({
      content_type: contentType.sys.id,
      limit: 12
    })
    if (entries.items) return entries.items
    console.log(`Error getting Entries for ${contentType.name}.`)
  }

  return <Home projects={projects} text={text} />
}
