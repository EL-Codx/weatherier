import accoutnIcon from '../../src/assets/images/image.png'
import { BsBoxes } from "react-icons/bs"
import { FaMapLocationDot, FaToggleOn } from "react-icons/fa6"
import { HiMiniArrowTrendingUp } from 'react-icons/hi2'
import { IoIosNotifications } from "react-icons/io"
import { MdNotificationsActive, MdWindPower } from "react-icons/md"
import { RiDashboardFill, RiSettings3Fill } from 'react-icons/ri'
import { TiWeatherCloudy } from 'react-icons/ti'

export const Right = () => {
    return (
        <div>
            <div className='account-container'>
                <FaToggleOn className='acc-icons'/>
                <IoIosNotifications className='acc-icons'/>
                <div className='acc-image'>
                <img src={accoutnIcon} alt="user image" />
                </div>
            </div>

            <div className='weather-preview'>
                <div>
                <h2>20°C</h2>
                <p>Partly Cloudy</p>
                </div>
                <div>
                <MdWindPower className='acc-icons'/>
                <label>Wind  |  20 Km/h</label>
                </div>
                <div>
                <BsBoxes className='acc-icons'/>
                <label>Hum |  15%</label>
                </div>
            </div>

            <div className='weather-measurement'>
                <h3>Weather Forecast</h3>
                <select name="measure" id="measure">
                    <option value="Celcius" selected>Celcius</option>
                    <option value="Fahrenheit ">Fahrenheit </option>
                    <option value="Kelvin">Kelvin</option>
                </select>
            </div>

            <div className='days-pack'>
                <button>4 Days</button>
                <button>15 Days</button>
                <button>30 Days</button>
            </div>

            <div className='weather-list'>
                <div className='days-pack-result'>
                    <TiWeatherCloudy className='acc-icons' />
                    <div>
                        <h4>Wednesday, July 12</h4>
                        <p>Cloudy</p>
                    </div>
                    <p>|  18°C</p>
                </div>

                <div className='days-pack-result'>
                    <TiWeatherCloudy className='acc-icons' />
                    <div>
                        <h4>Wednesday, July 12</h4>
                        <p>Cloudy</p>
                    </div>
                    <p>|  18°C</p>
                </div>

                <div className='days-pack-result'>
                    <TiWeatherCloudy className='acc-icons' />
                    <div>
                        <h4>Wednesday, July 12</h4>
                        <p>Cloudy</p>
                    </div>
                    <p>|  18°C</p>
                </div>

                <div className='days-pack-result'>
                    <TiWeatherCloudy className='acc-icons' />
                    <div>
                        <h4>Wednesday, July 12</h4>
                        <p>Cloudy</p>
                    </div>
                    <p>|  18°C</p>
                </div>
            </div>

            <div className="menu-container">
                <div><RiDashboardFill /></div>
                <div><FaMapLocationDot /></div>
                <div><MdNotificationsActive /></div>
                <div><HiMiniArrowTrendingUp /></div>
                <div><RiSettings3Fill /></div>
            </div>
        </div>
    )
}