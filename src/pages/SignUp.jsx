import React from 'react';

function SignUp(){
    return (
        <>
            <div id="main" class="grid-1-3">
                <div class="main-div">
                    <div class="sub-div2 justify-column justify-sub-center gap-10">
                        <h2>회원가입</h2>
                        <div class="w-100-per justify-column gap-10 m-b-20">
                            <b class="nessary">이메일</b>
                            <div class="justify-main-left gap-10">
                                <input type="text" placeholder="이메일 주소를 입력해주세요." />
                                <button class="btn-blue-blue w-250 h-45">중복 확인</button>
                            </div>
                            <p class="confirm">중복이 없습니다.</p>
                            <p class="warning">올바른 이메일 주소를 입력해주세요.</p>
                        </div>
                        <div class="w-100-per justify-column gap-10 m-b-20">
                            <b class="nessary">비밀번호</b>
                            <input type="text" placeholder="비밀번호 입력(8~12자리 영문, 숫자, 특수문자 조합)으로 이용해주세요." />
                            <p class="warning">8~12자리 영문, 숫자, 특수문자 조합으로 입력해주세요.</p>
                        </div>
                        <div class="w-100-per justify-column gap-10 m-b-20">
                            <b class="nessary">비밀번호 확인</b>
                            <input type="text" placeholder="비밀번호 입력(8~12자리 영문, 숫자, 특수문자 조합)으로 이용해주세요." />
                            <p class="warning">8~12자리 영문, 숫자, 특수문자 조합으로 입력해주세요.</p>
                        </div>
                        <div class="w-100-per justify-column gap-10 m-b-20">
                            <b class="nessary">사용자명</b>
                            <input type="text" placeholder="사용자명을 입력해주세요." />
                            <p class="warning">사용자명을 입력해주세요.</p>
                        </div>
                        <div class="w-100-per justify-column gap-10 m-b-20">
                            <b class="nessary">휴대폰 번호</b>
                            <div class="justify-main-left gap-10">
                                <input type="text" placeholder="휴대폰 번호를 입력해주세요." />
                                <button class="btn-blue-blue w-250 h-45">인증번호 받기</button>
                            </div>
                            <p class="warning">사용자명을 입력해주세요.</p>
                            <div class="justify-main-left gap-10">
                                <input type="text" placeholder="인증번호를 입력해주세요." />
                                <button class="btn-blue-blue w-250 h-45">확인</button>
                            </div>
                            <p class="confirm">인증되었습니다.</p>
                            <p class="warning">올바르지 않은 인증번호입니다. 다시 확인해주세요.</p>
                        </div>
                        <button class="btn-white-blue h-45 w-100-per">회원가입</button>
                    </div>
                </div>
            </div> 
        </>
    );
}

export default SignUp;