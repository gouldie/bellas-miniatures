import { Home } from '../components'
import { fetchEntries } from '../hooks/http'
import '../public/sass/home.scss'
import useSWR from 'swr'

export default () => {
  const { data: galleryImages } = useSWR('galleryImage', fetchEntries)
  const { data: text } = useSWR('text', fetchEntries)
  
  if (!galleryImages || !text) return <p>Loading..</p>

  const homePageText = text.find(t => t.fields.name === 'Home Page Title')

  return <Home projects={galleryImages} text={homePageText && homePageText.fields.text} />
}
