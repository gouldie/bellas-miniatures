import { Component } from 'react'
import { withRouter } from 'next/router'
import '../../public/sass/project.scss'

const client = require('contentful').createClient({
  space: process.env.SPACE_ID,
  accessToken: process.env.ACCESS_TOKEN
})

class Project extends Component {
  constructor () {
    super()

    this.state = {
      project: null
    }
  }

  async componentDidMount () {
    const id = this.props.router.query.id

    client.getEntry(id)
      .then(res => {
        console.log('res', res)
        this.setState({ project: res.fields })
      })
      .catch(err => {
        console.log('err', err)
        this.setState({ project: false })
      })
  }

  render () {
    const { project } = this.state

    return (
      <div className='project-container'>
        {project === null && <p>Loading</p>}
        {project === false && <p>No project found.</p>}
        {project &&
          <div>
            <h1>{project.title}</h1>
          </div>
        }
      </div>
    )
  }
}

export default withRouter(Project)
