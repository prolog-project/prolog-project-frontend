import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

function Header(){
    const navigate = useNavigate();
    const loc = useLocation();
    const [isLogin, setIsLogin] = useState();

    const fn_isLogin = (bool) => {
        if(bool === false){
            sessionStorage.removeItem('login_tokken');
        }

        setIsLogin(bool);
    };

    useEffect(() => {
        const loginTokken = sessionStorage.getItem('login_tokken');
        // 로그인 확인 처리 로직 필요
        const isLogin = (loginTokken !== undefined && loginTokken !== null && loginTokken !== '') ? true : false;

        if(isLogin === true){
            fn_isLogin(true);
        } else {
            fn_isLogin(false);
        }
    }, []);

    return (
        <div id="header">
            <div className="header-logo">
                <span>Prolog</span>
            </div>
            <nav className="header-nav">
                <li className={loc.pathname === '/' ? 'on' : ''}><Link to="/">Home</Link></li>
                <li className={loc.pathname.split('/')[1] === 'project' ? 'on' : ''}><Link to="/project">Projects</Link></li>
                <li className={loc.pathname.split('/')[1] === 'myPage' ? 'on' : ''}><Link to="/myPage">MyPage</Link></li>
            </nav>
            {
                isLogin ?
                <div class="header-btns">
                    <button className="btn-red-red w-100 h-35" onClick={() => fn_isLogin(false)}>Logout</button>
                </div>
                :
                <div class="header-btns">
                    <button className="btn-white-blue w-100 h-35" onClick={() => navigate('/signUp')}>SignUp</button>
                    <button className="btn-white-blue w-100 h-35" onClick={() => navigate('/login')}>Login</button>
                </div>
            }
        </div>
    );
}

export default Header;