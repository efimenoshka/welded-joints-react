import { Form } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './InputData.css'
import TextInput from '../ui/text-input/TextInput'
import { Button } from 'react-bootstrap'
import ModalInput from '../modal-input/ModalInput'
import React from 'react'

const InputData = props => {
    const dataKeys = Object.keys(props.data)

    return (
        <div>
            <Form.Label htmlFor="1" className='bold-text'>Входные данные</Form.Label>
            {dataKeys.map((item) => <TextInput key={item} data={props.data[item]} onChange={props.onChange} />)}
            <ModalInput data={props.Yc} onYcChange={props.onShowModal}/>
            <Button className='calc-button' variant="primary" onClick={() => props.onCalc()}>Расчет прочности</Button>
        </div>
    )
}

export default InputData