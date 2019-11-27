import React, { useState, useEffect } from 'react'
import axios from 'axios'

const FeaturedShow = props => {
  const [showData, setShowData] = useState([])
  const [featuredShow, setFeaturedShow] = useState()

  const getFeaturedShowInfo = async () => {
    const resp = await axios.get(
      'https://api.themoviedb.org/3/tv/' +
        props.showId +
        '?api_key=5a39bf29dd3b617bf0c511dbf50b9b2d&language=en-US&append_to_response=credits'
    )
    setShowData(resp.data.results)
    // setFeaturedShow()
  }

  useEffect(() => {
    getFeaturedShowInfo()
  }, [])

  return (
    <section className="featuredShowContainer">
      <h1></h1>
      {/* <section className="featuredShowImageContainer"> */}
      <img className="featuredShowImage" />
      <p></p>
    </section>
    // </section>
  )
}

export default FeaturedShow
