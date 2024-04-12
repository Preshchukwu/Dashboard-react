import React, { useContext } from 'react'
import { formContext } from '../UserContext'

const User = () => {
  const {createUser} = useContext(formContext)
  return (
    <div>
      user

      <div>
        <pre>{JSON.stringify(createUser)}</pre>
      </div>
    </div>
  )
}

export default User
