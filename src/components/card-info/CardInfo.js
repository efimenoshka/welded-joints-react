import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, ListGroup } from 'react-bootstrap';
import "./CardInfo.css"

const info = {
    header: 'Справочная информация',
    info: [
        'Тип соединения',
        'Форма подготовленных кромок',
        'Характер сварного шва',
        'Толщина свариваемых деталей'
    ]
}

const CardInfo = props => {
    const info = props.info // Объект с информацией
    return (
        <Card>
            <Card.Header>Справочная информация</Card.Header>
            <ListGroup variant="flush">
                <ListGroup.Item>Тип соединения: {info.type}</ListGroup.Item>
                <ListGroup.Item>Форма подготовленных кромок: {info.edgeShape}</ListGroup.Item>
                <ListGroup.Item>Характер сварного шва: {info.character}</ListGroup.Item>
                <ListGroup.Item>Толщина свариваемых деталей: {info.widthMin}-{info.widthMax}</ListGroup.Item>
            </ListGroup>
        </Card>
    )
}

export default CardInfo