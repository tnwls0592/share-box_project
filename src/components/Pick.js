import React from 'react';
import '../assets/scss/Pick.scss';
import { Link } from 'react-router-dom';
import {FaChevronLeft} from "react-icons/fa";
import {LuMicrowave,LuSprout,LuPackagePlus,LuApple,LuBook,LuLamp,LuShirt,LuChefHat,LuCheckCircle} from "react-icons/lu";


const Pick = () => {
  return (
    <div className='Pick'>
      <div className='back'>
        <div className='back_icon'>
          <Link to="/Living2"><FaChevronLeft size={22} /></Link>
        </div>
      </div>
      <div className='tab'>
        <h1><p>관심있는 분야를 선택해주세요.</p></h1>
        <ul>
          <li><LuCheckCircle /><p>전체</p></li>
          <li><LuShirt /><p>의류</p></li>
          <li><LuLamp /><p>잡화</p></li>
          <li><LuMicrowave /><p>가전</p></li>
          <li><LuChefHat /><p>생활/주방</p></li>
          <li><LuBook /><p>도서</p></li>
          <li><LuSprout /><p>식물</p></li>
          <li><LuApple /><p>식품</p></li>
          <li><LuPackagePlus /><p>기타</p></li>
        </ul>
      </div>
      <div className='btn'>
          <div className='btn_inner'>
            <Link to="/Living2"><h1>이전으로</h1></Link>
            <Link to="/Main"><h1>다음으로</h1></Link>
          </div>
        </div>
    </div>
  )
} 

export default Pick;