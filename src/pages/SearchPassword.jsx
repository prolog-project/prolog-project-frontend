import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from '../components/Modal';

function SearchPassword(){
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState();

    const fn_showModal = (bool = false) => {
        setShowModal(bool);
    };

    return (
        <>
            <div id="main" className="grid-1-3">
                <div className="main-div">
                    <div className="tab">
                        <div onClick={() => navigate("/searchEmail")}>
                            이메일 찾기
                        </div>
                        <div className="on">
                            비밀번호 재발급
                        </div>
                    </div>
                    <div className="sub-div2 justify-column justify-sub-center gap-10">
                        <div className="w-100-per justify-column gap-10 m-b-20">
                            <b>사용자명</b>
                            <input type="text" placeholder="사용자명을 입력해주세요." />
                            <p className="warning">올바른 사용자명을 입력해주세요.</p>
                        </div>
                        <div className="w-100-per justify-column gap-10 m-b-20">
                            <b>이메일</b>
                            <input type="text" placeholder="사용자명을 입력해주세요." />
                            <p className="warning">올바른 이메일 주소를 입력해주세요.</p>
                        </div>
                        <div className="w-100-per justify-column gap-10 m-b-20">
                            <b>휴대폰 번호</b>
                            <div className="justify-main-left gap-10">
                                <input type="text" placeholder="휴대폰 번호를 입력해주세요." />
                                <button className="btn-blue-blue w-250 h-45">인증번호 받기</button>
                            </div>
                            <p className="warning">올바른 휴대폰 번호를 입력해주세요.</p>
                            <div className="justify-main-left gap-10">
                                <input type="text" placeholder="인증번호를 입력해주세요." />
                                <button className="btn-blue-blue w-250 h-45">확인</button>
                            </div>
                            <p className="confirm">인증되었습니다.</p>
                            <p className="warning">올바르지 않은 인증번호입니다. 다시 확인해주세요.</p>
                        </div>
                        <button className="btn-white-blue h-45 w-100-per" onClick={() => fn_showModal(true)}>비밀번호 찾기</button>
                    </div>
                </div>
            </div>    
            { showModal ? <Modal fn_showModal = {fn_showModal} delimiter = "findPassword" /> : null }
        </>
    );
}

export default SearchPassword;