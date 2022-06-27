import "./TableHeader.css"
import { getHeaderName } from "../../../enums/TableHeader"

const TableHeader = props => {
    // Массив заголовков
    const headers = props.headers !== null ? props.headers : []

    return (
        <tr>
            {
                // Цикл по заголовкам
                headers.map((header, index) => {
                    return (
                        <th className='Mborder' key={index + header}><i>{getHeaderName(header)}</i></th>
                    )
                })
            }
        </tr>
    )
}

export default TableHeader
