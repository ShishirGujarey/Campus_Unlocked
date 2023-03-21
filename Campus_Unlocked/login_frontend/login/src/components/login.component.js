import React, { Component } from 'react'

export default class Login extends Component {
  
  constructor(props){
    super(props)
    this.state={
      email:"",
      password:"",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    const {email, password} = this.state;
    console.log(email, password);
    fetch("http://localhost:3000/login_user", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
    .then((res) => res.json())
    .then((data) => {
      console.log(data, "userRegister");
      if (data.status === "email_not_verified") {
        alert("Email is not verified");
      } else if (data.status === "error") {
        alert("Wrong password");
      }else if (data.status === "user_notfound") {
        alert("User not Found");
      }
      else if (data.status === "ok"){
        window.location.href = '/mainpage';
      }
    })
  }
  
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h3>Sign In</h3>

        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            onChange={(e)=>this.setState({email : e.target.value})}
          />
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            onChange={e=>this.setState({password : e.target.value})}
          />
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
        {/* <div className="d-grid">
          <button type="button" className="btn btn-primary" onClick={window.location.assign("/mainpage")}>
            Click
          </button>
        </div> */}
        <p className="forgot-password text-right">
          Not registered <a href="/signup">sign up?</a>
        </p>
      </form>
    )
  }
}