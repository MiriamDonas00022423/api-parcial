import React, { Component } from 'react';
import axios from 'axios';

export default class CreateUsers extends Component {
  state = {
    name: '',
    age: '',
    email: '',
    errors: {}
  };

  validate = () => {
    const errors = {};
    const { name, age, email } = this.state;

    if (!name) {
      errors.name = 'Name is required';
    } else if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s'-]+$/.test(name)) {
      errors.name = 'Enter a valid name';
    }
    if (!age) {
      errors.age = 'Age is required';
    } else if (isNaN(age) || age <= 0) {
      errors.age = 'Age must be a positive number';
    }
    if (!email) {
      errors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      errors.email = 'Invalid email format';
    }

    return errors;
  };

  onSubmit = async (e) => {
    e.preventDefault();
    const errors = this.validate();
    if (Object.keys(errors).length > 0) {
      this.setState({ errors });
      return;
    }

    const { name, age, email } = this.state;
    const newUser = { name, age, email };

    try {
      await axios.post('http://localhost:4000/api/users', newUser);
      this.setState({ successMessage: 'User registered successfully!', errors: {} });
      //window.location.href = '/users';
    } catch (error) {
      this.setState({ errors: { submit: 'Error submitting the form' } });
      console.error(error);
    }
  };

  onInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
      successMessage: ''
    });
  };

  render() {
    const { errors, successMessage } = this.state;

    return (
      <div className="col-md-6 offset-md-3 mt-5">
        <div className="card card-body bg-light">
          <h3 className="text-center" style={{ textTransform: 'uppercase', color: '#142d4c' }}>Register</h3>
          {successMessage && <div className="alert alert-success text-center">{successMessage}</div>}
          {errors.submit && <div className="alert alert-danger text-center">{errors.submit}</div>}
          <form onSubmit={this.onSubmit}>
            <div className='form-group mb-3'>
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                name="name"
                onChange={this.onInputChange}
                required
              />
              {errors.name && <div className="text-danger">{errors.name}</div>}
            </div>
            <div className='form-group mb-3'>
              <input
                type="text"
                className="form-control"
                placeholder="Age"
                name="age"
                onChange={this.onInputChange}
                value={this.state.age}
                required
              />
              {errors.age && <div className="text-danger">{errors.age}</div>}
            </div>
            <div className='form-group mb-3'>
              <input
                type="text"
                className="form-control"
                placeholder="Email"
                name="email"
                onChange={this.onInputChange}
                value={this.state.email}
                required
              />
              {errors.email && <div className="text-danger">{errors.email}</div>}
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-primary" style={{ backgroundColor: '#9fd3c7', color: '#142d4c', border: 'none' }}>
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}  