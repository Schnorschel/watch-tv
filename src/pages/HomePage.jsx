import React, { useState, useEffect } from 'react'
import axios from 'axios'
import FeaturedShow from '../components/FeaturedShow'
import ShowPreview from '../components/ShowPreview'
import Footer from '../components/Footer'

const HomePage = () => {
  const imageBranch = 'https://image.tmdb.org/t/p/w185_and_h278_bestv2'
  const [showData, setShowData] = useState([])

  // prettier-ignore
  const getShowInfo = async () => {
  const resp = await axios.get('https://api.themoviedb.org/3/tv/top_rated?api_key=5a39bf29dd3b617bf0c511dbf50b9b2d&language=en-US&page=1')
  setShowData(resp.data.results)
  console.log(resp.data.results)
  }

  useEffect(() => {
    getShowInfo()
  }, [])

  // prettier-ignore
  return (
    <>
      {/* <FeaturedShow /> */}
      <section className="previewAllShowsContainer">
        {showData.map(show => {
          return (
            <ShowPreview 
              key={show.id}
              showId={show.id}
              imagePath={imageBranch + show.poster_path}
              name={show.name}
            />
          )
        })}
      </section>
      {/* <Footer /> */}
    </>
  )
}

export default HomePage
