import React from 'react';
import SideBar from '../components/SideBar';
import { useNavigate } from 'react-router-dom';

function NoteDeatil(){
    const navigate = useNavigate();

    return (
        <>
            <SideBar />
            <div id="main" className="grid-2-3">
            <div className="main-div">
                <div className="justify-main-between justify-sub-center">
                    <h2>일지 상세</h2>
                    <div className="btn-div">
                        <button className="btn-blue-blue w-140 h-35" onClick={() => navigate('/note/update/1')}>일지 수정</button>
                    </div>
                </div>
                <div className="sub-div2 m-t-30 justify-sub-center justify-column gap-20">
                    <h2>일지 제목</h2>
                    <div className="justify-main-left gap-10 w-100-per">
                        <div className="justify-column gap-10">
                            <b>작성일</b>
                            <b>단계</b>
                        </div>
                        <div className="justify-column gap-10">
                            <p>2024.01.19</p>
                            <p>구현</p>
                        </div>
                    </div>
                    <div className="note-abstract-div w-100-per">
                        <p>일지 요약내용입니다.<br />Lorem ipsum dolor sit amet, consectetur adipiscing elit ...</p>
                    </div>
                    <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud Lorem ipsum dolor sit amet, consectetur adipiscing 
                           elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut 
                           enim ad minim veniam, quis nostrud Lorem ipsum dolor sit amet, 
                           consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                           dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud Lorem ipsum dolor sit amet, consectetur adipiscing 
                           elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut 
                           enim ad minim veniam, quis nostrud Lorem ipsum dolor sit amet, 
                           consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                           dolore magna aliqua. Ut enim ad minim veniam, quis nostrud </p>
                    </div>
                </div>
            </div>
        </div>    
        </>
    );
}

export default NoteDeatil;