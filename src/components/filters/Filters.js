import { Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Filters.css'
import Select from '../select/Select';
import { useEffect, useState } from 'react';
import axios from './../../axios/axios-weldet-joints';

const Filters = props => {
    const [edgeShape, setEdgeShape] = useState([])
    const [character, setCharacter] = useState([])

    const range = [{
        id: 0,
        name: "Диапазон"
    }, {
        id: 1,
        name: 'Точное значение'
    }]


    useEffect(async () => {
        const edgeShape = await axios.get('/edgeShape') // Получение формы кромок из БД
        const character = await axios.get('/character') // Получение характера шва из БД
        setEdgeShape(edgeShape.data)
        setCharacter(character.data)
    }, [setEdgeShape])

    return (
        <div className="filters">
            <h3>Фильтры</h3>
            <Select type={'edgeShape'} data={edgeShape} title={'Форма подготовленных кромок'} onChange={props.onChange} />
            <Select type={'character'} data={character} title={'Характер сварного шва'} onChange={props.onChange} />
            <Select type={'range'} data={range} title={'Толщина свариваемых деталей, мм'} onChange={props.onChange} />
            {
                props.isRange && // Диапазон толщины детали
                <div className="two-inputs">
                    <p>От</p>
                    <Form.Control className="input" type="number" onChange={value => props.onChange('min', value.target.value)} />
                    <p>до</p>
                    <Form.Control className="input" type="number" onChange={value => props.onChange('max', value.target.value)} />
                </div>
            }
            {
                !props.isRange && // Точное значение детали
                <div className="two-inputs">
                    <p>Значение</p>
                    <Form.Control className="input" type="number" onChange={value => props.onChange('one', value.target.value)} />
                </div>
            }


        </div>
    )
}

export default Filters

