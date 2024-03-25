import React, { useEffect } from 'react';
import SideBar from '../components/SideBar';
import { useNavigate } from 'react-router-dom';

function Project(){
    const navigate = useNavigate();

    useEffect(() => {
        const fn_clickProjectCard = () => {
            navigate('/project/1');
        }

        document.querySelectorAll('.card').forEach((target) => {
            target.addEventListener('click', fn_clickProjectCard);
        })

        return () => {
            document.querySelectorAll('.card').forEach((target) => {
                target.removeEventListener('click', fn_clickProjectCard);
            })
        }
    }, [])

    return (
        <>
            <SideBar />
            <div id="main" className="grid-2-3">
                <div className="main-div">
                    <div className="justify-main-between justify-sub-center">
                        <h2>프로젝트 목록</h2>
                        <div className="btn-div">
                            <button className="btn-blue-blue w-140 h-35" onClick={() => navigate('/project/write')}>프로젝트 생성</button>
                        </div>
                    </div>
                    <h3 className="sub-header">#최근 프로젝트</h3>
                    <div className="justify-main-between justify-wrap">
                        <div className="card">
                            <h3>프로젝트1</h3>
                            <div>
                                <span className="card-sub-title">역할</span>
                                <div className="tag tag-pink">Master</div>
                            </div>
                            <div>
                                <span className="card-sub-title">기간</span>
                                <span className="card-sub-content">24.01.01~24.07.01</span>
                            </div>
                        </div>
                        <div className="card">
                            <h3>프로젝트4</h3>
                            <div>
                                <span className="card-sub-title">역할</span>
                                <div className="tag tag-yellow">PM</div>
                            </div>
                            <div>
                                <span className="card-sub-title">기간</span>
                                <span className="card-sub-content">24.01.01~24.07.01</span>
                            </div>
                        </div>
                        <div className="card">
                            <h3>프로젝트2</h3>
                            <div>
                                <span className="card-sub-title">역할</span>
                                <div className="tag tag-pink">Master</div>
                            </div>
                            <div>
                                <span className="card-sub-title">기간</span>
                                <span className="card-sub-content">24.01.01~24.07.01</span>
                            </div>
                        </div>
                    </div>
                    <h3 className="sub-header">#팀장인 프로젝트</h3>
                    <div className="justify-main-between justify-wrap">
                        <div className="card">
                            <h3>프로젝트1</h3>
                            <div>
                                <span className="card-sub-title">역할</span>
                                <div className="tag tag-pink">Master</div>
                            </div>
                            <div>
                                <span className="card-sub-title">기간</span>
                                <span className="card-sub-content">24.01.01~24.07.01</span>
                            </div>
                        </div>
                        <div className="card">
                            <h3>프로젝트2</h3>
                            <div>
                                <span className="card-sub-title">역할</span>
                                <div className="tag tag-pink">Master</div>
                            </div>
                            <div>
                                <span className="card-sub-title">기간</span>
                                <span className="card-sub-content">24.01.01~24.07.01</span>
                            </div>
                        </div>
                        <div className="card">
                            <h3>프로젝트3</h3>
                            <div>
                                <span className="card-sub-title">역할</span>
                                <div className="tag tag-pink">Master</div>
                            </div>
                            <div>
                                <span className="card-sub-title">기간</span>
                                <span className="card-sub-content">24.01.01~24.07.01</span>
                            </div>
                        </div>
                    </div>
                    <h3 className="sub-header">#팀원인 프로젝트</h3>
                    <div className="justify-main-between justify-wrap">
                        <div className="card">
                            <h3>프로젝트4</h3>
                            <div>
                                <span className="card-sub-title">역할</span>
                                <div className="tag tag-yellow">PM</div>
                            </div>
                            <div>
                                <span className="card-sub-title">기간</span>
                                <span className="card-sub-content">24.01.01~24.07.01</span>
                            </div>
                        </div>
                        <div className="card">
                            <h3>프로젝트5</h3>
                            <div>
                                <span className="card-sub-title">역할</span>
                                <div className="tag tag-lightgreen">Designer</div>
                            </div>
                            <div>
                                <span className="card-sub-title">기간</span>
                                <span className="card-sub-content">24.01.01~24.07.01</span>
                            </div>
                        </div>
                        <div className="card">
                            <h3>프로젝트6</h3>
                            <div>
                                <span className="card-sub-title">역할</span>
                                <div className="tag tag-bluegreen">FrontEnd</div>
                            </div>
                            <div>
                                <span className="card-sub-title">기간</span>
                                <span className="card-sub-content">24.01.01~24.07.01</span>
                            </div>
                        </div>
                    </div>
                    <h3 className="sub-header">#종료된 프로젝트</h3>
                    <div className="justify-main-between justify-wrap">
                        <div className="card expired">
                            <h3>프로젝트old1</h3>
                            <div>
                                <span className="card-sub-title">역할</span>
                                <div className="tag tag-yellow">PM</div>
                            </div>
                            <div>
                                <span className="card-sub-title">기간</span>
                                <span className="card-sub-content">24.01.01~24.07.01</span>
                            </div>
                        </div>
                        <div className="card expired">
                            <h3>프로젝트old2</h3>
                            <div>
                                <span className="card-sub-title">역할</span>
                                <div className="tag tag-lightgreen">Desginer</div>
                            </div>
                            <div>
                                <span className="card-sub-title">기간</span>
                                <span className="card-sub-content">24.01.01~24.07.01</span>
                            </div>
                        </div>
                        <div className="card expired">
                            <h3>프로젝트old3</h3>
                            <div>
                                <span className="card-sub-title">역할</span>
                                <div className="tag tag-bluegreen">FrontEnd</div>
                            </div>
                            <div>
                                <span className="card-sub-title">기간</span>
                                <span className="card-sub-content">24.01.01~24.07.01</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>   
        </>
    );
}

export default Project;