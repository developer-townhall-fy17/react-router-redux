import React from 'react'
import { Link } from 'react-router'

export default props => (
  <div className="app">
    <header className="primary-header" />
    <aside className="primary-aside">
      <ul>
        <li><Link to="/" activeClassName="active">Home</Link></li>
        <li><Link to="/widgets" activeClassName="active">Widgets</Link></li>
        <li><Link to="/users" activeClassName="active">Users</Link></li>
      </ul>
    </aside>
    <main>
      {props.children}
    </main>
  </div>
)
