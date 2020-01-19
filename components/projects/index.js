import { Component } from 'react'
import { Project } from '../../components'
import Select, { components } from 'react-select'

const options = [
  { value: 'name', label: 'Sort by: Name', subLabel: 'Name' },
  { value: 'newest', label: 'Sort by: Newest', subLabel: 'Newest' }
]

const Option = props => {
  return (
    <components.Option {...props}>
      <div>{props.data.subLabel}</div>
    </components.Option>
  )
}

class Projects extends Component {
  constructor () {
    super()

    this.state = {
      filter: { value: 'name', label: 'Sort by: Name', subLabel: 'Name' }
    }
  }

  componentDidMount () {
    window.addEventListener('resize', this.resizeImages)
  }

  componentDidUpdate (nextState) {
    if (this.state.projects !== nextState.projects) {
      this.resizeImages()
    }
  }

  resizeImages = () => {
    const projectList = document.getElementsByClassName('project')

    for (let i = 0; i < projectList.length; i++) {
      projectList[i].style.height = projectList[i].offsetWidth * 0.8 + 'px'

      const image = projectList[i].firstChild
      image.onload = function () {
        const ratio = image.offsetWidth / image.offsetHeight
        const galleryRatio = projectList[i].offsetWidth / projectList[i].offsetHeight

        if (ratio < galleryRatio) {
          image.style.width = '100%'
        } else {
          image.style.height = '100%'
        }
      }
    }
  }

  handleChange = filter => {
    this.setState({ filter })
    console.log('Option selected:', filter)
  };

  render () {
    const { filter } = this.state
    const { projects } = this.props

    return (
      <div className='projects-container'>
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
                id={p.sys.id}
                title={p.fields.title}
                image={p.fields.images[0].fields.file.url + '?fit=pad'}
              />
            ))
            : null}
        </div>
      </div>
    )
  }
}

export default Projects
