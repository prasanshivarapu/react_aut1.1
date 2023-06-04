import {Component} from 'react'
import './index.css'

class LoginForm extends Component {
  state = {username: '', password: '', msg: ''}

  onsub = () => {
    const {history} = this.props
    history.replace('/')
  }

  submitButton = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'

    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)

    const data = await response.json()
    console.log(response)
    console.log(data)

    if (response.ok === true) {
      this.onsub()
    } else {
      this.setState({msg: data.error_msg})
    }
  }

  userName = event => {
    this.setState({username: event.target.value})
  }

  onPassword = event => {
    this.setState({password: event.target.value})
  }

  render() {
    const {msg, username, password} = this.state

    return (
      <div className="inside">
        <img
          className="pk"
          alt="website login"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
        />
        <div className="inside1">
          <div className="instant">
            <div className="logo">
              <img
                className="log"
                alt="website logo"
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
              />
              <img
                className="login"
                alt="website login"
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
              />
            </div>
          </div>
          <div>
            <form className="formData" onSubmit={this.submitButton}>
              <label className="user" htmlFor="username">
                USERNAME
              </label>
              <input
                type="text"
                className="name"
                placeholder="Username"
                id="username"
                value={username}
                autoComplete="current-username"
                onChange={this.userName}
              />
              <label className="user" htmlFor="password">
                PASSWORD
              </label>
              <input
                className="name"
                type="password"
                value={password}
                id="password"
                autoComplete="current-password"
                placeholder="Password"
                onChange={this.onPassword}
              />

              <button className="sub" type="submit">
                Login
              </button>
              <p className="para">{msg}</p>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default LoginForm
