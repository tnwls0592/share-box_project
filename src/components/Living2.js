import React from 'react';
import '../assets/scss/Living2.scss';
import { Link } from 'react-router-dom';
import {FaChevronLeft} from "react-icons/fa";
import {HiOutlineUser,HiOutlineUsers,HiOutlineUserGroup} from "react-icons/hi";
import {PiPlusCircle} from "react-icons/pi";

const Living2 = () => {
  return (
    <div className='Living2'>
      <div className='back'>
        <div className='back_icon'>
          <Link to="/Living"><FaChevronLeft size={22} /></Link>
        </div>
      </div>
      <div className='tab'>
        <div className='tab01'></div>
        <div className='tab02'></div>
      </div>
      <div className='select'>
        <div className='select_inner'>
          <h1>세대수를 선택해주세요.</h1>
          <div className='home'>
            <ul>
              <li><div><HiOutlineUser size={'40px'} />1인</div></li>
              <li><div><HiOutlineUserGroup size={'40px'} />3인</div></li>
            </ul>
            <ul>
              <li><div><HiOutlineUsers size={'40px'} />2인</div></li>
              <li><div><PiPlusCircle size={'40px'} />3인 이상</div></li>
            </ul>
          </div>
        </div>
        <div className='btn'>
          <div className='btn_inner'>
            <Link to="/Living"><h1>이전으로</h1></Link>
            <Link to="/Pick"><h1>다음으로</h1></Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Living2;