import Head from 'next/head'

import { useEffect, useState } from 'react'
import { About, Contact, Courses, Feature, Footer, Gallary, Header, Slider, Team, Testimonial } from '@/components'
import { InView } from 'react-intersection-observer';
import getConfig from 'next/config'; 
const { publicRuntimeConfig } = getConfig();

export default function Home() {
  const [showPreloader, updatePreloader] = useState(true);
  const [inView, setInView] = useState('home');

  useEffect(() => {
    setTimeout(() => updatePreloader(false), 1000);
  })

  const checkInView = (tab: string, entry: IntersectionObserverEntry) => {
    setInView(tab);
  }

  return (
    <>
      <Head>
        <title>Science Avenue Academy</title>
        <meta property="og:title" content="Science Avenue Academy" />
        <meta property="og:description" content="Science avenue | Tution classes For 8th -10th , 11th - 12th Science all Main subjects" />
        <meta property="og:url" content="https://kvmodi19.github.io/science-avenue-academy-tution/" />
        <meta property="og:type" content="website" />
        <meta name="description" content="Science Avenue Academy | Tution class 8th ,9th ,10th , 11th- 12th Science all Main subjects Open today until 7:00 PM" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={`${publicRuntimeConfig.staticFolder || ''}/favicon.ico`} />
      </Head>
      {/* <!-- PRE LOADER --> */}
      {showPreloader &&
        <section className="preloader">
          <div className="spinner">
            <span className="spinner-rotate"></span>
          </div>
        </section>
      }

      {/* <!-- MENU --> */}
      <Header inView={inView} onHeaderClick={(view) => setInView(view)} />
      {/* <!-- HOME --> */}
      <InView as="section" id="top" onChange={(inView, entry) => inView && checkInView('home', entry)}>
        <Slider />
      </InView>


      {/* <!-- FEATURE --> */}
      <section id="feature">
        <Feature />
      </section>


      {/* <!-- ABOUT --> */}
      {/* <InView as="section" id="about" trackVisibility={true} delay={100} onChange={(inView, entry) => inView && checkInView('about', entry)}>
        <About />
      </InView> */}


      {/* <!-- TEAM --> */}
      <InView as="section" id="team" onChange={(inView, entry) => inView && checkInView('team', entry)}>
        <Team />
      </InView>


      {/* <!-- Courses --> */}
      {/* <InView as="section" id="courses" onChange={(inView, entry) => inView && checkInView('courses', entry)}>
        <Courses />
      </InView> */}

      <InView as="section" id="gallary" onChange={(inView, entry) => inView && checkInView('gallary', entry)}>
        <Gallary />
      </InView>

      {/* <!-- TESTIMONIAL --> */}
      <InView as="section" id="testimonial" onChange={(inView, entry) => inView && checkInView('testimonial', entry)}>
        <Testimonial />
      </InView>


      {/* <!-- CONTACT --> */}
      <InView as="section" id="contact" onChange={(inView, entry) => inView && checkInView('contact', entry)}>
        <Contact />
      </InView>


      {/* <!-- FOOTER --> */}
      <Footer />
    </>
  )
}
