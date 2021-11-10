import {useState} from 'react'
// import {Component} from 'react'
import Sidebar from '../Sidebar'
import Header from '../Header'

import './index.css'

function AddUser() {
  // console.log('hari')

  const [user, setUser] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [date, setDate] = useState('')
  const [state, setCountryState] = useState('karnataka')
  const [phoneMsg, setPhoneError] = useState('')
  const [emailMsg, setEmailError] = useState('')

  const onChangeUser = event => {
    setUser(event.target.value)
  }

  const onChangeEmail = event => {
    const emailCheck = event.target.value
    if (emailCheck.endsWith('@gmail.com')) {
      setEmail(emailCheck)
      setEmailError('')
    } else {
      setEmailError('Enter Valid Email id')
      setEmail(emailCheck)
    }
  }

  const onChangePhone = event => {
    const phoneCheck = event.target.value
    if (phoneCheck.length === 10) {
      setPhone(event.target.value)
      setPhoneError('')
    } else {
      setPhoneError('Enter Valid Phone number (10 digits)')
      setPhone(event.target.value)
    }
  }

  const onChangeDate = event => {
    setDate(event.target.value)
  }

  const onChangeState = event => {
    setCountryState(event.target.value)
  }

  const createUserBtn = event => {
    event.preventDefault()
    if (email.endsWith('@gmail.com') && phone.length === 10) {
      // console.log('ok')
      const userData = {
        user,
        phone,
        date,
        state,
        email,
      }
      // console.log(localData)
      const check = localStorage.getItem('UserData')
      console.log(check)
      if (check === null) {
        const data = []
        data.push(userData)
        localStorage.setItem('UserData', JSON.stringify(data))
      } else {
        const data = JSON.parse(localStorage.getItem('UserData'))
        data.push(userData)
        localStorage.setItem('UserData', JSON.stringify(data))
      }

      setUser('')
      setEmail('')
      setPhone('')
      setDate('')
      setCountryState('')
      setPhoneError('')
      setEmailError('')
    } else {
      if (email.endsWith('@gmail.com') === false) {
        setEmailError('Enter Valid Email id')
      }

      if (phone.length !== 10) {
        setPhoneError('Enter Valid Phone number (10 digits)')
      }
    }
  }
  // console.log(date)
  return (
    <div className="page-container">
      <Sidebar active="AddUser" />
      <div className="header">
        <Header />
        <h1 className="add-user-head">Add User</h1>
        <div className="user-form-container">
          <form className="form" onSubmit={createUserBtn}>
            <div className="label-input">
              <label htmlFor="input-user" className="label-name">
                Username
              </label>
              <input
                type="text"
                className="input"
                onChange={onChangeUser}
                id="input-user"
                value={user}
              />
            </div>
            <div className="label-input">
              <label htmlFor="input-user" className="label-name">
                Email
              </label>
              <div>
                <input
                  type="text"
                  className="input"
                  onChange={onChangeEmail}
                  id="input-user"
                  value={email}
                />
                <p className="error-msg">{emailMsg}</p>
              </div>
            </div>

            <div className="label-input">
              <label htmlFor="input-user" className="label-name">
                Phone
              </label>
              <div>
                <input
                  type="text"
                  className="input"
                  onChange={onChangePhone}
                  id="input-user"
                  value={phone}
                />
                <p className="error-msg">{phoneMsg}</p>
              </div>
            </div>

            <div className="label-input">
              <label htmlFor="input-user" className="label-name">
                DOB
              </label>
              <input
                type="date"
                className="input"
                id="input-user"
                value={date}
                onChange={onChangeDate}
              />
            </div>
            <div className="label-input">
              <label htmlFor="input-user" className="label-name">
                State
              </label>
              <select
                type="text"
                className="input"
                id="input-user"
                value={state}
                onChange={onChangeState}
              >
                <option value="Karnataka">Karnataka</option>
                <option value="Andhrapradesh">Andhrapradesh</option>
                <option value="Telangana">Telangana</option>
                <option value="Delhi">Delhi</option>
                <option value="Goa">Goa</option>
              </select>
            </div>
            <button type="submit" className="submitBtn">
              Create User
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AddUser
