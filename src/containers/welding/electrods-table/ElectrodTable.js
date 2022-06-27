import 'bootstrap/dist/css/bootstrap.min.css';
import TableHeader from './header/Header';
import "./ElectrodTable.css"

const MyTable = props => {
    return (
        <div style={{ width: "80%", margin: "auto" }} className='electrod-table'>
            <table>
                <thead>
                    <TableHeader />
                </thead>
            </table>
            <table>
                <tbody>
                    <tr className=''>
                        <td className='Mborder'>Э38</td>
                        <td className='Mborder'>380</td>
                        <td className='Mborder'>14</td>
                        <td className='Mborder'>300</td>
                        <td className='Mborder' rowSpan={4}>
                            Св-08<br />
                            Св-08ГС<br />
                            Св-08Г2С<br />
                        </td>
                        <td className='Mborder' rowSpan={4}>
                            Для сварки углеродистых и низколегированных конструкционных сталей при
                            σВ {`<`} 500 МПа {`(`}БСтЗ,
                            20, 08 кп, 25Г и др.{`)`}

                        </td>
                    </tr>
                    <tr>
                        <td>Э42</td>
                        <td>420</td>
                        <td>18</td>
                        <td>800</td>

                    </tr>
                    <tr>
                        <td>Э46</td>
                        <td>460</td>
                        <td>18</td>
                        <td>800</td>

                    </tr>
                    <tr className='last'>
                        <td>Э50"</td>
                        <td>500</td>
                        <td>16</td>
                        <td>700</td>

                    </tr>

                    <tr>
                        <td className='Mborder'>Э42А</td>
                        <td className='Mborder'>420</td>
                        <td className='Mborder'>22</td>
                        <td className='Mborder'>1500</td>
                        <td className='Mborder' rowSpan={3}>
                            Св-08А<br />
                            Св-08ГА<br />
                            Св-08Г2С<br />
                            Св-10НМА<br />
                        </td>
                        <td className='Mborder' rowSpan={3}>
                            То же, но для ответственных конструкций
                            предъявляются повышенные требования
                            по пластичности и
                            ударной вязкости
                            {`(`}20Х, 14ХГС и др.{`)`}
                        </td>
                    </tr>
                    <tr>
                        <td>Э46А</td>
                        <td>460</td>
                        <td>22</td>
                        <td>1400</td>

                    </tr>
                    <tr className='last'>
                        <td>Э50А</td>
                        <td>500</td>
                        <td>20</td>
                        <td>1300</td>
                    </tr>

                    <tr>
                        <td className='Mborder'>Э55</td>
                        <td className='Mborder'>550</td>
                        <td className='Mborder'>20</td>
                        <td className='Mborder'>1200</td>
                        <td className='Mborder' rowSpan={2}>
                            Св-08ГС<br />
                            Св-10ГН<br />
                            Св-12ГС<br />
                        </td>
                        <td className='Mborder' rowSpan={2}>
                            ТДля сварки углеродистых и низколегированных конструкционных сталей с σВ =
                            500 … 600 МПа {`(`}сталь
                            45, 35, 10Г2 и др.{`)`}
                        </td>
                    </tr>
                    <tr>
                        <td>Э60</td>
                        <td>600</td>
                        <td>18</td>
                        <td>1000</td>
                    </tr>
                </tbody>
            </table>

        </div>
    )
}

export default MyTable