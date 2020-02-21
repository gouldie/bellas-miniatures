import { Home } from '../components'
import { useHttp } from '../hooks/http'
import '../public/sass/home.scss'

export default () => {
  const [images] = useHttp('galleryImage', [])
  const [text] = useHttp('text', [])

  const homePageText = text.find(t => t.fields.name === 'Home Page Title')

  return <Home projects={images} text={homePageText && homePageText.fields.text} />
}
