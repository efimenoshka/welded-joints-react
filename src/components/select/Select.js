import { Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Select.css'

const Select = props => {
    const data = props.data // Массив параметров
    const title = props.title // Заголовок списка

    return (
        <div className="control">
            <Form.Label htmlFor={title}>{title}</Form.Label>
            <Form.Select
                id={title}
                className='select-margin'
                aria-label="Default select example"
                onChange={(value) => props.onChange(props.type, value.target.value)}
            >
                {/* Цикл по параметрам */}
                {props.type !== 'range' && <option key={`${title}-all`}>Все</option>}
                {
                    data.map((item) => {
                        return (
                            <option key={item._id}>{item.name}</option>
                        )
                    })
                }
            </Form.Select>
        </div>
    )
}

export default Select