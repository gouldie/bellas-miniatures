import { Home } from '../components'
import { fetchEntries } from '../hooks/http'
import '../public/sass/home.scss'
import useSWR from 'swr'
import { Loader } from '../components'

export default ({ homePageText }) => {
  const { data: galleryImages } = useSWR('galleryImage', fetchEntries)
  // const { data: text } = useSWR('text', fetchEntries)

  // const homePageText = text && text.find(t => t.fields.name === 'Home Page Title').fields.text

  return (
    <div class='home-wrapper'>
      {!galleryImages && <div style={{ textAlign: 'center' }}><Loader margin='20px 0' /></div>}
      {galleryImages && <Home projects={galleryImages} text={homePageText} />}
    </div>
  )
}

// This function gets called at build time
export async function getStaticProps() {
  // Call an external API endpoint to get posts
  const text = await fetchEntries('text')
  const homePageText = text.find(t => t.fields.name === 'Home Page Title').fields.text
  // const posts = await res.json()

  // console.log('res', res)

  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      homePageText,
    },
    revalidate: 1
  }
}