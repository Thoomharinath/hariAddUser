import {useState, useEffect} from 'react'
import Sidebar from '../Sidebar'
import Header from '../Header'
import './index.css'

const Weather = () => {
  const [weather, setWeather] = useState('')
  const [state, setCountryState] = useState('karnataka')

  const getWeather = async changeState => {
    const currentState = changeState === undefined ? state : changeState

    const url = `https://weatherapi-com.p.rapidapi.com/forecast.json?q=${currentState}&days=3`
    console.log(state)

    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com',
        'x-rapidapi-key': '980f33a401mshfd847444c42ff4ep1243dcjsnffe407f9fae5',
      },
    }

    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      const Data = {
        humidity: data.current.humidity,
        pressure: data.current.pressure_mb,
        temperature: data.current.temp_c,
      }
      console.log(Data, changeState)
      setWeather(Data)
    }
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => getWeather(), [])

  const changeState = event => {
    setCountryState(event.target.value)
    getWeather(event.target.value)
  }

  return (
    <div className="page-container">
      <Sidebar active="Weather" />
      <div className="header">
        <Header />
        <h1 className="add-user-head">Weather</h1>
        <div className="weather-container">
          <h1 className="state-name">Select State</h1>
          <select
            type="text"
            className="input"
            id="input-user"
            value={state}
            onChange={changeState}
          >
            <option value="Karnataka">Karnataka</option>
            <option value="andhra pradesh">Andhrapradesh</option>
            <option value="telan gana">Telangana</option>
            <option value="delhi">Delhi</option>
            <option value="Goa">Goa</option>
          </select>
          <div className="weatherCard">
            <div className="weather-part">
              <p>Temperature</p>
              <p className="weather-font">{weather.temperature} °C</p>
            </div>
            <hr className="hr-line" />
            <div className="weather-part">
              <p>Humidity</p>
              <p className="weather-font">{weather.humidity}</p>
            </div>
            <hr className="hr-line" />
            <div className="weather-part">
              <p>Pressure</p>
              <p className="weather-font">{weather.pressure}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Weather
