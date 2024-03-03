import React from 'react';
import Angularjs from '../assets/imgs/icon-project-skill-angularjs.svg';
import Django from '../assets/imgs/icon-project-skill-django.svg';
import Docker from '../assets/imgs/icon-project-skill-docker.svg';
import Javascript from '../assets/imgs/icon-project-skill-javascript.svg';
import Mysql from '../assets/imgs/icon-project-skill-mysql.svg';
import Nodejs from '../assets/imgs/icon-project-skill-node-js.svg';
import Typescript from '../assets/imgs/icon-project-skill-typescript.svg';
import VisualStudio from '../assets/imgs/icon-project-skill-visualstudio.svg';
import Webpack from '../assets/imgs/icon-project-skill-webpack.svg';
import Teammates from '../assets/imgs/icon-project-teammates(1).png';
import Teammates2 from '../assets/imgs/icon-project-teammates(2).png';
import Teammates3 from '../assets/imgs/icon-project-teammates(3).png';
import Teammates4 from '../assets/imgs/icon-project-teammates(4).png';
import Profile1 from '../assets/imgs/profile-example.png';
import Profile2 from '../assets/imgs/profile-example(2).png';
import Profile3 from '../assets/imgs/profile-example(3).png';
import Profile4 from '../assets/imgs/profile-example(4).png';
import Profile5 from '../assets/imgs/profile-example(5).png';

function ProjectWrite(){
    return (
        <div id="main" className="grid-1-3">
            <div className="main-div">
                <div className="sub-div2 m-t-30 justify-sub-center justify-column gap-40">
                    <h2>프로젝트 생성</h2>
                    <div className="w-100-per justify-column gap-10">
                        <b className="nessary">프로젝트 기간</b>
                        <div className="justify-main-left justify-sub-center gap-10">
                            <input type="date" value="2023-01-01" />
                            <p>~</p>
                            <input type="date" value="2023-07-31" />
                        </div>
                    </div>
                    <div className="w-100-per justify-column gap-10">
                        <b className="nessary">프로젝트명</b>
                        <input type="text" />
                    </div>
                    <div className="w-100-per justify-column gap-10">
                        <b>프로젝트 설명</b>
                        <textarea name="" id="" cols="30" rows="10"></textarea>
                    </div>
                    <div className="w-100-per justify-column gap-10">
                        <b className="nessary">프로젝트 단계</b>
                        <div className="justify-main-between justify-sub-center">
                            <div className="justify-main-left gap-40">
                                <div className="justify-main-left gap-20 justify-sub-center">
                                    <b>단계명</b>
                                    <input style="width: 300px;" type="text" />
                                </div>
                                <div className="justify-main-left gap-20 justify-sub-center">
                                    <b>기간</b>
                                    <div className="justify-main-left justify-sub-center gap-20">
                                        <input type="date" value="2023-01-01" />
                                        <p>~</p>
                                        <input type="date" value="2023-07-31" />
                                    </div>
                                </div>
                            </div>
                            <button className="btn-blue-blue w-70 h-45">추가</button>
                        </div>
                        <div className="project-step-div">
                            <div className="project-step-header">
                                <div>
                                    <p>단계명</p>
                                </div>
                                <div>
                                    <p>기간</p>
                                </div>
                                <div>
                                    <p>비율</p>
                                </div>
                            </div>
                            <div className="project-step-content">
                                <div>
                                    <p>요구분석</p>
                                </div>
                                <div>
                                    <p>2023-01-01 ~ 2023-02-28</p>
                                </div>
                                <div>
                                    <p>30%</p>
                                    <button className="btn-red-red w-30">x</button>
                                </div>
                            </div>
                            <div className="project-step-content">
                                <div>
                                    <p>분석설계</p>
                                </div>
                                <div>
                                    <p>2023-03-01 ~ 2023-04-30</p>
                                </div>
                                <div>
                                    <p>30%</p>
                                    <button className="btn-red-red w-30">x</button>
                                </div>
                            </div>
                            <div className="project-step-content">
                                <div>
                                    <p>구현</p>
                                </div>
                                <div>
                                    <p>2023-05-01 ~ 2023-06-15</p>
                                </div>
                                <div>
                                    <p>20%</p>
                                    <button className="btn-red-red w-30">x</button>
                                </div>
                            </div>
                            <div className="project-step-content">
                                <div>
                                    <p>시험 및 배포</p>
                                </div>
                                <div>
                                    <p>2023-06-16 ~ 2023-07-31</p>
                                </div>
                                <div>
                                    <p>20%</p>
                                    <button className="btn-red-red w-30">x</button>
                                </div>
                            </div>
                            <div className="project-step-footer">
                                <div>
                                    <p>전체</p>
                                </div>
                                <div>
                                    <p>2023-01-01 ~ 2023-07-31</p>
                                </div>
                                <div>
                                    <p>100%</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-100-per justify-column gap-10 h-400">
                        <b>프로젝트 기술</b>
                        <div className="justify-main-between">
                            <div className="justify-column w-50-calc-10 gap-10 justify-main-between">
                                <div className="search">
                                    <input type="text" placeholder="사용할 기술을 입력해주세요." />
                                </div>
                                <div className="project-tech-item-list border-2-black">
                                    <div className="project-tech-item item-blue">
                                        <div>
                                            <picture>
                                                <img src={Django} alt="django" />
                                            </picture>
                                            <h3>Django</h3>
                                        </div>
                                        <button className="btn-blue-blue w-70 h-35">추가</button>
                                    </div>
                                    <div className="project-tech-item item-blue">
                                        <div>
                                            <picture>
                                                <img src={VisualStudio} alt="visualstudio" />
                                            </picture>
                                            <h3>Visual Studio</h3>
                                        </div>
                                        <button className="btn-blue-blue w-70 h-35">추가</button>
                                    </div>
                                    <div className="project-tech-item item-blue">
                                        <div>
                                            <picture>
                                                <img src={Mysql} alt="mysql" />
                                            </picture>
                                            <h3>Mysql</h3>
                                        </div>
                                        <button className="btn-blue-blue w-70 h-35">추가</button>
                                    </div>
                                    <div className="project-tech-item item-blue">
                                        <div>
                                            <picture>
                                                <img src={Typescript} alt="typescript" />
                                            </picture>
                                            <h3>Typescript</h3>
                                        </div>
                                        <button className="btn-blue-blue w-70 h-35">추가</button>
                                    </div>
                                    <div className="project-tech-item item-blue">
                                        <div>
                                            <picture>
                                                <img src={Javascript} alt="javascript" />
                                            </picture>
                                            <h3>Javascript</h3>
                                        </div>
                                        <button className="btn-blue-blue w-70 h-35">추가</button>
                                    </div>
                                </div>
                            </div>
                            <div className="justify-column w-50-calc-10 border-2-black p-10-0-10-20">
                                <div className="project-tech-item-list2">
                                    <div className="project-tech-item item-red">
                                        <div>
                                            <picture>
                                                <img src={Nodejs} alt="nodejs" />
                                            </picture>
                                            <h3>Nodejs</h3>
                                        </div>
                                        <button className="btn-red-red w-70 h-35">추가</button>
                                    </div>
                                    <div className="project-tech-item item-red">
                                        <div>
                                            <picture>
                                                <img src={Webpack} alt="webpack" />
                                            </picture>
                                            <h3>Webpack</h3>
                                        </div>
                                        <button className="btn-red-red w-70 h-35">추가</button>
                                    </div>
                                    <div className="project-tech-item item-red">
                                        <div>
                                            <picture>
                                                <img src={Angularjs} alt="angularjs" />
                                            </picture>
                                            <h3>Angularjs</h3>
                                        </div>
                                        <button className="btn-red-red w-70 h-35">추가</button>
                                    </div>
                                    <div className="project-tech-item item-red">
                                        <div>
                                            <picture>
                                                <img src={Typescript} alt="typescript" />
                                            </picture>
                                            <h3>Typescript</h3>
                                        </div>
                                        <button className="btn-red-red w-70 h-35">추가</button>
                                    </div>
                                    <div className="project-tech-item item-red">
                                        <div>
                                            <picture>
                                                <img src={Docker} alt="docker" />
                                            </picture>
                                            <h3>docker</h3>
                                        </div>
                                        <button className="btn-red-red w-70 h-35">추가</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-100-per justify-column gap-10">
                        <b>팀원 초대하기</b>
                        <div className="justify-column gap-10">
                            <div className="justify-main-left gap-20 justify-sub-center p=">
                                <b>팀원</b>
                                <div className="search w-400">
                                    <input type="text" placeholder="예) ImDaengDaeng@gmail.com" />
                                </div>
                            </div>
                            <div className="invite-item-list h-200">
                                <div className="invite-item">
                                    <div>
                                        <picture>
                                            <img src={Teammates} alt="teammates1" />
                                        </picture>
                                        <p>별명1</p>
                                        <p>ImDaengDaeng@gmail.com</p>
                                    </div>
                                    <button className="btn-white-green w-50 h-35">초대</button>
                                </div>
                                <div className="invite-item">
                                    <div>
                                        <picture>
                                            <img src={Teammates2} alt="teammates2" />
                                        </picture>
                                        <p>별명2</p>
                                        <p>ImDaengDaeng@gmail.com</p>
                                    </div>
                                    <button className="btn-white-green w-50 h-35">초대</button>
                                </div>
                                <div className="invite-item">
                                    <div>
                                        <picture>
                                            <img src={Teammates3} alt="teammates3" />
                                        </picture>
                                        <p>별명3</p>
                                        <p>ImDaengDaeng@gmail.com</p>
                                    </div>
                                    <button className="btn-white-green w-50 h-35">초대</button>
                                </div>
                                <div className="invite-item">
                                    <div>
                                        <picture>
                                            <img src={Teammates4} alt="teammates4" />
                                        </picture>
                                        <p>별명4</p>
                                        <p>ImDaengDaeng@gmail.com</p>
                                    </div>
                                    <button className="btn-white-green w-50 h-35">초대</button>
                                </div>
                                <div className="invite-item">
                                    <div>
                                        <picture>
                                            <img src={Teammates} alt="teammates1" />
                                        </picture>
                                        <p>별명1</p>
                                        <p>ImDaengDaeng@gmail.com</p>
                                    </div>
                                    <button className="btn-white-green w-50 h-35">초대</button>
                                </div>
                                <div className="invite-item">
                                    <div>
                                        <picture>
                                            <img src={Teammates} alt="teammates1s" />
                                        </picture>
                                        <p>별명1</p>
                                        <p>ImDaengDaeng@gmail.com</p>
                                    </div>
                                    <button className="btn-white-green w-50 h-35">초대</button>
                                </div>
                            </div>
                        </div>
                        <div className="justify-column gap-10 m-10-0">
                            <b>초대목록</b>
                            <div className="invite-teammates-list">
                                <div className="invite-teammates">
                                    <picture>
                                        <img src={Profile1} alt="profile1" />
                                    </picture>
                                    <p>김춘식</p>
                                    <p>ImChunsik@gmail.com</p>
                                    <button className="btn-white-red h-35">삭제</button>
                                </div>
                                <div className="invite-teammates">
                                    <picture>
                                        <img src={Profile2} alt="profile2" />
                                    </picture>
                                    <p>김춘식</p>
                                    <p>ImChunsik@gmail.com</p>
                                    <button className="btn-white-red h-35">삭제</button>
                                </div>
                                <div className="invite-teammates">
                                    <picture>
                                        <img src={Profile3} alt="profile3" />
                                    </picture>
                                    <p>김춘식</p>
                                    <p>ImChunsik@gmail.com</p>
                                    <button className="btn-white-red h-35">삭제</button>
                                </div>
                                <div className="invite-teammates">
                                    <picture>
                                        <img src={Profile4} alt="profile4" />
                                    </picture>
                                    <p>김춘식</p>
                                    <p>ImChunsik@gmail.com</p>
                                    <button className="btn-white-red h-35">삭제</button>
                                </div>
                                <div className="invite-teammates">
                                    <picture>
                                        <img src={Profile5} alt="profile5" />
                                    </picture>
                                    <p>김춘식</p>
                                    <p>ImChunsik@gmail.com</p>
                                    <button className="btn-white-red h-35">삭제</button>
                                </div>
                            </div>
                        </div>
                        <div className="justify-main-right">
                            <button className="btn-blue-blue w-140 h-35">프로젝트 생성</button>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    );
}

export default ProjectWrite();