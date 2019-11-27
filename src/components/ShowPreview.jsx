import React, { useState, useEffect } from 'react'
import axios from 'axios'

const ShowPreview = () => {
  const [showData, setShowData] = useState([])

  // prettier-ignore
  const getShowInfo = async () => {
  const resp = await axios.get('https://api.themoviedb.org/3/tv/top_rated?api_key=5a39bf29dd3b617bf0c511dbf50b9b2d&language=en-US&page=1')
  setShowData(resp.data.results)
  }

  useEffect(() => {
    getShowInfo()
  }, [])

  return (
    <section className="previewShowsContainer">
      {showData.map(
        <section className="previewShowContainer">
          <section className="previewShowImageContainer">
            <img src="" />
          </section>
          <p className="previewShowTitle"></p>
        </section>
      )}
    </section>
  )
}
export default ShowPreview
