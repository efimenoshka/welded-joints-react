import 'bootstrap/dist/css/bootstrap.min.css'
import './Graph.css'
import { LineChart, XAxis, Tooltip, Line, YAxis, Label } from "recharts"

const Graph = props => {
    const sigmaLine = props.result.lineSigma // Массив рассчитанных напряжений
    const maxSigma = Math.round(props.result.sigma) // Максимальное напряжение
    const limit = props.result.limit // Предел прочности

    return (
        <>
            {sigmaLine.length != 0 &&
                <LineChart
                    width={900}
                    height={400}
                    data={sigmaLine}
                    margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
                >
                    <XAxis type="number" dataKey="N" >
                        <Label value="Осевая сила" offset={-5} position="insideBottom" />
                    </XAxis>
                    <YAxis
                        type="number"
                        domain={[0, maxSigma]} // Масштаб
                    >
                        <Label value="Напряжение" angle={-90} offset={-5} position="insideLeft" />
                    </YAxis>
                    <Tooltip /> {/* Всплывающая подсказка */}
                    <Line name="Напряжение" type="monotone" dataKey="sigma" stroke="#00710f" dot={false} />

                    {/* Условие отображения предела прочности */}
                    {limit < maxSigma &&
                        <Line name="Предел" type="monotone" dataKey="limit" stroke="#ff0000" dot={false} />
                    }
                </LineChart>
            }
        </>
    )
}

export default Graph