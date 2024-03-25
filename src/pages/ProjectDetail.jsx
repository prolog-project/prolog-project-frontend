import React, { useState } from 'react';
import SideBar from '../components/SideBar';
import ProfileExample from '../assets/imgs/profile-example.png';
import ProfileExample2 from '../assets/imgs/profile-example(2).png'
import ProfileExample3 from '../assets/imgs/profile-example(3).png'
import ProfileExample4 from '../assets/imgs/profile-example(4).png'
import ProfileExample5 from '../assets/imgs/profile-example(5).png'
import ProfileExample6 from '../assets/imgs/profile-example(6).png'
import TestSkillIcons from '../assets/imgs/test-skill-icons.png'
import TestProgressBar from '../assets/imgs/test-progress-bar.png'
import ProgressDaysExample from '../assets/imgs/progress-days-example.png'
import { useNavigate } from 'react-router-dom';
import Modal from '../components/Modal';

function ProjectDetail(){
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState();

    const fn_showModal = (bool = false) => {
        setShowModal(bool);
    };

    return (
        <>
            <SideBar />
            <div id="main" className="grid-2-3">
                <div className="main-div">
                    <div className="justify-main-between justify-sub-center">
                        <h2>프로젝트 목록</h2>
                        <div className="btn-div">
                            <button className="btn-black-black w-140 h-35" onClick={() => fn_showModal(true)}>팀원 초대하기</button>
                            <button className="btn-blue-blue w-140 h-35" onClick={() => navigate('/project/update')}>프로젝트 수정</button>
                        </div>
                    </div>
                    <div>
                        <p>프로젝트 설명입니다.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <picture>
                            <img style={{width: '100%', margin: '20px 0'}} src={TestSkillIcons} alt="" />
                        </picture>
                        <div className="progress-div">
                            <div className="justify-main-left gap-20">
                                <b>프로젝트 기간</b>
                                <p>24.01.01~24.07.01</p>
                            </div>
                            <div>
                                <picture>
                                    <img style={{width: '100%', margin: '20px 0'}} src={TestProgressBar} alt="" />
                                </picture>
                            </div>
                        </div>
                    </div>
                    <div className="sub-div m-t-30 justify-main-left gap-20 justify-wrap">
                        <div className="project-teammates">
                            <picture>
                                <img src={ProfileExample} alt="" />
                            </picture>
                            <div className="justify-main-center justify-column gap-5">
                                <div className="tag tag-pink">Master</div>
                                <div className="tag tag-red">BackEnd</div>
                            </div>
                            <p>김춘식</p>
                        </div>
                        <div className="project-teammates">
                            <picture>
                                <img src={ProfileExample2} alt="" />
                            </picture>
                            <div className="tag tag-yellow">PM</div>
                            <p>팀원2</p>
                        </div>
                        <div className="project-teammates">
                            <picture>
                                <img src={ProfileExample3} alt="" />
                            </picture>
                            <div className="tag tag-lightgreen">Designer</div>
                            <p>팀원3</p>
                        </div>
                        <div className="project-teammates">
                            <picture>
                                <img src={ProfileExample4} alt="" />
                            </picture>
                            <div className="tag tag-bluegreen">FrontEnd</div>
                            <p>팀원4</p>
                        </div>
                        <div className="project-teammates">
                            <picture>
                                <img src={ProfileExample5} alt="" />
                            </picture>
                            <div className="tag tag-orange">DevOps</div>
                            <p>팀원5</p>
                        </div>
                        <div className="project-teammates">
                            <picture>
                                <img src={ProfileExample6} alt="" />
                            </picture>
                            <div className="tag tag-red">BackEnd</div>
                            <p>팀원6</p>
                        </div>
                    </div>
                    <div className="project-detail-profile sub-div m-t-30">
                        <div className="justify-main-left justify-sub-right f-g-1">
                            <picture>
                                <img src={ProfileExample} alt="" />
                            </picture>
                            <div className="justify-main-left justify-column">
                                <p>김춘식</p>
                                <div className="tag tag-pink">Master</div>
                            </div>
                        </div>
                        <div className="f-g-1 justify-main-left gap-20">
                            <div className="justify-column">
                                <b>기간</b>
                                <b>참석률</b>
                            </div>
                            <div className="justify-column">
                                <p>24.01.01~24.07.01</p>
                                <p className="progress-p-color">97%</p>
                                <div>
                                    <picture>
                                        <img style={{position: 'relative', top: '-80px', height: 'auto', width: 'auto'}} src={ProgressDaysExample} alt="" />
                                    </picture>
                                </div>
                            </div>
                        </div>
                        <div className="justify-main-left gap-20 f-g-1">
                            <b>최근<br />작성한<br />일지</b>
                            <div className="justify-column justify-main-center">
                                <div className="note-abstract">
                                    <p>2024.01.19</p>
                                    <p>일지 요약내용입니다.<br />Lorem ipsum dolor sit amet, consectetur adipiscing elit ...</p>
                                </div>
                                <div className="turn">
                                    <div className="active"></div>
                                    <div></div>
                                    <div></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sub-div m-t-30 justify-column gap-10">
                        <div className="justify-main-between justify-sub-center">
                            <h3>일지 캘린더</h3>
                            <a style={{textDecoration: 'underline', color: 'var(--blue)', fontWeight: 'var(--semi-bold)'}} href="javascript:void(0);">전체보기</a>
                        </div>
                        <div className="calendar-div">
                            <div className="date-header">
                                <picture className="date-before"></picture>
                                <h3>2024년 01월</h3>
                                <picture className="date-after"></picture>
                            </div>
                            <div className="date-body">
                                <div className="week">
                                    <div className="week-item">
                                        <p>일</p>
                                    </div>
                                    <div className="week-item">
                                        <p>월</p>
                                    </div>
                                    <div className="week-item">
                                        <p>화</p>
                                    </div>
                                    <div className="week-item">
                                        <p>수</p>
                                    </div>
                                    <div className="week-item">
                                        <p>목</p>
                                    </div>
                                    <div className="week-item">
                                        <p>금</p>
                                    </div>
                                    <div className="week-item">
                                        <p>토</p>
                                    </div>
                                </div>
                                <div className="days">
                                    <div className="days-item">
                                        <p>1일</p>
                                        <picture className="done"></picture>
                                    </div>
                                    <div className="days-item">
                                        <p>2일</p>
                                        <picture className="done"></picture>
                                    </div>
                                    <div className="days-item">
                                        <p>3일</p>
                                        <picture className="done"></picture>
                                    </div>
                                    <div className="days-item">
                                        <p>4일</p>
                                        <picture className="done"></picture>
                                    </div>
                                    <div className="days-item">
                                        <p>5일</p>
                                        <picture className="done"></picture>
                                    </div>
                                    <div className="days-item">
                                        <p>6일</p>
                                        <picture className="done"></picture>
                                    </div>
                                    <div className="days-item">
                                        <p>7일</p>
                                        <picture className="done"></picture>
                                    </div>
                                </div>
                                <div className="days">
                                    <div className="days-item">
                                        <p>8일</p>
                                        <picture className="done"></picture>
                                    </div>
                                    <div className="days-item">
                                        <p>9일</p>
                                        <picture className="done"></picture>
                                    </div>
                                    <div className="days-item">
                                        <p>10일</p>
                                        <picture className="done"></picture>
                                    </div>
                                    <div className="days-item">
                                        <p>11일</p>
                                        <picture className="undo"></picture>
                                    </div>
                                    <div className="days-item">
                                        <p>12일</p>
                                        <picture className="done"></picture>
                                    </div>
                                    <div className="days-item">
                                        <p>13일</p>
                                        <picture className="done"></picture>
                                    </div>
                                    <div className="days-item">
                                        <p>14일</p>
                                        <picture className="done"></picture>
                                    </div>
                                </div><div className="days">
                                    <div className="days-item">
                                        <p>15일</p>
                                        <picture className="done"></picture>
                                    </div>
                                    <div className="days-item">
                                        <p>16일</p>
                                        <picture className="done"></picture>
                                    </div>
                                    <div className="days-item">
                                        <p>17일</p>
                                        <picture className="done"></picture>
                                    </div>
                                    <div className="days-item">
                                        <p>18일</p>
                                        <picture className="done"></picture>
                                    </div>
                                    <div className="days-item">
                                        <p>19일</p>
                                        <picture className="undo"></picture>
                                    </div>
                                    <div className="days-item">
                                        <p>20일</p>
                                        <picture></picture>
                                    </div>
                                    <div className="days-item">
                                        <p>21일</p>
                                        <picture></picture>
                                    </div>
                                </div>
                                <div className="days">
                                    <div className="days-item">
                                        <p>22일</p>
                                        <picture></picture>
                                    </div>
                                    <div className="days-item">
                                        <p>23일</p>
                                        <picture></picture>
                                    </div>
                                    <div className="days-item">
                                        <p>24일</p>
                                        <picture></picture>
                                    </div>
                                    <div className="days-item">
                                        <p>25일</p>
                                        <picture></picture>
                                    </div>
                                    <div className="days-item">
                                        <p>26일</p>
                                        <picture></picture>
                                    </div>
                                    <div className="days-item">
                                        <p>27일</p>
                                        <picture></picture>
                                    </div>
                                    <div className="days-item">
                                        <p>28일</p>
                                        <picture></picture>
                                    </div>
                                </div>
                                <div className="days">
                                    <div className="days-item">
                                        <p>29일</p>
                                        <picture></picture>
                                    </div>
                                    <div className="days-item">
                                        <p>30일</p>
                                        <picture></picture>
                                    </div>
                                    <div className="days-item">
                                        <p>31일</p>
                                        <picture></picture>
                                    </div>
                                    <div className="days-item">
                                        <p></p>
                                        <picture></picture>
                                    </div>
                                    <div className="days-item">
                                        <p></p>
                                        <picture></picture>
                                    </div>
                                    <div className="days-item">
                                        <p></p>
                                        <picture></picture>
                                    </div>
                                    <div className="days-item">
                                        <p></p>
                                        <picture></picture>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            { showModal ? <Modal fn_showModal = {fn_showModal} delimiter = "inviteTeammates" /> : null }
        </>
    );
}

export default ProjectDetail;