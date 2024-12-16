import React, { Suspense } from "react"
import './index.css'
// import Me from "./components/me/me"
// import Services from "./components/services/services"
// import Portfolio from "./components/portfolio/portfolio"
// import Contact from "./components/contact/contact"
import LazyLoad from "react-lazyload"
import { lazy } from "react"
const Me =lazy(()=>import("./components/me/me"))
const Services=lazy(()=>import("./components/services/services"))
const Portfolio =lazy(()=>import("./components/portfolio/portfolio"))
const Contact=lazy(()=>import("./components/contact/contact"))

const App = () => {
  return (
    <div className='container'>
      <Suspense fallback={'Loading...'}>
      <LazyLoad height={'100vh'} offset={-100}>
      <section id="me">
        <Me />
      </section>
      </LazyLoad>
      </Suspense>
      <Suspense fallback={'Loading...'}>
      <LazyLoad height={'100vh'} offset={-100}>
      <section id="services">
        <Services />
      </section>
      </LazyLoad>
      </Suspense>
      <Suspense fallback={'Loading...'}>
      <LazyLoad height={'600vh'} offset={-100}>
      {/* <section id="portfolio"> */}
        <Portfolio />
      {/* </section> */}
      </LazyLoad>
      </Suspense>
      <Suspense fallback={'Loading...'}>
      <LazyLoad height={'100vh'} offset={-100}>
      <section id="contact">
        <Contact />
      </section>
      </LazyLoad>
      </Suspense>
    </div>
  )
}

export default App