import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ActorCreditListItem from '../components/ActorCreditListItem'

const ActorPage = props => {
  // Start of url for images in full size
  const imageOriginal = 'https://image.tmdb.org/t/p/original/'
  console.log(props)

  // Place the data returned from the API here.
  const [actorInfo, setActorInfo] = useState({
    tv_credits: {
      cast: [],
      crew: [],
    },
  })

  // Construct the API url from the actor ID passed from the call
  const apiUrl =
    'https://api.themoviedb.org/3/person/' +
    props.match.params.actorID +
    '?api_key=5a39bf29dd3b617bf0c511dbf50b9b2d&language=en-US&append_to_response=tv_credits'

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
        <section className="actorInfoContainer">
          <section className="mainActorPictureContainer">
            <img
              src={imageOriginal + actorInfo.profile_path}
              alt={'Picture of the actor ' + actorInfo.name}
            />
          </section>
          <section className="actorBioSection">
            <h1 className="actorBioH1">Biography</h1>
            <p className="actorBio">{actorInfo.biography}</p>
          </section>
          <section className="actorTVCreditsSection">
            <h1 className="actorTVCreditsH1">TV Credits</h1>
            <ul className="actorTVCreditsUL">
              {actorInfo.tv_credits.cast.map(credit => {
                return (
                  <ActorCreditListItem key={credit.credit_id} credit={credit} />
                )
              })}
            </ul>
          </section>
        </section>
      </main>
    </>
  )
}

export default ActorPage
