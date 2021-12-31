import React, { FC } from 'react'
import './UserCard.scss'

type UserCardType = {
  photoUrl: string
  firstName: string
  lastName: string
  gender: string
  email: string
  date: string
  nationality: string
}

const UserCard: FC<UserCardType> = ({
  photoUrl,
  firstName,
  lastName,
  gender,
  email,
  date,
  nationality,
}) => {
  return (
    <div className="userCard">
      <img className="userPhoto" src={photoUrl} />
      <span className="userName">
        {firstName} {lastName}
      </span>
      <span>{gender}</span>
      <span className="userEmail">{email}</span>
      <span>{date.slice(0, 10)}</span>
      <span>{nationality}</span>
    </div>
  )
}

export default UserCard
