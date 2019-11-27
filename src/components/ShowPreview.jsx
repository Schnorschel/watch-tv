import React from 'react'

const ShowPreview = props => {
  return (
    <section className="previewShowContainer">
      <section className="previewShowImageContainer">
        <img src={props.imagePath} alt="" />
      </section>
      <p className="previewShowTitle">{props.name}</p>
    </section>
  )
}
export default ShowPreview
