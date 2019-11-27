import React, { useState, useEffect } from 'react'
import axios from 'axios'

const TVShowPage = props => {
  const [individualShowData, setIndividualShowData] = useState([])
  const apiUrl =
    'https://api.themoviedb.org/3/tv/' +
    props.match.params.showId +
    '?api_key=5a39bf29dd3b617bf0c511dbf50b9b2d&language=en-US&append_to_response=credits'

  console.log('props: ', props.match.params.showId)
  console.log('url: ', apiUrl)
  const getIndividualShowInfo = async () => {
    const resp = await axios.get(apiUrl)
    setIndividualShowData(resp.data.results)
    console.log(resp.data.results)
  }

  useEffect(() => {
    getIndividualShowInfo()
  }, [])

  return (
    <>
      <heading>
        <h1 className="tvShowTitle">There will be a title here.</h1>
      </heading>
      <section className="detailTVShowContainer">
        <section className="detailPosterContainer">
          <img src="some url" alt="TV Show Title Poster" />
        </section>
        <section className="overviewSection">
          <p>
            ALF is an American sitcom television series that aired on NBC from
            September 22, 1986, to March 24, 1990. The title character is Gordon
            Shumway, a sarcastic, friendly extraterrestrial nicknamed ALF (an
            acronym for Alien Life Form), who crash-lands in the garage of the
            suburban middle-class Tanner family.
          </p>
        </section>
        <ul className="charactersUL">
          <li>Alf</li>
          <li>Gordon</li>
          <li>Sally</li>
        </ul>
      </section>
    </>
  )
}

export default TVShowPage
