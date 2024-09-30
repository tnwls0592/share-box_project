import React from 'react';
import '../assets/scss/Start.scss';
import { Link } from 'react-router-dom';

const Start = () => {
  return (
    <div className='Start'>
      <div className="Background">
        <div className="text">
          <div className='text_inner'>
            <h1>안녕하세요!<br/><span>SHARE BOX 입니다.</span></h1>
            <div className="Btn">
              <Link to="/Start" className="Start_Btn">회원가입</Link>
              <Link to="/Login" className="Login_Btn">로그인</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Start;