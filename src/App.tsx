import axios from 'axios'
import React, { useState, useEffect } from 'react'
import UserCard from './components/UserCard/UserCard'

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
  useEffect(() => {
    ;(async () => {
      const res = await axios.get(
        'https://randomuser.me/api/?results=15&inc=email,dob,name,picture,nat,gender'
      )
      setUsers(res.data.results)
    })()
  }, [])
  return (
    <div className="App">
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
  )
}

export default App
