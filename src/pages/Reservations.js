import React from 'react'
import {useState} from 'react'
import { Link } from 'react-router-dom';
import img3 from "../components/img/767042.jpg"
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function Reservations() {

  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [Value, setValue] = useState(dayjs('YYYY/MM/DD'));
  const handleChange = ( event, value) =>{}
  const [preferences, setPreferences] = useState("");

  return (
    <>
    <div className='app_booking'>
      <div className='app_booking-image'>
        <img src={img3} alt='food-picture'/>
        <button className="app_booking-btn">
          Reserve Slot
        </button>
      </div>
      <div className='app_booking-table'>
        <h3 className='booking-heading'>Book Here</h3>
        <form className='booking-form'>
          <div className='Reserved-Name'>
            <label className='First-name'>First-name</label>
            <input
            type="text"
            id='fname'
            placeholder="firstName"
            name="firstName"
            value={fName}
            onChange={(e) => setFName(e.target.value)}></input>
          </div>
          <div className='Reserved-Name'>
            <label className='Last-name'>lastName</label>
            <input
            type="text"
            id='lname'
            placeholder="Last-Name"
            name="lastName"
            value={lName}
            onChange={(e) => setLName(e.target.value)}></input>
          </div>
          <div className='Reserved-email'>
            <label className='email'>Email</label>
            <input
            type="email"
            id='email'
            placeholder="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}>
            </input>
          </div>
          <div >
            <div className='booking-date'>
              <label className='date'>Book here</label>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={['DatePicker']}>
              <DatePicker className='date-box'
              Value={Date}
              onChange={(newDate) => setValue(newDate)}
                />
               </DemoContainer>
               </LocalizationProvider>
          </div>

           <div className='app_booking-numbers'>
            <label className='app_numbers'>Number of people</label>
           <Box width={300}>
           <Slider defaultValue={5} aria-label="Default" valueLabelDisplay="auto" min="0" max="10" onChange={handleChange} />
           </Box>

           <div>
        <label htmlFor="preferences">Seating preferences</label> <br></br>
        <select
          id="preferences"
          value={preferences}
          onChange={(e) => setPreferences(e.target.value)}
        >
          <option>None</option>
          <option>Indoors</option>
          <option>Outdoor (Patio)</option>
          <option>Outdoor (Sidewalk)</option>
        </select>
      </div>

          </div>
          <Link className="action-button" to="/Confirmation">
          Book Table
           </Link>
          </div>
        </form>
      </div>
    </div>
    </>

  )
}

export default Reservations;