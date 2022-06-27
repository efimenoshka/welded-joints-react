import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Modal } from "react-bootstrap";
import MyTable from '../table/Table';

const ModalTable = props => {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Коэффициенты условий работы
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <MyTable isCenter sizes={props.data} onClick={props.onChangeYc} />
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={props.onHide}>Закрыть</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ModalTable