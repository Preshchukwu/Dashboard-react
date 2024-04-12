import React, { useContext, useState } from 'react'
import { formContext } from '../UserContext'

const Home = () => {
  const {createUser} = useContext(formContext)
  const [userLength, setUserLength] = useState((prev)=>{
    return {
      ...prev, createUser
    }
  })



  return (
    <div>
      user length
      <h2>{userLength.length}</h2>

    </div>
  )
}

export default Home
