import React, { useEffect } from 'react';
import SideBar from '../components/SideBar';
import { useNavigate } from 'react-router-dom';

function MyPage(){
    const navigate = useNavigate();

    useEffect(() => {
        const fn_clickProjectItem = () => {
            navigate('/project/1');
        }
        const fn_clickNoteItem = () => {
            navigate('/note/1');
        }
    
        document.querySelectorAll('.item-div .item').forEach((target) => {
            target.addEventListener('click', fn_clickProjectItem);
        })
        
        document.querySelectorAll('.note-div .note-item').forEach((target) => {
            target.addEventListener('click', fn_clickNoteItem);
        })

        return () => {
            document.querySelectorAll('.item-div .item').forEach((target) => {
                target.removeEventListener('click', fn_clickProjectItem);
            })
            
            document.querySelectorAll('.note-div .note-item').forEach((target) => {
                target.removeEventListener('click', fn_clickNoteItem);
            })
        }
    }, [])

    return (
        <>
            <SideBar />
            <div id="main" class="grid-2-3">
                <div class="main-div">
                    <div class="justify-main-between justify-sub-center">
                        <h2>참여중인 프로젝트</h2>
                    </div>
                    <div class="justify-main-between gap-20">
                        <div class="f-g-1">
                            <h3 class="sub-header">#진행중인 프로젝트(10건)</h3>
                            <div class="item-div">
                                <div class="item justify-main-between">
                                    <span class="item-title">프로젝트1</span>
                                    <div class="progress-div">
                                        <span>진행도</span>
                                        <span class="progressing">70%</span>
                                    </div>
                                </div>
                                <div class="item justify-main-between">
                                    <span class="item-title">프로젝트2</span>
                                    <div class="progress-div">
                                        <span>진행도</span>
                                        <span class="progressing">50%</span>
                                    </div>
                                </div>
                                <div class="item justify-main-between">
                                    <span class="item-title">프로젝트3</span>
                                    <div class="progress-div">
                                        <span>진행도</span>
                                        <span class="progressing">90%</span>
                                    </div>
                                </div>
                                <div class="item justify-main-between">
                                    <span class="item-title">프로젝트4</span>
                                    <div class="progress-div">
                                        <span>진행도</span>
                                        <span class="progressing">30%</span>
                                    </div>
                                </div>
                                <div class="item justify-main-between">
                                    <span class="item-title">프로젝트5</span>
                                    <div class="progress-div">
                                        <span>진행도</span>
                                        <span class="progressing">70%</span>
                                    </div>
                                </div>
                                <div class="item justify-main-between">
                                    <span class="item-title">프로젝트6</span>
                                    <div class="progress-div">
                                        <span>진행도</span>
                                        <span class="progressing">90%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="f-g-1">
                            <h3 class="sub-header">#종료된 프로젝트(10건)</h3>
                            <div class="item-div">
                                <div class="item expired justify-main-between">
                                    <span class="item-title">프로젝트old1</span>
                                    <div class="progress-div">
                                        <span>진행도</span>
                                        <span class="done">70%</span>
                                    </div>
                                </div>
                                <div class="item expired justify-main-between">
                                    <span class="item-title">프로젝트old2</span>
                                    <div class="progress-div">
                                        <span>진행도</span>
                                        <span class="done">50%</span>
                                    </div>
                                </div>
                                <div class="item expired justify-main-between">
                                    <span class="item-title">프로젝트old3</span>
                                    <div class="progress-div">
                                        <span>진행도</span>
                                        <span class="done">90%</span>
                                    </div>
                                </div>
                                <div class="item expired justify-main-between">
                                    <span class="item-title">프로젝트old4</span>
                                    <div class="progress-div">
                                        <span>진행도</span>
                                        <span class="done">30%</span>
                                    </div>
                                </div>
                                <div class="item expired justify-main-between">
                                    <span class="item-title">프로젝트old5</span>
                                    <div class="progress-div">
                                        <span>진행도</span>
                                        <span class="done">70%</span>
                                    </div>
                                </div>
                                <div class="item expired justify-main-between">
                                    <span class="item-title">프로젝트old6</span>
                                    <div class="progress-div">
                                        <span>진행도</span>
                                        <span class="done">90%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="justify-main-between justify-sub-center m-t-30">
                        <h2>작성한 일지</h2>
                    </div>
                    <div class="justify-main-between">
                        <h3 class="sub-header">#일지(264건)</h3>
                        <div class="justify-sub-center gap-10">
                            <span class="semi-bold">프로젝트명</span>
                            <select class="w-185 h-30" name="projectName" id="projectName">
                                <option value="">프로젝트1</option>
                                <option value="">프로젝트2</option>
                                <option value="">프로젝트3</option>
                                <option value="">프로젝트4</option>
                                <option value="">프로젝트5</option>
                            </select>
                        </div>
                    </div>
                    <div class="note-div">
                        <div class="justify-main-between justify-sub-center justify-wrap gap-h-20">
                            <div class="note-item justify-main-left justify-sub-center gap-10">
                                <picture></picture>
                                <span>2024.01.19</span>
                            </div>
                            <div class="note-item justify-main-left justify-sub-center gap-10">
                                <picture></picture>
                                <span>2024.01.18</span>
                            </div>
                            <div class="note-item justify-main-left justify-sub-center gap-10">
                                <picture></picture>
                                <span>2024.01.17</span>
                            </div>
                            <div class="note-item justify-main-left justify-sub-center gap-10">
                                <picture></picture>
                                <span>2024.01.16</span>
                            </div>
                            <div class="note-item justify-main-left justify-sub-center gap-10">
                                <picture></picture>
                                <span>2024.01.15</span>
                            </div>
                            <div class="note-item justify-main-left justify-sub-center gap-10">
                                <picture></picture>
                                <span>2024.01.14</span>
                            </div>
                            <div class="note-item justify-main-left justify-sub-center gap-10">
                                <picture></picture>
                                <span>2024.01.13</span>
                            </div>
                            <div class="note-item justify-main-left justify-sub-center gap-10">
                                <picture></picture>
                                <span>2024.01.12</span>
                            </div>
                            <div class="note-item justify-main-left justify-sub-center gap-10">
                                <picture></picture>
                                <span>2024.01.11</span>
                            </div>
                            <div class="note-item justify-main-left justify-sub-center gap-10">
                                <picture></picture>
                                <span>2024.01.10</span>
                            </div>
                            <div class="note-item justify-main-left justify-sub-center gap-10">
                                <picture></picture>
                                <span>2024.01.09</span>
                            </div>
                            <div class="note-item justify-main-left justify-sub-center gap-10">
                                <picture></picture>
                                <span>2024.01.08</span>
                            </div>
                            <div class="note-item justify-main-left justify-sub-center gap-10">
                                <picture></picture>
                                <span>2024.01.07</span>
                            </div>
                            <div class="note-item justify-main-left justify-sub-center gap-10">
                                <picture></picture>
                                <span>2024.01.06</span>
                            </div>
                            <div class="note-item justify-main-left justify-sub-center gap-10">
                                <picture></picture>
                                <span>2024.01.05</span>
                            </div>
                            <div class="note-item justify-main-left justify-sub-center gap-10">
                                <picture></picture>
                                <span>2024.01.04</span>
                            </div>
                            <div class="note-item justify-main-left justify-sub-center gap-10">
                                <picture></picture>
                                <span>2024.01.03</span>
                            </div>
                            <div class="note-item justify-main-left justify-sub-center gap-10">
                                <picture></picture>
                                <span>2024.01.02</span>
                            </div>
                            <div class="note-item justify-main-left justify-sub-center gap-10">
                                <picture></picture>
                                <span>2024.01.01</span>
                            </div>
                            <div class="note-item justify-main-left justify-sub-center gap-10">
                                <picture></picture>
                                <span>2023.12.31</span>
                            </div>
                            <div class="note-item justify-main-left justify-sub-center gap-10">
                                <picture></picture>
                                <span>2023.12.30</span>
                            </div>
                            <div class="note-item justify-main-left justify-sub-center gap-10">
                                <picture></picture>
                                <span>2023.12.29</span>
                            </div>
                            <div class="note-item justify-main-left justify-sub-center gap-10">
                                <picture></picture>
                                <span>2023.12.28</span>
                            </div>
                            <div class="note-item justify-main-left justify-sub-center gap-10">
                                <picture></picture>
                                <span>2023.12.27</span>
                            </div>
                            <div class="note-item justify-main-left justify-sub-center gap-10">
                                <picture></picture>
                                <span>2023.12.26</span>
                            </div>
                            <div class="note-item justify-main-left justify-sub-center gap-10">
                                <picture></picture>
                                <span>2023.12.25</span>
                            </div>
                            <div class="note-item justify-main-left justify-sub-center gap-10">
                                <picture></picture>
                                <span>2023.12.24</span>
                            </div>
                            <div class="note-item justify-main-left justify-sub-center gap-10">
                                <picture></picture>
                                <span>2023.12.23</span>
                            </div>
                            <div class="note-item justify-main-left justify-sub-center gap-10">
                                <picture></picture>
                                <span>2023.12.22</span>
                            </div>
                            <div class="note-item justify-main-left justify-sub-center gap-10">
                                <picture></picture>
                                <span>2023.12.21</span>
                            </div>
                        </div>
                    </div>
                    <div class="sub-div justify-column gap-10 m-t-30">
                        <div class="justify-main-between justify-sub-center">
                            <h3>일지 캘린더</h3>
                            <button class="btn-blue-blue h-35 w-100" onClick={() => navigate('/note/write')}>일지 작성</button>
                        </div>
                        <div class="calendar-div">
                            <div class="date-header">
                                <picture class="date-before"></picture>
                                <h3>2024년 01월</h3>
                                <picture class="date-after"></picture>
                            </div>
                            <div class="date-body">
                                <div class="week">
                                    <div class="week-item">
                                        <p>일</p>
                                    </div>
                                    <div class="week-item">
                                        <p>월</p>
                                    </div>
                                    <div class="week-item">
                                        <p>화</p>
                                    </div>
                                    <div class="week-item">
                                        <p>수</p>
                                    </div>
                                    <div class="week-item">
                                        <p>목</p>
                                    </div>
                                    <div class="week-item">
                                        <p>금</p>
                                    </div>
                                    <div class="week-item">
                                        <p>토</p>
                                    </div>
                                </div>
                                <div class="days">
                                    <div class="days-item">
                                        <p>1일</p>
                                        <picture class="done"></picture>
                                    </div>
                                    <div class="days-item">
                                        <p>2일</p>
                                        <picture class="done"></picture>
                                    </div>
                                    <div class="days-item">
                                        <p>3일</p>
                                        <picture class="done"></picture>
                                    </div>
                                    <div class="days-item">
                                        <p>4일</p>
                                        <picture class="done"></picture>
                                    </div>
                                    <div class="days-item">
                                        <p>5일</p>
                                        <picture class="done"></picture>
                                    </div>
                                    <div class="days-item">
                                        <p>6일</p>
                                        <picture class="done"></picture>
                                    </div>
                                    <div class="days-item">
                                        <p>7일</p>
                                        <picture class="done"></picture>
                                    </div>
                                </div>
                                <div class="days">
                                    <div class="days-item">
                                        <p>8일</p>
                                        <picture class="done"></picture>
                                    </div>
                                    <div class="days-item">
                                        <p>9일</p>
                                        <picture class="done"></picture>
                                    </div>
                                    <div class="days-item">
                                        <p>10일</p>
                                        <picture class="done"></picture>
                                    </div>
                                    <div class="days-item">
                                        <p>11일</p>
                                        <picture class="undo"></picture>
                                    </div>
                                    <div class="days-item">
                                        <p>12일</p>
                                        <picture class="done"></picture>
                                    </div>
                                    <div class="days-item">
                                        <p>13일</p>
                                        <picture class="done"></picture>
                                    </div>
                                    <div class="days-item">
                                        <p>14일</p>
                                        <picture class="done"></picture>
                                    </div>
                                </div><div class="days">
                                    <div class="days-item">
                                        <p>15일</p>
                                        <picture class="done"></picture>
                                    </div>
                                    <div class="days-item">
                                        <p>16일</p>
                                        <picture class="done"></picture>
                                    </div>
                                    <div class="days-item">
                                        <p>17일</p>
                                        <picture class="done"></picture>
                                    </div>
                                    <div class="days-item">
                                        <p>18일</p>
                                        <picture class="done"></picture>
                                    </div>
                                    <div class="days-item">
                                        <p>19일</p>
                                        <picture class="undo"></picture>
                                    </div>
                                    <div class="days-item">
                                        <p>20일</p>
                                        <picture></picture>
                                    </div>
                                    <div class="days-item">
                                        <p>21일</p>
                                        <picture></picture>
                                    </div>
                                </div>
                                <div class="days">
                                    <div class="days-item">
                                        <p>22일</p>
                                        <picture></picture>
                                    </div>
                                    <div class="days-item">
                                        <p>23일</p>
                                        <picture></picture>
                                    </div>
                                    <div class="days-item">
                                        <p>24일</p>
                                        <picture></picture>
                                    </div>
                                    <div class="days-item">
                                        <p>25일</p>
                                        <picture></picture>
                                    </div>
                                    <div class="days-item">
                                        <p>26일</p>
                                        <picture></picture>
                                    </div>
                                    <div class="days-item">
                                        <p>27일</p>
                                        <picture></picture>
                                    </div>
                                    <div class="days-item">
                                        <p>28일</p>
                                        <picture></picture>
                                    </div>
                                </div>
                                <div class="days">
                                    <div class="days-item">
                                        <p>29일</p>
                                        <picture></picture>
                                    </div>
                                    <div class="days-item">
                                        <p>30일</p>
                                        <picture></picture>
                                    </div>
                                    <div class="days-item">
                                        <p>31일</p>
                                        <picture></picture>
                                    </div>
                                    <div class="days-item">
                                        <p></p>
                                        <picture></picture>
                                    </div>
                                    <div class="days-item">
                                        <p></p>
                                        <picture></picture>
                                    </div>
                                    <div class="days-item">
                                        <p></p>
                                        <picture></picture>
                                    </div>
                                    <div class="days-item">
                                        <p></p>
                                        <picture></picture>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>  
        </>
    );
}

export default MyPage;