import React, { useState, useEffect } from 'react'
import axios from 'axios'

const ActorPage = props => {
  // Start of url for images in full size
  const imageOriginal = 'https://image.tmdb.org/t/p/original/'
  console.log(props)

  // Place the data returned from the API here.
  const [actorInfo, setActorInfo] = useState([])

  // Construct the API url from the actor ID passed from the call
  const apiUrl =
    'https://api.themoviedb.org/3/person/' +
    props.match.params.actorID +
    '?api_key=5a39bf29dd3b617bf0c511dbf50b9b2d&language=en-US&append_to_response=credits'

  // Function to call the API and populate the returned data
  const getActorInfo = async () => {
    const resp = await axios.get(apiUrl)
    setActorInfo(resp.data)
    console.log(resp)
  }

  // Execute api call function when the page is loaded.
  useEffect(() => {
    getActorInfo()
  }, [])

  return (
    <>
      <header>
        <h1 className="actorName">{actorInfo.name}</h1>
      </header>
      <main>
        {/* <section className="detailTVShowContainer">
          <section className="detailPosterContainer">
            <img
              src={imageOriginal + actorInfo.backdrop_path}
              alt={'Picture of the actor '+actorInfo.name}
            />
          </section>
          <section className="overviewSection">
            <h1 className="overviewH1">Overview</h1>
            <p>{actorInfo.overview}</p>
          </section>
          <section className="castSection">
            <h1 className="castH1">Cast</h1>
            <ul className="charactersUL">
              {actorInfo.credits.cast.map(actor => {
                return <CastMemberListItem key={actor.id} actor={actor} />
              })}
            </ul>
          </section>
        </section> */}
      </main>
    </>
  )
}

export default ActorPage
