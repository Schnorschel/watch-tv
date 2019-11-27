import React from 'react'
import { Link } from 'react-router-dom'

// prettier-ignore
const ShowPreview = props => {
  return (
    <section className="previewShowContainer">
      <section className="previewShowImageContainer">
        <img className="previewShowImage" 
             src={props.imagePath} 
             alt="" />
      </section>
      <p className="previewShowTitle"><Link to={'/tv/' + props.showId}>{props.name}</Link></p>
    </section>
  )
}
export default ShowPreview
