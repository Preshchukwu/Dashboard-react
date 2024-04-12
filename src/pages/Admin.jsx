import React, { useContext, useState } from 'react'
import { formContext } from '../UserContext'

const Admin = () => {
  
  const {createUser, updateUser} = useContext(formContext)

  // const [createUser, setCreateUser] = useState({
  //   name: ``,
  //   email: ``,
  //   imgUrl: ``
  // })

  const {name, email, imgUrl} = createUser
  const handleChange = (e) => {
    const {name, value, files} = e.target
    updateUser((prevState)=> ({
      ...prevState, 
      [name]: name === `imgUrl` ? URL.createObjectURL(files[0]): value
    }))
  }




  const handleForm = (e)=>{
    e.preventDefault()
    console.log(createUser);
  }


  return (
    <div>
      <form onSubmit={handleForm}>

        <input type="text" name="name" id="name" placeholder='Enter Name' value={createUser.name} onChange={handleChange}/>
        <input type="email" name="email" id="email" placeholder='Enter Enmail' value={createUser.email} onChange={handleChange} />
        <input type="file" name="imgUrl" onChange={handleChange}/>
        {imgUrl && <img style={{width:`150px`, height: `150px`}} src={imgUrl}/> }

        <button type='submit'>Create user</button>
      </form>
    </div>
  )
}

export default Admin
