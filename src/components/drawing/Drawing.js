import 'bootstrap/dist/css/bootstrap.min.css';
import "./Drawing.css"

const Drawing = props => {
    return (
        <img className='img' src={props.drawing} />
    )
}

export default Drawing