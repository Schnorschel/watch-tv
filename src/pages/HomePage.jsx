import React from 'react'
import FeaturedShow from '../components/FeaturedShow'
import ShowsOverview from '../components/ShowsOverview'

const HomePage = () => {
  return (
    <>
      <FeaturedShow />
      <ShowPreview />
      <Footer />
      <section className="footer"></section>
    </>
  )
}

export default HomePage
