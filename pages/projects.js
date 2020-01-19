import { Component } from 'react'
import { Projects } from '../components'
import '../public/sass/projects.scss'

const client = require('contentful').createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
})

class Home extends Component {
  constructor () {
    super()

    this.state = {
      projects: []
    }
  }

  async componentDidMount () {
    const contentType = await client.getContentType('project')
    const projects = await this.fetchEntriesForContentType(contentType)
    this.setState({ projects })
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

    return <Projects projects={projects} />
  }
}

export default Home
