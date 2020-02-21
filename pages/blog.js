import { Blog } from '../components'
import { useHttp } from '../hooks/http'
import '../public/sass/blog.scss'

export default () => {
  const [data] = useHttp('blogPost', [])

  return <Blog posts={data} />
}
