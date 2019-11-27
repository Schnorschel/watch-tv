import React, { useState, useEffect } from 'react'
import axios from 'axios'
import CastMemberListItem from '../components/CastMemberListItem'

const TVShowPage = props => {
  const imageOriginal = 'https://image.tmdb.org/t/p/original/'
  const [showData, setShowData] = useState({
    credits: {
      cast: [],
      crew: [],
    },
  })
  const apiUrl =
    'https://api.themoviedb.org/3/tv/' +
    props.match.params.showId +
    '?api_key=5a39bf29dd3b617bf0c511dbf50b9b2d&language=en-US&append_to_response=credits,images'

  const getShowInfo = async () => {
    const resp = await axios.get(apiUrl)
    setShowData(resp.data)
  }

  useEffect(() => {
    getShowInfo()
  }, [])

  return (
    <>
      <header>
        <h1 className="tvShowTitle">{showData.name}</h1>
      </header>
      <main>
        <section className="detailTVShowContainer">
          <section className="detailPosterContainer">
            <img
              src={imageOriginal + showData.backdrop_path}
              alt={showData.name + 'TV Show Title Poster: '}
            />
          </section>
          <section className="overviewSection">
            <h1 className="overviewH1">Overview</h1>
            <p>{showData.overview}</p>
          </section>
          <section className="castSection">
            <h1 className="castH1">Cast</h1>
            <ul className="charactersUL">
              {showData.credits.cast.map(actor => {
                return <CastMemberListItem key={actor.id} actor={actor} />
              })}
            </ul>
          </section>
        </section>
      </main>
    </>
  )
}

export default TVShowPage
