import 'bootstrap/dist/css/bootstrap.min.css'
import { Col, Row } from 'react-bootstrap'
import './ResultLine.css'

const ResultLine = props => {

    return (
        <>
            {props.value !== -1 &&
                <Row>
                    <Col className='col-1 center'><p>{props.data.name}</p></Col>
                    <Col className='col-1 center'><p>{props.value.toFixed(2)}</p></Col>
                    <Col className='col-1'><p>{props.data.SI}</p></Col>
                    <Col className='col-8'><p>{props.data.descrip}</p></Col>
                </Row>
            }

        </>
    )
}

export default ResultLine