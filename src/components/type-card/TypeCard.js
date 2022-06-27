import { Card } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './TypeCard.css'

const TypeCard = props => {
    const data = props.data

    return (
        <Card className={'TypeCard'}>
            <Card.Img className={'Img'} variant="top" src={data.picture} />
            <Card.Body className={'textCenter'}>
                <Card.Title>{data.name}</Card.Title>
                <Button variant="primary" onClick={() => props.onClick(data.name)}>Посмотреть</Button>
            </Card.Body>
        </Card>
    )
}

export default TypeCard