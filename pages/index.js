import { Home } from '../components'
import { fetchEntries } from '../hooks/http'
import '../public/sass/home.scss'
import useSWR from 'swr'
import { Loader } from '../components'

export default () => {
  const { data: galleryImages } = useSWR('galleryImage', fetchEntries)
  const { data: text } = useSWR('text', fetchEntries)

  const homePageText = text && text.find(t => t.fields.name === 'Home Page Title').fields.text

  return (
    <div class='home-wrapper'>
      {!galleryImages && <div style={{ textAlign: 'center' }}><Loader margin='20px 0' /></div>}
      {galleryImages && <Home projects={galleryImages} text={homePageText} />}
    </div>
  )
}
