import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';

const MyModal = ({show, onHide, modalHeading, modalTxt, children, bgColor}) => {
    return (
        <Modal show={show} onHide={onHide}>
        <Modal.Header closeButton className={bgColor}>
            <Modal.Title>{modalHeading}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{modalTxt}</Modal.Body>
        <Modal.Footer>
            {children}
        </Modal.Footer>
        </Modal>
    );
}

export default MyModal;