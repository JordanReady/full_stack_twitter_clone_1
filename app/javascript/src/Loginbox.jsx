import React, { Component } from 'react'

class Loginbox extends Component{
  constructor() {
    super()
    this.setState = {
      username: '',
      password: ''
    }
  }

  handleOnChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
    console.log('change')
  }

  handleSubmit = (e) => {
    e.preventDefault()
    
    let user = {
      username: this.state.name,
      password: this.state.password
    }

    fetch('http://localhost:3000/logincd ')
  }

  render() {
    return (
      <div className='card p-2 mb-2 border rounded border-primary shadow'>
        <div className='log-in-title card-title'><h4>Login Here</h4></div>
        <form>
          <div className="form-group">
              <input type="text" name='username' value={username} onChange={this.handleOnChange} className="form-control username mb-2 border border-primary" placeholder="Username"/>
          </div>
          <div className="form-group col-xs-8">
              <input type="password" name='password' value={this.state.password} onChange={this.handleOnChange} className="form-control password my-2 border border-primary" placeholder="Password"/>
          </div>
          <button type='submit' onSubmit={this.handleSubmit} className="btn btn-default btn-primary col-xs-3 float-right">Log in</button>
        </form>
      </div>
    )
  }
}

export default Loginbox