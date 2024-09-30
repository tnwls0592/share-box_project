import React from 'react';
import '../assets/scss/Main.scss';
import { Link } from 'react-router-dom';
import {FaChevronLeft} from "react-icons/fa";

const Main = () => {
  return (
    <div className='Main'>
      <div className='back'>
        <div className='back_icon'>
          <Link to="/Pick"><FaChevronLeft size={22} /></Link>
        </div>
      </div>
      <div className="inner">
      <h1>우리건물</h1>
      <div className="bg">
        <div className="box1">
          <div className="box01 box"></div>
          <div className="box02 box"></div>
          <div className="box03 box"></div>
        </div>
        <div className="box2">
          <div className="box2-1">
            <div className="box01 box"></div>
            <div className="box02 box"></div>
          </div>
          <div className="box03 box"></div>
        </div>
        <div className="box3">
          <div className="box01 box"></div>
          <div className="box02 box"></div>
          <div className="box03 box"></div>
        </div>
        <div className="box4">
          <div className="box01 box"></div>
          <div className="box02 box"></div>
          <div className="box03 box"></div>
          <div className="box04 box"></div>
        </div>
      </div>
      <div className="Description">
        <div className="Description01"></div>
        <div className="Description02"></div>
        <div className="Description03"></div>
      </div>
      </div>
    </div>
  )
}

export default Main;