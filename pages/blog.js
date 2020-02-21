import { Blog } from '../components'
import { useEntries } from '../hooks/http'
import '../public/sass/blog.scss'

export default () => {
  const [data] = useEntries('blogPost', [])

  return <Blog posts={data} />
}
