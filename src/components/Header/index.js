import {Link} from 'react-router-dom'

import Home from '../Home'
import './index.css'

const Header = () => (
  <div className="main">
    <div className="head">
      <nav className="sou">
        <img
          alt="website logo"
          className="img"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        />

        <ul className="home">
          <li className="hm">
            <Link to="/home">Home</Link>
          </li>

          <li className="hm">
            <Link to="/product">Products</Link>
          </li>

          <li className="hm">
            <Link to="/cart">Cart</Link>
          </li>

          <li>
            <button className="button" type="button">
              Logout
            </button>
          </li>
        </ul>
      </nav>
    </div>
    <div className="ccbp">
      <div className="small">
        <img
          alt="website logor"
          className="img"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        />
        <img
          alt="nav logout"
          className="img"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
        />
      </div>
      <div className="cont">
        <img
          alt="nav home"
          className="icon"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png "
        />
        <img
          alt="nav products"
          className="icon"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
        />
        <img
          alt="nav cart"
          className="icon"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
        />
      </div>
    </div>
    <div className="main3">
      <Home />
    </div>
  </div>
)

export default Header
