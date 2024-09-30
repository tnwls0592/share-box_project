import React from 'react';
import '../assets/scss/Login.scss';
import { Link } from 'react-router-dom';
import { FaFacebookSquare, FaUserAlt } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { SiKakaotalk, SiNaver } from "react-icons/si";
import { FcGoogle } from "react-icons/fc";
import { PiLockKeyOpenFill } from "react-icons/pi";
import { LuScanFace } from "react-icons/lu";

const Login = () => {
  return (
    <div className='Login'>
        <div className="User_Icon">
          <LuScanFace size={65} color='#f7786b' style={{padding: "5px"}} />
        </div>
      <div className="Background">
        <div className="input">
          <div className="id"> 
            <FaUserAlt style={{padding: "0 10px",color:'#F7786B'}} />
            <input placeholder=' 아이디를 입력하세요.' />
          </div>
          <div className="password">
            <PiLockKeyOpenFill style={{padding: "0 10px", color:'#F7786B'}} />
            <input placeholder=' 비밀번호를 입력하세요.' />
          </div>
        </div>
        <div className="Btn">
          <Link to="/Location" className="Login_Btn"><p>로그인</p></Link>
        </div>
        <div className="Find">
          <ul className="left">
            <li>아이디 찾기</li>
            <li>비밀번호 찾기</li>
          </ul>
          <ul className="right">
            <li>회원가입</li>
          </ul>
        </div>
        <div className="Easy_Login">
          <div className='Easy_Login_inner'>
          <h1>SNS 간편계정으로 로그인 하세요!</h1>
            <ul className='Easy_Icons'>
              <li><FaFacebookSquare size={42} color='#3b5998' /></li>
              <li><SiKakaotalk size={37} color='#f7e600' /></li>
              <li><SiNaver size={37} color='#2db400' /></li>
              <li><FaSquareXTwitter size={42} /></li>
              <li><FcGoogle size={40} /></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login;