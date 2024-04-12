import React, { createContext } from 'react'
import { useState } from 'react'

export const formContext = createContext()

const UserContext = ({children}) => {
    const [createUser, setCreateUser] = useState({
        name: ``,
        email: ``,
        imgUrl: ``
      })

    
    const updateUser = (data) =>[
        setCreateUser(data)
    ]
  return (
    <formContext.Provider value={{createUser, updateUser}}>
        {children}
    </formContext.Provider>
  )
}

export default UserContext
