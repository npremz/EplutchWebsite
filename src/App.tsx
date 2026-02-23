import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Carousels from './components/Carousels'
import Choice from './components/Choice'
import Waitlist from './components/Waitlist'
import Sandbox from './components/Sandbox'
import Footer from './components/Footer'
import Layout from './Layout'

function App() {
  return (
    <>
      <Layout>
        <Header />
        <Hero />
        <About />
        <Carousels />
        <Choice />
        <Waitlist />
        <Sandbox />
      </Layout>
      <Footer />
    </>
  )
}

export default App
