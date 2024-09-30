import React from 'react';
import '../assets/scss/Living.scss';
import { Link } from 'react-router-dom';
import {FaChevronLeft} from "react-icons/fa";
import {PiBuildingApartment,PiBuilding,PiBuildingOffice,PiGarage,PiHouseLine,PiPlusCircle} from "react-icons/pi";

const Living = () => {
  return (
    <div className='Living'>
      <div className='back'>
        <div className='back_icon'>
          <Link to="/Location"><FaChevronLeft size={22} /></Link>
        </div>
      </div>
      <div className='tab'>
        <div className='tab01'></div>
        <div className='tab02'></div>
      </div>
      <div className='select'>
        <div className='select_inner'>
          <h1>주거형태를 선택해주세요.</h1>
          <div className='home'>
            <ul>
              <li><div><PiHouseLine size={'40px'} />원룸</div></li>
              <li><div><PiBuilding size={'40px'} />오피스텔</div></li>
              <li><div><PiBuildingApartment size={'40px'} />아파트</div></li>
            </ul>
            <ul>
              <li><div><PiGarage size={'40px'} />투룸/쓰리룸</div></li>
              <li><div><PiBuildingOffice size={'40px'} />빌라</div></li>
              <li><div><PiPlusCircle size={'40px'} />기타</div></li>
            </ul>
          </div>
        </div>
        <div className='btn'>
          <div className='btn_inner'>
            <Link to="/Location"><h1>이전으로</h1></Link>
            <Link to="/Living2"><h1>다음으로</h1></Link>
          </div>
        </div>
      </div>
    </div> 
  )
}

export default Living;