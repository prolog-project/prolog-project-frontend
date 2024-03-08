import React from "react";
import ProjectTeammates1 from "../../assets/imgs/icon-project-teammates(1).png";
import ProjectTeammates2 from "../../assets/imgs/icon-project-teammates(2).png";
import ProjectTeammates3 from "../../assets/imgs/icon-project-teammates(3).png";
import ProjectTeammates4 from "../../assets/imgs/icon-project-teammates(4).png";

function InviteTeammates(){
    return (
        <div className="modal-content">
            <h3>팀원 초대하기</h3>
            <div className="justify-column gap-10">
                <b>이메일 주소로 초대하기</b>
                <div className="search">
                    <input type="text" placeholder="이메일 주소를 입력해주세요." />
                </div>
                <div className="invite-item-list h-200">
                    <div className="invite-item">
                        <div>
                            <picture>
                                <img src={ProjectTeammates1} alt="teammates1" />
                            </picture>
                            <p>별명1</p>
                            <p>ImDaengDaeng@gmail.com</p>
                        </div>
                        <button className="btn-white-green w-50 h-35">초대</button>
                    </div>
                    <div className="invite-item">
                        <div>
                            <picture>
                                <img src={ProjectTeammates2} alt="teammates2" />
                            </picture>
                            <p>별명2</p>
                            <p>ImDaengDaeng@gmail.com</p>
                        </div>
                        <button className="btn-white-green w-50 h-35">초대</button>
                    </div>
                    <div className="invite-item">
                        <div>
                            <picture>
                                <img src={ProjectTeammates3} alt="teammates3" />
                            </picture>
                            <p>별명3</p>
                            <p>ImDaengDaeng@gmail.com</p>
                        </div>
                        <button className="btn-white-green w-50 h-35">초대</button>
                    </div>
                    <div className="invite-item">
                        <div>
                            <picture>
                                <img src={ProjectTeammates4} alt="teammates4" />
                            </picture>
                            <p>별명4</p>
                            <p>ImDaengDaeng@gmail.com</p>
                        </div>
                        <button className="btn-white-green w-50 h-35">초대</button>
                    </div>
                    <div className="invite-item">
                        <div>
                            <picture>
                                <img src={ProjectTeammates1} alt="teammates1" />
                            </picture>
                            <p>별명1</p>
                            <p>ImDaengDaeng@gmail.com</p>
                        </div>
                        <button className="btn-white-green w-50 h-35">초대</button>
                    </div>
                    <div className="invite-item">
                        <div>
                            <picture>
                                <img src={ProjectTeammates1} alt="teammates1s" />
                            </picture>
                            <p>별명1</p>
                            <p>ImDaengDaeng@gmail.com</p>
                        </div>
                        <button className="btn-white-green w-50 h-35">초대</button>
                    </div>
                </div>
            </div>
            <div className="justify-column gap-10 m-t-20">
                <b>초대 링크로 초대하기</b>
                <div className="justify-main-left">
                    <input disabled type="text" value="https://www.prolog.com/kimchunsik/project1" />
                    <button className="link-copy btn-blue-blue w-100 h-45">링크 복사</button>
                </div>
            </div>
        </div>
    )
}

export default InviteTeammates;