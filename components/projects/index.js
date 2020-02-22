import { useState, useEffect } from 'react'
import { Project } from '../../components'
import Select, { components } from 'react-select'
import FlipMove from 'react-flip-move'

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

export default ({ projects }) => {
  const [filter, setFilter] = useState({ value: 'name', label: 'Sort by: Name', subLabel: 'Name' })

  useEffect(() => {
    window.addEventListener('resize', resizeImages)
  }, [])

  useEffect(() => {
    resizeImages()
  }, [projects])

  const resizeImages = () => {
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

  const handleChange = filter => {
    setFilter(filter)
  }

  if (filter.value === 'name') {
    projects.sort((a, b) => a.fields.title < b.fields.title ? -1 : 1)
  } else {
    projects.sort((a, b) => new Date(a.sys.createdAt) < new Date(b.sys.createdAt) ? 1 : -1)
  }

  return (
    <div className='projects-wrapper'>
      <div className='projects-container'>
        <div className='select-wrapper'>
          <Select
            instanceId='select-field'
            value={filter}
            onChange={handleChange}
            options={options}
            components={{ Option }}
            isSearchable={false}
          />
        </div>

        <div className='projects'>
          <FlipMove typeName={null}>
            {projects.length > 0
              ? projects.map((p, i) => (
                <Project
                  id={p.sys.id}
                  title={p.fields.title}
                  image={p.fields.images[0].fields.file.url + '?fit=pad'}
                  imageTitle={p.fields.images[0].fields.title}
                  alt={p.fields.images[0].fields.description}
                  key={p.sys.id}
                />
              ))
              : null}
          </FlipMove>

        </div>
      </div>
    </div>
  )
}
