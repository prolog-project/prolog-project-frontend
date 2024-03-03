import React from 'react';
// import Link from 'react-router-dom';

function Header(){
    return (
        <div id="header">
            <div className="header-logo">
                <span>Prolog</span>
            </div>
            <nav className="header-nav">
                {/* <li><Link to="/">Home</Link></li> */}
                {/* <li><Link to="/project">Projects</Link></li> */}
                {/* <li><Link to="/myPage">MyPage</Link></li> */}
            </nav>
            <div class="header-btns">
                <button className="btn-white-blue w-100 h-35">SignUp</button>
                <button className="btn-white-blue w-100 h-35">Login</button>
            </div>
        </div>
    );
}

export default Header;