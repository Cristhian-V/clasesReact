import React from 'react'


const CardUser = ({user}) => {
  return (
    <div>
            <img src={user.picture.medium} alt="photo user" />
            <ul>
              <li><b> Name: </b>{user.name.title} {user.name.first} {user.name.last} </li>
              <li><b> Email: </b>{user.email}</li>
              <li><b> Gender: </b>{user.gender}</li>
              <li><b> Phone: </b>{user.phone}</li>
            </ul>
    </div>
  )
}

export default CardUser