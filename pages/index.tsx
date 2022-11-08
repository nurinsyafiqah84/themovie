import Footer from './layouts/Footer'
import Header from './components/Header'
import Banner from './components/Banner'
import Container from './layouts/container'
import Section from './layouts/Section'

export default function Home() {
  const handleToggledValue = (selectedValue) =>{
    console.log(selectedValue)
  }
  return (
    <div>
      <Header/>
      <Container>
        <Banner/>
        {/*another contoh example props
        <Section props="What's popular"/> */}
        <Section title="What's popular" items={["Streaming", "On TV", "For Rent", "In Theatres"]} onToggle={handleToggledValue}></Section>
      </Container>
      <footer>
        <Footer/>
      </footer>
    </div>
  )
}