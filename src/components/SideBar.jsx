import React from 'react';
import ProfileExample from '../assets/imgs/profile-example.png';

function SideBar(){
    return(
        <div id="left-bar">
            <div class="left-bar-div justify-sub-left">
                <img class="profile" src={ProfileExample} alt="허숙희" />
                <p class="left-bar-name">김춘식</p>
                <p class="left-bar-email">이메일</p>
                <p>ImCuteDog@gmail.com</p>
                <p class="left-bar-email">휴대폰 번호</p>
                <p>010-0000-0000</p>
            </div>
            <div class="left-bar-div justify-sub-center">
                <button class="btn-blue-blue w-250 h-45">개인정보 수정</button>
            </div>
            <div class="left-bar-div justify-sub-center bg-white">
                <button class="btn-white-grey w-250 h-45 m-b-20">프로젝트2</button>
                <button class="btn-white-grey w-250 h-45 m-b-20">프로젝트3</button>
                <button class="btn-white-grey w-250 h-45 m-b-20">프로젝트1</button>
                <button class="btn-white-grey w-250 h-45 m-b-20">프로젝트4</button>
                <button class="btn-white-grey w-250 h-45">프로젝트5</button>
            </div>
        </div>
    );
}

export default SideBar;