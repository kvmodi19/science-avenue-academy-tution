import Head from 'next/head'

import { useEffect, useState } from 'react'
import { About, Contact, Courses, Feature, Footer, Header, Slider, Team, Testimonial } from '@/components'
import { InView } from 'react-intersection-observer';

export default function Home() {
  const [showPreloader, updatePreloader] = useState(true);
  const [inView, setInView] = useState('home');

  useEffect(() => {
    setTimeout(() => updatePreloader(false), 1000);
  })

  const checkInView = (tab: string, entry: IntersectionObserverEntry) => {
    console.log(tab, entry.intersectionRect.top)
    if (entry.intersectionRect.top < 150) {
      setInView(tab);
    }
  }

  return (
    <>
      <Head>
        <title>Science Avenue Academy</title>
        <meta name="description" content="Science Avenue Academy | Tution class 8th ,9th ,10th , 11th- 12th Science all Main subjects Open today until 7:00 PM" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
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
