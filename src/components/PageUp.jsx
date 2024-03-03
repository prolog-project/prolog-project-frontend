import React from 'react';
import PageUpIcon from '../assets/imgs/page-up.png';

function PageUp(){
    return (
        <picture class="page-up-btn">
            <img src={PageUpIcon} alt="상단으로 화면 이동" />
        </picture>
    );
}

export default PageUp;