import React from 'react'

// prettier-ignore
const ShowPreview = props => {
  return (
    <section className="previewShowContainer">
      <section className="previewShowImageContainer">
        <img className="previewShowImage" 
             src={props.imagePath} 
             alt="" />
      </section>
      <p className="previewShowTitle">{props.name}</p>
    </section>
  )
}
export default ShowPreview
