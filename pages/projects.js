import { Projects } from '../components'
import { useHttp } from '../hooks/http'
import '../public/sass/projects.scss'

export default () => {
  const [data] = useHttp('project', [])

  return <Projects projects={data} />
}
