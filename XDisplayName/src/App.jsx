import { use, useState } from 'react'
import './App.css'

function App() {

  const [errors,setErrors]=useState({firstName:"",lastName:""})
  const [fullName, setFullName] = useState({
    firstName: "",
    lastName: "",
  })
  const [displayName, setDisplayName] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target
    setFullName((prev)=>({...prev,[name]:value}))
  }

  const handleSubmit = (e) => {
  console.log("triggered")
    e.preventDefault()
    let newErrors={firstName:"",lastName:""}
    if (!fullName.firstName.trim()) {
      newErrors.firstName="Please fill out this field"
    }
    if(!fullName.lastName.trim()){
      newErrors.lastName="Please fill out this field"
    }
    setErrors(newErrors);
    if(!newErrors.firstName && !newErrors.lastName){
      setDisplayName(fullName.firstName+" "+fullName.lastName)
    }else{
      setDisplayName("")
    }
  }

  return (
    <>
      <div>
        <h1>Full Name Display</h1><br/>
        <form onSubmit={handleSubmit}>
          <label htmlFor='firstName'>First Name:</label>
          <input type='text' name='firstName' value={fullName.firstName} id='firstName' onChange={handleChange}/>
          {errors.firstName && <p style={{color:'red'}}>{errors.firstName}</p>}
          <br/>
          <label htmlFor="lastName">Last Name:</label>
          <input type='text' name='lastName' value={fullName.lastName} id='lastName' onChange={handleChange}/>
          {errors.lastName && <p style={{color:'red'}}>{errors.lastName}</p>}
          <br/>
          <button type='submit'>submit</button>
        </form>
        <div>
          {
            displayName && <h2>Full Name: {displayName}</h2>
          }
        </div>
      </div>
    </>
  )
}

export default App
