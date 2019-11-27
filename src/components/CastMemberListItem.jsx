import React from 'react'

const CastMemberListItem = prop => {
  const imageBranch185 = 'https://image.tmdb.org/t/p/w185_and_h278_bestv2'
  return (
    <li className="castMemberLI">
      <img
        className="castMemberImage"
        src={imageBranch185 + prop.actor.profile_path}
        alt={'Picture of cast member ' + prop.actor.name}
      />
      <p className="castMemberName">{prop.actor.name}</p>
      <p className="character">{prop.actor.character}</p>
    </li>
  )
}

export default CastMemberListItem
