import React from "react";

function FindPassword(){
    return (
        <div className="modal-content">
            <h3>비밀번호 재설정</h3>
            <div className="w-100-per justify-column gap-10 m-b-20">
                <b>비밀번호</b>
                <input type="text" placeholder="비밀번호 입력(8~12자리 영문, 숫자, 특수문자 조합)으로 이용해주세요." />
                <p className="warning">8~12자리 영문, 숫자, 특수문자 조합으로 입력해주세요.</p>
            </div>
            <div className="w-100-per justify-column gap-10 m-b-20">
                <b>비밀번호 확인</b>
                <input type="text" placeholder="비밀번호 입력(8~12자리 영문, 숫자, 특수문자 조합)으로 이용해주세요." />
                <p className="warning">8~12자리 영문, 숫자, 특수문자 조합으로 입력해주세요.</p>
            </div>
            <button className="btn-white-blue h-45 w-100-per">비밀번호 재설정</button>
        </div>
    )
}

export default FindPassword;