import React from 'react'
import { useParams } from 'react-router-dom'

function User1() {
  const params = useParams()
  const userId = params.userId
  return (
    <div>UserDetails {userId}</div>
  )
}

export default User1