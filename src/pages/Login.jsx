import React from 'react';

function Login(){
    return (
        <div id="main" className="grid-1-3">
            <div className="main-div justify-main-between justify-wrap">
                <div className="sub-div2 w-50-calc-10 h-500 justify-column justify-sub-center gap-10">
                    <h2>로그인</h2>
                    <div className="w-100-per justify-column gap-10 m-b-20">
                        <b>이메일</b>
                        <input type="text" placeholder="이메일 주소를 입력해주세요." />
                        <p className="warning">올바른 이메일 주소를 입력해주세요.</p>
                    </div>
                    <div className="w-100-per justify-column gap-10 m-b-20">
                        <b>비밀번호</b>
                        <input type="text" placeholder="비밀번호 입력(8~12자리 영문, 숫자, 특수문자 조합)으로 이용해주세요." />
                        <p className="warning">8~12자리 영문, 숫자, 특수문자 조합으로 입력해주세요.</p>
                    </div>
                    <div></div>
                    <button className="btn-blue-blue h-45 w-100-per">로그인</button>
                    <button className="btn-white-blue h-45 w-100-per">회원가입</button>
                </div>
                <div className="sub-div2 w-50-calc-10 h-500 justify-column justify-sub-center gap-10">
                    <h2>간편 로그인</h2>
                    <button className="h-70 w-100-per m-t-15" style="background-color: #2CB400; color: white; border: 1px solid #2CB400;">네이버 아이디로 로그인</button>
                    <button className="h-70 w-100-per m-t-5" style="background-color: #FFEB00; color: black; border: 1px solid #FFEB00;">카카오 아이디로 로그인</button>
                    <button className="h-70 w-100-per m-t-5" style="background-color: white; color: #3563E9; border: 1px solid #3563E9;">구글 아이디로 로그인</button>
                    <button className="h-70 w-100-per m-t-5" style="background-color: #3B5998; color: white; border: 1px solid #3B5998;">페이스북 아이디로 로그인</button>
                    <button className="h-70 w-100-per m-t-5" style="background-color: black; color: white; border: 1px solid black;">애플 아이디로 로그인</button>
                </div>
            </div>
        </div>
    );
}

export default Login();