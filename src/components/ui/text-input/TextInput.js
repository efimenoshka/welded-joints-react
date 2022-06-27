import { Col, Form, Row } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './TextInput.css'

const TextInput = props => {
    return (
        <>
            <Row>
                <Col className='col-1 center'><p>{props.data.name}</p></Col>
                <Col className='col-2'><Form.Control
                    type="number"
                    value={props.data.value}
                    onChange={(e) => props.onChange(props.data.name, e.target.value)} /></Col>
                <Col className='col-1'><p>{props.data.SI}</p></Col>
                <Col className='col-8'><p>{props.data.descrip}</p></Col>
            </Row>
        </>
    )
}

export default TextInput