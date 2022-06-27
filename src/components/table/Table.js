import 'bootstrap/dist/css/bootstrap.min.css'
import TableHeader from './table-header/TableHeader'
import TableRow from './table-row/TableRow'
import "./Table.css"

const MyTable = props => {
    const sizes = props.sizes // Размеры сварного соединения
    // Заголовки таблиц
    const headers = sizes[0] != undefined | null ? Object.keys(sizes[0]) : null

    return (
        <div className='scroll-table'>
            {/* Заголовки */}
            <table>
                <thead>
                    <TableHeader headers={headers} />
                </thead>
            </table>
            {
                // Выравнивание текста по центру
                !props.isCenter ? (
                    <div className='scroll-table-body'>
                        <table>
                            <tbody>
                                {
                                    sizes.map((size, index) => {
                                        return (
                                            <TableRow onClick={props.onClick} size={size} />
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                ) : (
                    // Выравнивание текста по левому краю
                    <div className='scroll-table-body'>
                        <table>
                            <tbody>
                                {
                                    sizes.map((size, index) => {
                                        return (
                                            <TableRow isLeft onClick={props.onClick} size={size} />
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                )
            }
        </div>
    )
}

export default MyTable