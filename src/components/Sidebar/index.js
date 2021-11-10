import {Link} from 'react-router-dom'
import Popup from 'reactjs-popup'
import {IoMdClose} from 'react-icons/io'
import {FiMenu} from 'react-icons/fi'
import 'reactjs-popup/dist/index.css'

import './index.css'

const Sidebar = props => {
  const {active} = props
  // console.log(active)
  const activeUser = active === 'Users' ? 'menu-link-active' : 'menu-link'
  const activeWeather = active === 'Weather' ? 'menu-link-active' : 'menu-link'
  const activeAdd = active === 'AddUser' ? 'menu-link-active' : 'menu-link'
  return (
    <>
      <div className="sidebar">
        <img
          src="https://res.cloudinary.com/dydlvwdqp/image/upload/v1636389014/Logo_eysaev.png"
          className="company-logo"
          alt="logo"
        />
        <hr className="line" />
        <ul className="menu-list">
          <Link to="/" className="link">
            <li className={activeAdd}>
              <img
                src="https://res.cloudinary.com/dydlvwdqp/image/upload/v1636388794/add-user_cgmsfj.png"
                className="user-icon"
                alt="userIcon"
              />
              <p className="menu-names">Add User</p>
            </li>
          </Link>
          <Link to="/Users" className="link">
            <li className={activeUser}>
              <img
                src="https://res.cloudinary.com/dydlvwdqp/image/upload/v1636388794/add-user_cgmsfj.png"
                className="user-icon"
                alt="userIcon"
              />
              <p className="menu-names">Users</p>
            </li>
          </Link>
          <Link to="/Weather" className="link">
            <li className={activeWeather}>
              <img
                src="https://res.cloudinary.com/dydlvwdqp/image/upload/v1636388794/add-user_cgmsfj.png"
                className="user-icon"
                alt="userIcon"
              />
              <p className="menu-names">Weather</p>
            </li>
          </Link>
        </ul>
      </div>
      <div className="popup-content">
        <img
          src="https://res.cloudinary.com/dydlvwdqp/image/upload/v1636389014/Logo_eysaev.png"
          className="company-logo"
          alt="logo"
        />
        <Popup modal trigger={<FiMenu className="menu-icon" size={60} />}>
          {close => (
            <>
              <button
                type="button"
                data-testid="closeButton"
                onClick={() => close()}
              >
                <IoMdClose size={20} color="#231f20" />
              </button>
              <div className="sidebar-popup">
                <ul className="menu-list">
                  <Link to="/" className="link">
                    <li className={activeAdd}>
                      <p className="menu-names">Add User</p>
                    </li>
                  </Link>
                  <Link to="/Users" className="link">
                    <li className={activeUser}>
                      <p className="menu-names">Users</p>
                    </li>
                  </Link>
                  <Link to="/Weather" className="link">
                    <li className={activeWeather}>
                      <p className="menu-names">Weather</p>
                    </li>
                  </Link>
                </ul>
              </div>
            </>
          )}
        </Popup>
      </div>
    </>
  )
}

export default Sidebar
