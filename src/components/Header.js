import React from 'react';
import { MdBatteryCharging80 } from 'react-icons/md';
import { IoWifi, IoCellular } from 'react-icons/io5';
import '../assets/scss/Header.scss';

const currentDate = new Date();

const hours = currentDate.getHours();
const minutes = currentDate.getMinutes();

const clock = `${String(hours)}:${String(minutes)}`;

const Header = () => {
  return (
    <div className='Header'>
      <ul className='Header_Icons'>
        <div className="Header_left">
          <li>{clock}</li>
        </div>
        <div className="Header_right">
          <li><IoWifi /></li>
          <li><IoCellular /></li>
          <li>80%</li>
          <li><MdBatteryCharging80 /></li>
        </div>
      </ul>
    </div>
  )
}

export default Header;