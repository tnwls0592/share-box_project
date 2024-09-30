import React, { useState } from 'react';
import '../assets/scss/Pick.scss';
import All from '../components/All';
import Login from '../components/Login';
import { Link } from 'react-router-dom';
import {FaChevronLeft} from "react-icons/fa";


const Pick = () => {
  const [currentTab,setCurrentTab] = useState(0);
  
  const tabMenu = [
    {
      name: '전체',
      content: <All />
    },
    {
      name: '의류',
      content: <Login />
    },
    {
      name: '잡화',
      content: <All />
    },
    {
      name: '생활/주방',
      content: <Login />
    },
    {
      name: '도서',
      content: <All />
    },
    {
      name: '기타',
      content: <All />
    }
  ];
  
  const tabClick = (index) => {
    setCurrentTab(index);
  };
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
            {tabMenu.map((el,index) => {
              return (
                <li
                  key={index}
                  className={currentTab === index ? 'active' : 'default'}
                  onClick={()=>tabClick(index)}
                >{el.name}</li>
              )
            })}
        </ul>
      </div>
      <div className="active">
        {tabMenu[currentTab].content}
      </div>
    </div>
  )
} 

export default Pick;