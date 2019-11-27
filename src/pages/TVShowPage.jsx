import React from 'react'

const TVShowPage = props => {
  return (
    <div>
      This is the TV Show Page for TV Show Id: {props.match.params.showId}
    </div>
  )
}

export default TVShowPage
