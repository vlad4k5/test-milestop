import axios from 'axios'
import React, { useState, useEffect } from 'react'
import UserCard from './components/UserCard/UserCard'
import './App.scss'

type TUser = {
  picture: {
    large: string
  }
  name: {
    first: string
    last: string
  }
  gender: string
  email: string
  dob: {
    date: string
  }
  nat: string
}

function App() {
  const [users, setUsers] = useState<Array<TUser>>([])
  const [isFetching, setIsFetching] = useState(false)

  useEffect(() => {
    ;(async () => {
      setIsFetching(true)
      const res = await axios.get(
        'https://randomuser.me/api/?results=15&inc=email,dob,name,picture,nat,gender'
      )
      setIsFetching(false)
      setUsers(res.data.results)
    })()
  }, [])

  return (
    <div className="App">
      {!isFetching ? (
        <div className="users">
          {users.map(user => (
            <UserCard
              key={user.email}
              photoUrl={user.picture.large}
              firstName={user.name.first}
              lastName={user.name.last}
              gender={user.gender}
              email={user.email}
              date={user.dob.date}
            />
          ))}
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  )
}

export default App
