import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import classes from './WeldedJointsCard.module.css'

const WeldedJointsCard = props => {
    const data = props.data

    return (
        <Card className={classes.Card}>
            <Card.Img className={classes.Img} variant="top" src={data.picture} />
            <Card.Body className={classes.textCenter}>
                <Card.Title>{data.name}</Card.Title>
                <Button variant="primary" onClick={() => props.onClick(data.name)}>Посмотреть</Button>
            </Card.Body>
        </Card>
    )
}

export default WeldedJointsCard