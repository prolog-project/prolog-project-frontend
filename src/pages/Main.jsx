import React from 'react';
import main from '../assets/imgs/main.jpg';
import arrowUp from '../assets/imgs/arrow-up.svg';
import cursorPointer from '../assets/imgs/cursor-pointer.svg';

function Main(){
    return(
        <div id="main" className="grid-1-3">
            <div className="main-img">
                <img src={main} alt="메인 이미지" />
                <div className="img-text-div">
                    <span className="img-main-text">내가 우리가 되는 시간</span>
                    <span className="img-main-text">나와 함께하는 프로젝트</span>
                    <span className="img-sub-text">시작하기</span>
                    <img className="ico-animation1" src={arrowUp} alt="위를 가리키는 화살표1" />
                    <img className="ico-animation2" src={arrowUp} alt="위를 가리키는 화살표2" />
                    <img className="ico-animation3" src={arrowUp} alt="위를 가리키는 화살표3" />
                    <img src={cursorPointer} alt="위를 가리키는 화살표" />
                </div>
            </div>
        </div>
    );
}

export default Main;