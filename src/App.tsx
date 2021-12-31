import axios from 'axios'
import React, { useState, useEffect } from 'react'
import UserCard from './components/UserCard/UserCard'
import './App.scss'
import Filters from './components/Filters/Filters'

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

  const getNewUsers = async (gender: string, nationality: Array<string>) => {
    setIsFetching(true)
    const res = await axios.get(
      `https://randomuser.me/api/?results=15&inc=email,dob,name,picture,nat,gender${
        gender ? `&gender=${gender}` : ''
      }${nationality.length !== 0 ? `&nat=${nationality.join(',')}` : ''}`
    )
    setIsFetching(false)
    setUsers(res.data.results)
  }

  return (
    <div className="App">
      <Filters getNewUsers={getNewUsers} />
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
              nationality={user.nat}
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
