import React from 'react';
import SideBar from '../components/SideBar';
import ProfileExample from '../assets/imgs/profile-example.png';
import TestProgressBar2 from '../assets/imgs/test-progress-bar2.png';

function Note(){
    return (
        <>
            <SideBar />
            <div id="main" className="grid-2-3">
            <div className="main-div">
                <div className="justify-main-between justify-sub-center">
                    <h2>일지 목록</h2>
                    <div className="btn-div">
                        <button className="btn-blue-blue w-140 h-35">일지 작성</button>
                    </div>
                </div>
                <div className="project-detail-profile sub-div m-t-30">
                    <div className="justify-column justify-main-center justify-sub-center f-g-1">
                        <picture>
                            <img src={ProfileExample} alt="허숙희" />
                        </picture>
                        <h3>김춘식</h3>
                        <div className="justify-main-center gap-10 flex-wrap">
                            <div className="tag tag-pink w-70">Master</div>
                            <div className="tag tag-red w-70">BackEnd</div>
                        </div>
                    </div>
                    <div className="justify-column gap-10 f-g-3 w-60-per">
                        <div className="note-abstract-div">
                            <h3>프로젝트1</h3>
                            <p>프로젝트 설명입니다.<br />Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud... </p>
                        </div>
                        <picture>
                            <img style="width: 100%; height: auto; margin: 20px 0;" src={TestProgressBar2} alt="" />
                        </picture>
                    </div>
                </div>
                <div className="justify-column">
                    <div className="progress-div">
                        <div>
                            <picture>
                                <img style="width: 100%; margin: 20px 0;" src="./imgs/test-progress-bar2.png" alt="" />
                            </picture>
                        </div>
                    </div>
                    <div className="justify-main-left gap-20 justify-wrap">
                        <div className="note-abstract note-abstract-item">
                            <p>2024.01.19</p>
                            <p>일지 요약내용입니다.<br />Lorem ipsum dolor sit amet, consectetur adipiscing elit ...</p>
                        </div>
                        <div className="note-abstract note-abstract-item">
                            <p>2024.01.19</p>
                            <p>일지 요약내용입니다.<br />Lorem ipsum dolor sit amet, consectetur adipiscing elit ...</p>
                        </div>
                        <div className="note-abstract note-abstract-item">
                            <p>2024.01.19</p>
                            <p>일지 요약내용입니다.<br />Lorem ipsum dolor sit amet, consectetur adipiscing elit ...</p>
                        </div>
                        <div className="note-abstract note-abstract-item">
                            <p>2024.01.19</p>
                            <p>일지 요약내용입니다.<br />Lorem ipsum dolor sit amet, consectetur adipiscing elit ...</p>
                        </div>
                        <div className="note-abstract note-abstract-item">
                            <p>2024.01.19</p>
                            <p>일지 요약내용입니다.<br />Lorem ipsum dolor sit amet, consectetur adipiscing elit ...</p>
                        </div>
                        <div className="note-abstract note-abstract-item">
                            <p>2024.01.19</p>
                            <p>일지 요약내용입니다.<br />Lorem ipsum dolor sit amet, consectetur adipiscing elit ...</p>
                        </div>
                        <div className="note-abstract note-abstract-item">
                            <p>2024.01.19</p>
                            <p>일지 요약내용입니다.<br />Lorem ipsum dolor sit amet, consectetur adipiscing elit ...</p>
                        </div>
                        <div className="note-abstract note-abstract-item">
                            <p>2024.01.19</p>
                            <p>일지 요약내용입니다.<br />Lorem ipsum dolor sit amet, consectetur adipiscing elit ...</p>
                        </div>
                        <div className="note-abstract note-abstract-item">
                            <p>2024.01.19</p>
                            <p>일지 요약내용입니다.<br />Lorem ipsum dolor sit amet, consectetur adipiscing elit ...</p>
                        </div>
                        <div className="note-abstract note-abstract-item">
                            <p>2024.01.19</p>
                            <p>일지 요약내용입니다.<br />Lorem ipsum dolor sit amet, consectetur adipiscing elit ...</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>    
        </>
    );
}

export default Note;