import React, { useEffect, useState } from 'react'
import {getData} from './api'
import {Usercard} from './Usercard'

const App = () => {
  const [userdata , setUserdata] = useState(null)
  useEffect(()=>{
        getData().then((user)=> setUserdata(user.results[0]))
  },[])

  const refresh =()=>{
    getData().then((user)=> setUserdata(user.results[0]))

  }
  return (
    <>
   { userdata && <Usercard  data ={userdata}/>}
   <button onClick={refresh}>Refresh User</button>
    </>
    
  )
}

export default App