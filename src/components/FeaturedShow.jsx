import React, { useState, useEffect } from 'react'
import axios from 'axios'

const FeaturedShow = props => {
  const imageBranch = 'https://image.tmdb.org/t/p/w185_and_h278_bestv2'
  const [showData, setShowData] = useState({
    credits: {
      cast: [],
    },
  })
  const [featuredShow, setFeaturedShow] = useState()

  // prettier-ignore
  const getFeaturedShowInfo = async () => {
    console.log('Attempting to get: ' + 'https://api.themoviedb.org/3/tv/' + props.showId + '?api_key=5a39bf29dd3b617bf0c511dbf50b9b2d&language=en-US&append_to_response=credits')
    if (typeof props.showId === 'undefined') {
      return
    }
    const resp = await axios.get('https://api.themoviedb.org/3/tv/' + props.showId + '?api_key=5a39bf29dd3b617bf0c511dbf50b9b2d&language=en-US&append_to_response=credits')
    setShowData(resp.data)
    console.log(resp.data)
  }

  useEffect(() => {
    getFeaturedShowInfo()
  }, [props.showId])

  // prettier-ignore
  return (
    showData ? 
    <>
    <p className="featuredShowHeader">{showData.name}</p>
    <section className="featuredShowImageContainer">
      <img className="featuredShowImage" src={imageBranch + showData.poster_path} />
    </section>
    <section className="featuredShowTextContainer">
      <p>{showData.overview}</p>
      <p>Cast: {showData.credits.cast.filter((actor, index) => {
        return index < 5
      }).map((actor, index) => {
        return (index > 0 ? ', ' : '') + actor.name
      })}</p>
    </section>
    </>
    : <p>Loading featured TV Show data...</p>
  )
}

export default FeaturedShow
