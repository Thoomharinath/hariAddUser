// import {BrowserRouter, Route, Switch} from 'react-router-dom'
// import React from 'react'

import {Route, Routes} from 'react-router-dom'
import AddUser from './components/AddUser'
import Users from './components/Users'
import Weather from './components/Weather'

import './App.css'

const App = () => (
  <Routes>
    <Route path="/" element={<AddUser />} />
    <Route path="/users" element={<Users />} />
    <Route path="/weather" element={<Weather />} />
  </Routes>
)

export default App
