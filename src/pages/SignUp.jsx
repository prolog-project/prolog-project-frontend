import React from 'react';

function SignUp(){
    return (
        <>
            <div id="main" className="grid-1-3">
                <div className="main-div">
                    <div className="sub-div2 justify-column justify-sub-center gap-10">
                        <h2>회원가입</h2>
                        <div className="w-100-per justify-column gap-10 m-b-20">
                            <b className="nessary">이메일</b>
                            <div className="justify-main-left gap-10">
                                <input type="text" placeholder="이메일 주소를 입력해주세요." />
                                <button className="btn-blue-blue w-250 h-45">이메일 인증하기</button>
                            </div>
                            <p className="warning">사용자명을 입력해주세요.</p>
                            <div className="justify-main-left gap-10">
                                <input type="text" placeholder="인증번호를 입력해주세요." />
                                <button className="btn-blue-blue w-250 h-45">확인</button>
                            </div>
                            <p className="confirm">인증되었습니다.</p>
                            <p className="warning">올바르지 않은 인증번호입니다. 다시 확인해주세요.</p>
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
                            <input type="text" placeholder="사용자명을 입력해주세요." />
                            <p className="warning">사용자명을 입력해주세요.</p>
                        </div>
                        <div className="w-100-per justify-column gap-10 m-b-20">
                            <b className="nessary">휴대폰 번호</b>
                            <input type="text" placeholder="휴대폰 번호를 입력해주세요." />
                            <p className="warning">올바른 휴대폰 번호를 입력해주세요.</p>
                        </div>
                        <button className="btn-white-blue h-45 w-100-per">회원가입</button>
                    </div>
                </div>
            </div> 
        </>
    );
}

export default SignUp;