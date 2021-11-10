import './index.css'

const Header = () => (
  <div className="inner-header">
    <p className="time">Thu 19 Aug 12.00 AM </p>
    <div className="user-icon-details">
      <p classNames="greet-user">Welcome John</p>
      <img
        src="https://res.cloudinary.com/dydlvwdqp/image/upload/v1636437661/user-icon_icx1n5.png"
        alt="icon"
        className="icon"
      />
    </div>
  </div>
)

export default Header
