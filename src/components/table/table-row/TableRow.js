const TableRow = props => {
    const sizes = props.size // Размеры сварного соединения
    const sizeKeys = Object.keys(sizes) // Ключи размеров

    return (
        <tr onClick={() => {
            props.onClick(sizes[sizeKeys[1]])
        }
        }>
            {
                props.isLeft ? (
                    sizeKeys.map((size, index) => {
                        if (index === 0) return (
                            <td style={{ textAlign: "justify", width: "80%" }} className='Mborder' key={Math.random()}>{sizes[sizeKeys[index]]}</td>
                        )
                        else
                            return (
                                <td className='Mborder' key={Math.random()}>{sizes[sizeKeys[index]]}</td>
                            )
                    })
                ) : (
                    sizeKeys.map((size, index) => {
                        return (
                            <td key={Math.random()}>{sizes[sizeKeys[index]]}</td>
                        )
                    })
                )
            }
        </tr>
    )
}

export default TableRow