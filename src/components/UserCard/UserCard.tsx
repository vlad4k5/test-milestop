import React, { FC } from 'react'

type UserCardType = {
  photoUrl: string
  firstName: string
  lastName: string
  gender: string
  email: string
  date: string
}

const UserCard: FC<UserCardType> = ({ photoUrl, firstName, lastName, gender, email, date }) => {
  return (
    <div>
      <img src={photoUrl} />
      <div>
        {firstName} {lastName}
      </div>
      <div>{gender}</div>
      <div>{email}</div>
      <div>{date}</div>
    </div>
  )
}

export default UserCard
