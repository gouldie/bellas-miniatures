import Link from 'next/link'
import React, { Component } from 'react'

// export default ({ id, title, image }) => (
//   <div className='project-wrapper'>
//     <Link href="/project/[id]" as={`/project/${id}`}>
//       <div className='project'>
//         <img src={image} />
//       </div>
//     </Link>
//     <div className='project-info'>
//       <p>{title}</p>
//       <div style={{ display: 'flex', alignItems: 'center' }}>
//         <i className="fas fa-thumbs-up"></i>
//         <span>26</span>
//         <i className="fas fa-eye"></i>
//         <span>982</span>
//       </div>
//     </div>
//   </div>
// )

export default class Project extends Component {
  render () {
    const { title, image, id } = this.props

    return (
      <div className='project-wrapper'>
        <Link href="/project/[id]" as={`/project/${id}`}>
          <div className='project'>
            <img src={image} />
          </div>
        </Link>
        <div className='project-info'>
          <p>{title}</p>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <i className="fas fa-thumbs-up"></i>
            <span>26</span>
            <i className="fas fa-eye"></i>
            <span>982</span>
          </div>
        </div>
      </div>
    )
  }
}
