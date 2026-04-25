import { use, useState } from 'react'
import './App.css'

function App() {

  const [fullName, setFullName] = useState({
    firstName: "",
    lastName: "",
  })
  const [displayName, setDisplayName] = useState(false);

  const handleChange = (e) => {
    console.log(e.target)
    const { name, value } = e.target
    setFullName((prev)=>({...prev,[name]:value}))
    console.log(fullName)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (fullName.firstName && fullName.lastName) {
      setDisplayName(true)
    }else{
      console.log("invalid")
      return
    }
  }

  return (
    <>
      <div>
        <h1>Full Name Display</h1><br/>
        <form onSubmit={handleSubmit}>
          <label htmlFor='firstName'>First Name:</label>
          <input type='text' name='firstName' value={fullName.firstName} id='firstName' onChange={handleChange} required/><br/>
          <label htmlFor="lastName">Last Name:</label>
          <input type='text' name='lastName' value={fullName.lastName} id='lastName' onChange={handleChange} required/><br/>
          <button type='submit'>submit</button>
        </form>
        <div>
          {
            displayName && <h2>Full Name: {fullName.firstName} {fullName.lastName}</h2>
          }
        </div>
      </div>
    </>
  )
}

export default App
