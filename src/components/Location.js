import React from 'react';
import '../assets/scss/Location.scss';
import { Link } from 'react-router-dom';
import {Map,MapMarker} from "react-kakao-maps-sdk";
import {FaChevronLeft} from "react-icons/fa";
import {GiPositionMarker} from "react-icons/gi";
import {IoSearchSharp} from "react-icons/io5";
import {MdGpsFixed} from "react-icons/md";

const Location = () => {
  return (
    <div className='Location'>
      <div className='back'>
        <div className='back_icon'>
          <Link to="/Login"><FaChevronLeft size={22} /></Link>
          <GiPositionMarker size={22} />
        </div>
      </div>
      <div className='tab'>
        <div className='input'>
          <input placeholder="   지역 또는 도로명 주소로 검색" />
          <IoSearchSharp size={22} style={{paddingRight: "10px"}} />
        </div>
      </div>
      <div className='gps'>
        <MdGpsFixed />
        <h1>현 위치에서 검색</h1>
      </div>
      <Map
        center={{ lat: 37.506320759000715, lng: 127.05368251210247 }}
        style={{
          width: '100%',
          height: '80vh',
        }}
      >
      
        <MapMarker
          style={{ border: 'tranparent' }}
          position={{ lat: 37.506320759000715, lng: 127.05368251210247 }}
        >
          <div
            className='Map_Name'
            style={{
              color: '#000',
              fontSize: '19px',
              fontWeight: '700',
              padding: '2.5px',
            }}
          >
            현재 위치
          </div>
        </MapMarker>
      </Map>
      <div className='btn'>
        <div className='btn_inner'>
          <Link to="/Living"><h1>설정하기</h1></Link>
        </div>
      </div>
    </div>
  )
}

export default Location;