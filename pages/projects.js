import { Component } from 'react'
import { Project, Banner } from '../components'
import Select, { components } from 'react-select'

const options = [
  { value: 'name', label: 'Sort by: Name', subLabel: 'Name' }
]

const Option = props => {
  return (
    <components.Option {...props}>
      <div>{props.data.subLabel}</div>
    </components.Option>
  )
}

const client = require('contentful').createClient({
  space: process.env.SPACE_ID,
  accessToken: process.env.ACCESS_TOKEN
})

class Home extends Component {
  constructor () {
    super()

    this.state = {
      projects: [],
      filter: { value: 'name', label: 'Sort by: Name' }
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

  handleChange = filter => {
    this.setState({ filter })
    console.log('Option selected:', filter)
  };

  render () {
    const { projects, filter } = this.state

    return (
      <div className='page-wrap'>
        <Banner />
        <div className='select-wrapper'>
          <Select
            instanceId='select-field'
            value={filter}
            onChange={this.handleChange}
            options={options}
            components={{ Option }}
          />
        </div>

        <div className='projects'>
          {projects.length > 0
            ? projects.map((p, i) => (
              <Project
                key={i}
                title={p.fields.title}
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
