import React from 'react'
import { useSearchParams } from 'react-router-dom'

function User() {
 const [searchParams,setSearchParams] =  useSearchParams()
  const activeuser = searchParams.get('filter') === 'active'
  return (
    <>
    <h2>User1</h2>
    <h2>User2</h2>
    <h2>User3</h2>
    <button onClick={()=>setSearchParams({filter:'active'})}>Active</button>
    <button onClick={()=>setSearchParams({})}>Reset</button>
    {
      activeuser ? <h2>showing active user</h2> :<h2>all users</h2>
    }

    </>

  )
}

export default User