import { Home } from '../components'
import { useEntries } from '../hooks/http'
import '../public/sass/home.scss'

export default () => {
  const [images] = useEntries('galleryImage', [])
  const [text] = useEntries('text', [])

  const homePageText = text.find(t => t.fields.name === 'Home Page Title')

  return <Home projects={images} text={homePageText && homePageText.fields.text} />
}
