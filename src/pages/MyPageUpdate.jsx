import React from 'react';
import ProfileExample from '../assets/imgs/profile-example.png';

function MyPageUpdate(){
    return (
        <div id="main" className="grid-1-3">
            <div className="main-div">
                <div className="sub-div2 justify-column justify-sub-center gap-10">
                    <h2>개인정보 수정</h2>
                    <div className="w-100-per justify-column gap-10 m-b-20">
                        <b>프로필 사진</b>
                        <div className="justify-main-left gap-20 justify-sub-right">
                            <picture className="p-t-20 p-l-40">
                                <img src={ProfileExample} className="w-160 h-160" alt="허숙희" />
                            </picture>
                            <div className="justify-main-left gap-10">
                                <button className="btn-blue-blue h-45 w-70">변경</button>
                                <button className="btn-black-black h-45 w-70">초기화</button>
                            </div>
                        </div>
                    </div>
                    <div className="w-100-per justify-column gap-10 m-b-20">
                        <b className="nessary">이메일</b>
                        <div className="justify-main-left gap-10">
                            <input type="text" placeholder="이메일 주소를 입력해주세요." value="ImCuteDog@gmail.com" />
                            <button className="btn-blue-blue w-250 h-45">중복 확인</button>
                        </div>
                        <p className="confirm">중복이 없습니다.</p>
                        <p className="warning">올바른 이메일 주소를 입력해주세요.</p>
                    </div>
                    <div className="w-100-per justify-column gap-10 m-b-20">
                        <b className="nessary">비밀번호</b>
                        <input type="text" placeholder="비밀번호 입력(8~12자리 영문, 숫자, 특수문자 조합)으로 이용해주세요." />
                        <p className="warning">8~12자리 영문, 숫자, 특수문자 조합으로 입력해주세요.</p>
                    </div>
                    <div className="w-100-per justify-column gap-10 m-b-20">
                        <b className="nessary">비밀번호 확인</b>
                        <input type="text" placeholder="비밀번호 입력(8~12자리 영문, 숫자, 특수문자 조합)으로 이용해주세요." />
                        <p className="warning">8~12자리 영문, 숫자, 특수문자 조합으로 입력해주세요.</p>
                    </div>
                    <div className="w-100-per justify-column gap-10 m-b-20">
                        <b className="nessary">사용자명</b>
                        <input type="text" placeholder="사용자명을 입력해주세요." value="짭숙희" />
                        <p className="warning">사용자명을 입력해주세요.</p>
                    </div>
                    <button className="btn-white-blue h-45 w-100-per">개인정보 수정</button>
                    <button className="btn-red-red h-45 w-100-per">회원 탈퇴</button>
                </div>
            </div>
        </div>
    );
}

export default MyPageUpdate;