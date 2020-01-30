import { Component } from 'react'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

const options = {
  renderNode: {
    'embedded-asset-block': (node) =>
      <img style={{ width: '50%' }} src={`${node.data.target.fields.file.url}?fit=pad`}/>,
    paragraph: (node, children) =>
      <p className='text'>{children}</p>
  }
}

const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC']

const formatDate = (date) => {
  const month = months[date.getMonth()]
  const day = ('0' + date.getDate()).slice(-2)
  const year = date.getFullYear()

  return `${month}, ${day} ${year}`
}

class Blog extends Component {
  render () {
    const { posts } = this.props

    return (
      <div className='blog-container'>
        {
          posts.map((b, i) => (
            <div className='blog-post' key={i}>
              <p className='date'>{formatDate(new Date(b.sys.createdAt))}</p>
              <p className='title'>{b.fields.title}</p>
              {documentToReactComponents(b.fields.description, options)}
            </div>
          ))
        }
      </div>
    )
  }
}

export default Blog
