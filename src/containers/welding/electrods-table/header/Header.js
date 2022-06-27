const TableHeader = props => {
    const headers = props.headers !== null ? props.headers : []

    return (
        <>
            <tr>
                <th rowSpan="2">
                    Тип электрода для ручной сварки
                </th>
                <th colSpan="3">
                    Механические свойства наплавленного металла после ручной сварки
                </th>
                <th rowSpan="2">
                    Марка сварочной проволоки для сварки под флюсом или в защитных газах
                </th>
                <th rowSpan="2">
                    Примерное назначение
                </th>
            </tr>
            <tr>
                <th>
                    σВ, МПа
                </th>
                <th>
                    δs, %
                </th>
                <th>
                    KCU, кДж/м2

                </th>

            </tr>
        </>


    )
}

export default TableHeader