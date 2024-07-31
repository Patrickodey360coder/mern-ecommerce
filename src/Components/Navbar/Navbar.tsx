import { useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png'
import cart_icon from '../../assets/cart_icon.png'
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [ menu, setMenu] = useState<string>("shop")
  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt="logo" />
        <p>Ecommerce</p>
      </div>

      <ul className='nav-menu'>
        <li onClick={() => {setMenu("shop")}}><Link to='/'>Shop</Link> { menu === "shop" ? <hr /> : <></> }</li>
        <li onClick={() => {setMenu("men")}}><Link to='/men'>Men</Link> { menu === "men" ? <hr /> : <></> }</li>
        <li onClick={() => {setMenu("women")}}><Link to='/women'> Women</Link> { menu === "women" ? <hr /> : <></> }</li>
        <li onClick={() => {setMenu("kids")}}><Link to='/kids'>Kids</Link> { menu === "kids" ? <hr /> : <></> }</li>
      </ul>

      <div className="nav-login-cart">
        <button>Login</button>
        <img src={cart_icon} alt="cart" />
        <div className='nav-cart-count'>0</div>
      </div>
    </div>
  )
}

export default Navbar