import 'bootstrap/dist/css/bootstrap.min.css'
import { Form } from 'react-bootstrap'
import "./Result.css"
import ResultLine from './../result-line/ResultLine'

const structura = [
    {
        id: "lw",
        name: "lw",
        SI: "[мм]",
        descrip: "Расчетная длина шва"
    },
    {
        id: "Rwy",
        name: "Rwy",
        SI: "[МПа]",
        descrip: "Расчетное сопротивление"
    },
    {
        id: "sigma",
        name: "σ",
        SI: "[МПа]",
        descrip: "Нормальное сварочное напряжение"
    },
    {
        id: "koef",
        name: "φ",
        SI: "[%]",
        descrip: "Коэффициент загруженности сварного соединения"
    }
]

const Result = props => {
    return (
        <div>
            {props.isResult &&
                <Form.Label htmlFor="1" className='bold-text'>Рассчитанные значения</Form.Label>            
            }
            {structura.map((item) => <ResultLine key={item.name} data={item} value={props.result[item.id]} />)}
        </div>
    )
}

export default Result