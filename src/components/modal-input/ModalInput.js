import { Button, Col, Row } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const ModalInput = props => {
    return (
        <>
            <Row>
                <Col className='col-1 center'><p>{props.data.name}</p></Col>
                <Col className='col-1 center'><p>{props.data.value}</p></Col>
                <Col className='col-1'>
                    <Button variant="outline-primary" onClick={() => props.onYcChange()}>&nbsp;🗘&nbsp;</Button>
                </Col>
                <Col className='col-1 center'><p>{props.data.SI}</p></Col>
                <Col className='col-8'><p>{props.data.descrip}</p></Col>
            </Row>
        </>
    )
}

export default ModalInput