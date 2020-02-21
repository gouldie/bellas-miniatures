import React from 'react'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC']

const options = {
  renderNode: {
    'embedded-asset-block': (node) =>
      <img style={{ width: '50%' }} src={`${node.data.target.fields.file.url}?fit=pad`}/>,
    paragraph: (node, children) =>
      <p className='text'>{children}</p>
  }
}

const formatDate = (date) => {
  const month = months[date.getMonth()]
  const day = ('0' + date.getDate()).slice(-2)
  const year = date.getFullYear()

  return `${month}, ${day} ${year}`
}

export default ({ posts }) => (
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
