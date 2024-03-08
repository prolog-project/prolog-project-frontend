import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function Login(){
    const navigate = useNavigate();
    
    const fn_Login = () => {
        // 서버와 통신하여 로그인 토큰을 받아오는 로직 필요
        const loginTokken = true;

        sessionStorage.setItem('login_tokken', loginTokken);
        window.location.replace('/');
    };

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
                    <button className="btn-blue-blue h-45 w-100-per" onClick={() => fn_Login()}>로그인</button>
                    <button className="btn-white-blue h-45 w-100-per" onClick={() => navigate('/signUp')}>회원가입</button>
                </div>
                <div className="sub-div2 w-50-calc-10 h-500 justify-column justify-sub-center gap-10">
                    <h2>간편 로그인</h2>
                    <button className="h-70 w-100-per m-t-15" style={{backgroundColor: '#2CB400', color: 'white', border: '1px solid #2CB400'}} onClick={() => fn_Login()}>네이버 아이디로 로그인</button>
                    <button className="h-70 w-100-per m-t-5" style={{backgroundColor: '#FFEB00', color: 'black', border: '1px solid #FFEB00'}} onClick={() => fn_Login()}>카카오 아이디로 로그인</button>
                    <button className="h-70 w-100-per m-t-5" style={{backgroundColor: 'white', color: '#3563E9', border: '1px solid #3563E9'}} onClick={() => fn_Login()}>구글 아이디로 로그인</button>
                    <button className="h-70 w-100-per m-t-5" style={{backgroundColor: '#3B5998', color: 'white', border: '1px solid #3B5998'}} onClick={() => fn_Login()}>페이스북 아이디로 로그인</button>
                    <button className="h-70 w-100-per m-t-5" style={{backgroundColor: 'black', color: 'white', border: '1px solid black'}} onClick={() => fn_Login()}>애플 아이디로 로그인</button>
                </div>
            </div>
        </div>
    );
}

export default Login;