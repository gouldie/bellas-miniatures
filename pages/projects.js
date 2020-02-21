import { Projects } from '../components'
import { useEntries } from '../hooks/http'
import '../public/sass/projects.scss'

export default () => {
  const [data] = useEntries('project', [])

  return <Projects projects={data} />
}
