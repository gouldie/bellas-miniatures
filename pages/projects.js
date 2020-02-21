import { useState, useEffect } from 'react'
import { Projects } from '../components'
import '../public/sass/projects.scss'

const client = require('contentful').createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
})

export default () => {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const contentType = await client.getContentType('project')
      const projects = await fetchEntriesForContentType(contentType)
      setProjects(projects)
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

  return <Projects projects={projects} />
}
