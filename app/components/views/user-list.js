import React from 'react'
import { Link } from 'react-router'

export default props => (
  <div className="data-list">

    {props.users.map(user => (
      <div key={user.id} className="data-list-item">
        <div className="details">
          <Link to={`/users/${user.id}`}>{user.name}</Link>
        </div>
        <div className="controls">
          <button onClick={() => props.deleteUser(user.id)} className="delete">Delete</button>
        </div>
      </div>
    ))}

  </div>
)
