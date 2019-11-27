import React from 'react'
import { Link } from 'react-router-dom'

// prettier-ignore
const ShowPreview = props => {
  return (
    <section className="previewShowContainer">
      <section className="previewShowImageContainer">
        <Link to={'/tv/' + props.showId}>
          <img className="previewShowImage" 
               src={props.imagePath} 
               alt="" />
        </Link>
      </section>
      <p className="previewShowTitle"><Link to={'/tv/' + props.showId}>{props.name}</Link></p>
    </section>
  )
}
export default ShowPreview
