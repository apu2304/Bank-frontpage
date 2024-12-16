import './App.css'
import styles from './style'
import {Navbar, Billing, Business, CardDeal, CTA, Client,
  Hero, Footer, Testimonial, Stats} from './components/Index'

function App() {
  

  return (
    <div className='bg-primary w-full'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar/>
          </div>
      </div>
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}> 
           <Hero/>
        </div>
      </div>
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}> 
           <Stats/>
           <Business/>
           <Billing/>
           <CardDeal/> 
           <Testimonial/> 
           <Client/> 
           <CTA/> 
           <Footer/>
        </div>
      </div>
    </div>
  )
}

export default App
