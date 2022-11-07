import Footer from './layouts/Footer'
import Header from './components/Header'
import Banner from './components/Banner'
import Container from './layouts/container'

export default function Home() {
  return (
    <div>
      <Header/>
      <Container>
        <Banner/>
      </Container>
      <footer>
        <Footer/>
      </footer>
    </div>
  )
}