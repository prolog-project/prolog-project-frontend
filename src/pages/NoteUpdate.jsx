import React from 'react';
import ProfileExamplePost from '../assets/imgs/profile-example-post.png';

function NoteUpdate(){
    return (
        <>
            <div id="main" className="grid-1-3">
                <div className="main-div">
                    <div className="sub-div2 m-t-30 justify-sub-center justify-column gap-40">
                        <h2>일지 수정</h2>
                        <div className="w-100-per justify-column gap-10">
                            <b className="nessary">작성일</b>
                            <input type="date" value="2023-01-01" />
                        </div>
                        <div className="w-100-per justify-column gap-10">
                            <b className="nessary">일지 제목</b>
                            <input type="text" />
                        </div>
                        <div className="w-100-per justify-column gap-10">
                            <b>일지 요약</b>
                            <textarea name="" id="" cols="30" rows="10"></textarea>
                        </div>
                        <div className="justify-main-between flex-wrap w-100-per">
                            <div className="w-50-calc-10 justify-column gap-10 h-400">
                                <b className="nessary">프로젝트 선택</b>
                                <div className="item-div">
                                    <div className="item justify-main-between">
                                        <span className="item-title">프로젝트1</span>
                                        <div className="progress-div">
                                            <span>진행도</span>
                                            <span className="progressing">70%</span>
                                        </div>
                                    </div>
                                    <div className="item justify-main-between">
                                        <span className="item-title">프로젝트2</span>
                                        <div className="progress-div">
                                            <span>진행도</span>
                                            <span className="progressing">50%</span>
                                        </div>
                                    </div>
                                    <div className="item justify-main-between">
                                        <span className="item-title">프로젝트3</span>
                                        <div className="progress-div">
                                            <span>진행도</span>
                                            <span className="progressing">90%</span>
                                        </div>
                                    </div>
                                    <div className="item justify-main-between">
                                        <span className="item-title">프로젝트4</span>
                                        <div className="progress-div">
                                            <span>진행도</span>
                                            <span className="progressing">30%</span>
                                        </div>
                                    </div>
                                    <div className="item justify-main-between">
                                        <span className="item-title">프로젝트5</span>
                                        <div className="progress-div">
                                            <span>진행도</span>
                                            <span className="progressing">70%</span>
                                        </div>
                                    </div>
                                    <div className="item justify-main-between">
                                        <span className="item-title">프로젝트6</span>
                                        <div className="progress-div">
                                            <span>진행도</span>
                                            <span className="progressing">90%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-50-calc-10 justify-column gap-10 h-400">
                                <b>프로젝트 단계</b>
                                <div className="project-step-div expired">
                                    <div className="project-step-header">
                                        <div>
                                            <p>단계명</p>
                                        </div>
                                        <div>
                                            <p>기간</p>
                                        </div>
                                    </div>
                                    <div className="project-step-content">
                                        <div>
                                            <p>요구분석</p>
                                        </div>
                                        <div>
                                            <p>2023-01-01 ~ 2023-02-28</p>
                                        </div>
                                    </div>
                                    <div className="project-step-content">
                                        <div>
                                            <p>분석설계</p>
                                        </div>
                                        <div>
                                            <p>2023-03-01 ~ 2023-04-30</p>
                                        </div>
                                    </div>
                                    <div className="project-step-content active">
                                        <div>
                                            <p>구현</p>
                                        </div>
                                        <div>
                                            <p>2023-05-01 ~ 2023-06-15</p>
                                        </div>
                                    </div>
                                    <div className="project-step-content">
                                        <div>
                                            <p>시험 및 배포</p>
                                        </div>
                                        <div>
                                            <p>2023-06-16 ~ 2023-07-31</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-100-per justify-column gap-10">
                            <b className="nessary">일지 내용</b>
                            <div className="justify-main-left gap-40 justify-sub-center">
                                <b>작성 방법</b>
                                <div className="justify-main-left gap-10">
                                    <button className="btn-white-blue active h-45 w-140">블로그 형식</button>
                                    <button className="btn-white-blue h-45 w-140">섹션 형식</button>
                                </div>
                            </div>
                            <picture>
                                <img style={{width: '100%'}} src={ProfileExamplePost} alt="" />
                            </picture>
                        </div>
                        <div className="justify-main-right m-t-30 w-100-per">
                            <button className="btn-blue-blue w-100 h-35">일지 저장</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default NoteUpdate;