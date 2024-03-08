import React, { useEffect } from "react";
import InviteTeammates from "./modal/InviteTeammates";
import FindEmail from "./modal/FindEmail";
import FindPassword from "./modal/FindPassword";

function Modal({ fn_showModal, delimiter }) {
    const contents = {
        inviteTeammates : <InviteTeammates />,
        findEmail : <FindEmail />,
        findPassword : <FindPassword />
    };

    useEffect(() => {
        const fn_fixScroll = () => {
            document.body.style.overflow = 'hidden';
        }
        const fn_unFixScroll = () => {
            document.body.style.overflow = 'auto';
        }

        fn_fixScroll();

        return () => {
            fn_unFixScroll();
        }

    }, []);

    return (
        <>
            <div style={{backgroundColor: 'var(--black)', opacity: '0.3', width: '100%', height: '100%', position: 'fixed', left: '0', top: '0'}}></div>
            <div class="modal-div w-1000">
                <div class="modal-header">
                    <button onClick={() => fn_showModal(false)}>x</button>
                </div>
                { contents[delimiter] }
            </div>
        </>
    )
}

export default Modal;