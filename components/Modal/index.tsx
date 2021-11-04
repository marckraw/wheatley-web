import ReactModal from "react-modal";
import {FC, useEffect} from "react";

interface ModalProps {
    isOpen: boolean,
    onRequestClose: any
    onAfterOpen: any,
    contentLabel: string
}

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: '400px',
        height: 'auto',
        padding: '24px',
        overflow: 'visible'
    },
};

export const Modal: FC<ModalProps> = (props) => {
    const {contentLabel, onRequestClose, isOpen, onAfterOpen, children} = props;

    useEffect(() => {
        ReactModal.setAppElement(window.document.body)
    }, [])

    return (
        <ReactModal
            isOpen={isOpen}
            onAfterOpen={onAfterOpen}
            onRequestClose={onRequestClose}
            style={customStyles}
            contentLabel={contentLabel}
        >
            {children}
        </ReactModal>
    )
}

