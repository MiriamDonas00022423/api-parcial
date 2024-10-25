import React, { Component } from 'react';
import axios from 'axios';

export default class UsersList extends Component {
  
  state = {
    users: [],
    error: null
  };

  async componentDidMount() {
    try {
      const res = await axios.get('http://localhost:4000/api/users');
      this.setState({ users: res.data });
    } catch (error) {
      if (error.response) {
        
        this.setState({ error: error.response.data.message });
      } else {
        this.setState({ error: 'Could not connect to the server.' });
      }
    }
  }
  
  render() {
    const { users, error } = this.state;

    return (
      <div className="container mt-4">
        {error && <div className="alert alert-danger text-center">{error}</div>}
        <div className="row">
          {users.map(user => (
            <div key={user._id} className="col-md-4 p-2">
              <div className="card">
                <h5>{user.name}</h5>
                <p>Age: {user.age}</p>
                <p>Email: {user.email}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

