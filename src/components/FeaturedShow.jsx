import React, { useState, useEffect } from 'react'
import axios from 'axios'

const FeaturedShow = props => {
  const [showData, setShowData] = useState([])
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
        <h1>{showData.name}</h1>
          <img className="featuredShowImage" />
          <p></p> 
        </>
        : 'Loading featured TV Show data...' 
  )
  // </section>
}

export default FeaturedShow
