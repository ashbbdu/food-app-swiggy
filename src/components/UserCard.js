import React from 'react'

const UserCard = ({name}) => {
  return (
    <div className='user-card'>
    <h2>Name : {name} </h2>
    <h3>Location : </h3>
    <h4>Contact : </h4>
  </div>
  )
}

export default UserCard