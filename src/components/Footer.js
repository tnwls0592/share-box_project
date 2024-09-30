import React from 'react';
import '../assets/scss/Footer.scss';
import { IoHome } from 'react-icons/io5';
import { IoMdChatboxes } from 'react-icons/io';
import { FaRegUserCircle } from 'react-icons/fa';
import { PiBuildingApartment } from 'react-icons/pi';
import { LiaClipboardListSolid } from 'react-icons/lia';

const Footer = () => {
  return (
    <div className='Footer'>
      <ul className='Footer_Icons'>
        <li><LiaClipboardListSolid size={20} /><p>홈</p></li>
        <li><PiBuildingApartment size={20} /><p>건물생활</p></li>
        <li><IoHome size={20} /><p>근처 건물</p></li>
        <li><IoMdChatboxes size={20} /><p>채팅</p></li>
        <li><FaRegUserCircle size={20} /><p>내 정보</p></li>
      </ul>
    </div>
  )
}

export default Footer;