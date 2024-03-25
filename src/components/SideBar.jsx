import React from 'react';
import ProfileExample from '../assets/imgs/profile-example.png';
import { useNavigate } from 'react-router-dom';

function SideBar(){
    const navigate = useNavigate();

    return(
        <div id="left-bar">
            <div className="left-bar-div justify-sub-left">
                <img className="profile" src={ProfileExample} alt="허숙희" />
                <p className="left-bar-name">김춘식</p>
                <p className="left-bar-email">이메일</p>
                <p>ImCuteDog@gmail.com</p>
                <p className="left-bar-email">휴대폰 번호</p>
                <p>010-0000-0000</p>
            </div>
            <div className="left-bar-div justify-sub-center">
                <button className="btn-blue-blue w-250 h-45" onClick={() => navigate('/myPageUpdate')}>개인정보 수정</button>
            </div>
            <div className="left-bar-div justify-sub-center bg-white">
                <button className="btn-white-grey w-250 h-45 m-b-20" onClick={() => navigate('/project/' + 2)}>프로젝트2</button>
                <button className="btn-white-grey w-250 h-45 m-b-20" onClick={() => navigate('/project/' + 3)}>프로젝트3</button>
                <button className="btn-white-grey w-250 h-45 m-b-20" onClick={() => navigate('/project/' + 1)}>프로젝트1</button>
                <button className="btn-white-grey w-250 h-45 m-b-20" onClick={() => navigate('/project/' + 4)}>프로젝트4</button>
                <button className="btn-white-grey w-250 h-45" onClick={() => navigate('/project/' + 5)}>프로젝트5</button>
            </div>
        </div>
    );
}

export default SideBar;