import Link from 'next/link'
import { Component } from 'react'

// Needs to stay a class component otherwise react-flip-move breaks
export default class Project extends Component {
  render () {
    const { title, image, imageTitle, alt, id } = this.props

    return (
      <div className='project-wrapper'>
        <Link href="/project/[id]" as={`/project/${id}`}>
          <div className='project'>
            <img src={image} title={imageTitle} alt={alt} />
          </div>
        </Link>
        <div className='project-info'>
          <p>{title}</p>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <i className="fas fa-eye"></i>
            <span>982</span>
          </div>
        </div>
      </div>
    )
  }
}
