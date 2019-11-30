import React, { useState, useEffect } from 'react'
import axios from 'axios'
import FeaturedShow from '../components/FeaturedShow'
import ShowPreview from '../components/ShowPreview'
import PageSelector from '../components/PageSelector'

// prettier-ignore
const HomePage = () => {
  const imageBranch = 'https://image.tmdb.org/t/p/w500' // w500' //w185_and_h278_bestv2'
  const [showData, setShowData] = useState([])
  const [featuredShowId, setFeaturedShowId] = useState()
  const [currentPageNo, setCurrentPageNo]= useState(1)
  const [totalPages, setTotalPages] = useState()

  // prettier-ignore
  const getShowInfo = async () => {
    const respPageOne = await axios.get('https://api.themoviedb.org/3/tv/top_rated?api_key=5a39bf29dd3b617bf0c511dbf50b9b2d&language=en-US&page=' + currentPageNo)

    const randomPageNo = Math.floor(Math.random() * respPageOne.data.total_pages + 1)

    const resp = await axios.get('https://api.themoviedb.org/3/tv/top_rated?api_key=5a39bf29dd3b617bf0c511dbf50b9b2d&language=en-US&page=' + randomPageNo)
    const tempFeaturedShowIndex = Math.floor(Math.random() * resp.data.results.length)
    setFeaturedShowId(resp.data.results[tempFeaturedShowIndex].id)

    setShowData(respPageOne.data.results)
    setCurrentPageNo(respPageOne.data.page)
    setTotalPages(respPageOne.data.total_pages)

    // console.log('getShowInfo: resp.data: ' + resp.data)
    // const tempFeaturedShowIndex = Math.floor(Math.random() * resp.data.results.length)
    // setFeaturedShowIndex(tempFeaturedShowIndex)
    // if (typeof featuredShowIndex === 'undefined' || tempFeaturedShowIndex == -1) {
    //   console.log('featuredShowIndex not set!')
    //   return
    // } else {
    //   console.log('featuredShowIndex: ' + tempFeaturedShowIndex)
    // }
    // setFeaturedShowId(resp.data.results[tempFeaturedShowIndex].id)
    // setCurrentPageNo(resp.data.page)
    // setTotalPages(resp.data.total_pages)
  }

  const GetNewShowInfo = async () => {
    if (typeof currentPageNo === 'undefined') return
    const resp = await axios.get('https://api.themoviedb.org/3/tv/top_rated?api_key=5a39bf29dd3b617bf0c511dbf50b9b2d&language=en-US&page=' + currentPageNo)
    setShowData(resp.data.results)
    console.log('GetNewShowInfo: resp.data: ' + resp.data)

  }

  useEffect(() => {
      getShowInfo()
  }, [])

  useEffect(() => {
    GetNewShowInfo()

  }, [currentPageNo]);

  // const featuredShowId = showData.filter((show, index) => {
  //   return index === featuredShowIndex
  // })[0].id

  // prettier-ignore
  return (
    <>
      <section className="featuredShowContainer">
        {featuredShowId && <FeaturedShow showId={featuredShowId} /> }
      </section>
      <PageSelector 
        key={currentPageNo}
        thisPage={currentPageNo} 
        allPages={totalPages} 
        handleNewPage={setCurrentPageNo} />
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
      <PageSelector 
        thisPage={currentPageNo} 
        allPages={totalPages} 
        handleNewPage={setCurrentPageNo} />
    </>
  )
}

export default HomePage
