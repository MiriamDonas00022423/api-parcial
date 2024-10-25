import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Navegate extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#9fd3c7' }}>
        <div className="container">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="nav nav-tabs ms-auto">
              <li className="nav-item">
                <Link className="nav-link active" to="/" style={{ backgroundColor: '#142d4c', color: '#fff' }}>Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/user" style={{ backgroundColor: '#142d4c', color: '#fff' }}>Users</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
