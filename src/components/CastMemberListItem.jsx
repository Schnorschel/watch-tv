import React from 'react'
import { Link } from 'react-router-dom'

const CastMemberListItem = prop => {
  const imageBranch185 = 'https://image.tmdb.org/t/p/w185_and_h278_bestv2'
  return (
    <li className="castMemberLI">
      <Link className="castMemberName" to={'/actor/' + prop.actor.id}>
        <img
          className="castMemberImage"
          src={imageBranch185 + prop.actor.profile_path}
          alt={'Picture of cast member ' + prop.actor.name}
        />
      </Link>
      <p className="character">{prop.actor.character}</p>
      <p className="castMemberName">
        <Link className="castMemberName" to={'/actor/' + prop.actor.id}>
          {prop.actor.name}
        </Link>
      </p>
    </li>
  )
}

export default CastMemberListItem
