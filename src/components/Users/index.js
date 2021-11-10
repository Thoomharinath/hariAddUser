import {useEffect, useState} from 'react'
import Sidebar from '../Sidebar'
import Header from '../Header'

import './index.css'

const Users = () => {
  const [cardList, setCard] = useState([])

  const getList = () => {
    const data = JSON.parse(localStorage.getItem('UserData'))
    if (data !== null) {
      setCard(data)
    }
  }

  useEffect(() => getList(), [])

  const getCard = each => {
    const {user, phone, state} = each
    return (
      <li className="card">
        <img
          src="https://res.cloudinary.com/dydlvwdqp/image/upload/v1636437661/user-icon_icx1n5.png"
          alt="icon"
          className="card-user-icon"
        />
        <div className="user-details">
          <p>{user}</p>
          <p className="phone-number">{phone}</p>
          <p>{state}</p>
        </div>
      </li>
    )
  }

  const onSearch = event => {
    const key = event.target.value
    console.log(key)
    const localData = JSON.parse(localStorage.getItem('UserData'))
    const data = localData.filter(each =>
      each.user.toLowerCase().includes(key.toLowerCase()),
    )
    setCard(data)
  }

  const getListView = each => {
    const {user, phone, state} = each
    return (
      <li className="cardList">
        <img
          src="https://res.cloudinary.com/dydlvwdqp/image/upload/v1636437661/user-icon_icx1n5.png"
          alt="icon"
          className="card-user-icon"
        />
        <div className="user-details">
          <p>
            {user}-{phone}-{state}
          </p>
        </div>
      </li>
    )
  }

  return (
    <div className="page-container">
      <Sidebar active="Users" />
      <div className="header">
        <Header />
        <h1 className="add-user-head">Add User</h1>
        <div className="user-cont">
          <div className="search-cont">
            <label htmlFor="search" className="search-name">
              Search
            </label>
            <input
              id="search"
              placeholder="Search user by name..."
              className="search-input"
              type="search"
              onChange={onSearch}
            />
          </div>
          <h1 className="cardview-head">Card View</h1>
          <ul className="card-cont">{cardList.map(each => getCard(each))}</ul>
          <h1 className="cardview-head">List View</h1>
          <ul className="listView">
            {cardList.map(each => getListView(each))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Users
