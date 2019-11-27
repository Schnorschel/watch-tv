import React from 'react'

const ActorCreditListItem = prop => {
  return (
    <li className="actorCreditLI">
      <p className="castMemberName">{prop.credit.name}</p>
    </li>
  )
}

export default ActorCreditListItem
