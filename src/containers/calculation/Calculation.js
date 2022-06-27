import 'bootstrap/dist/css/bootstrap.min.css'
import Navbarr from '../../components/navbar/Navbar'
import { Col, Row } from 'react-bootstrap'
import "./Calculation.css"
import InputData from '../../components/input-data/InputData'
import Result from '../../components/result/Result'
import { Component, useState } from 'react'
import { kWorkloadCalc, limitCalc, lwCalc, optNCalc, RwyCalc, sigmaCalc } from './calc-strength/butt'
import Graph from '../../components/graph/Graph'
import ModalTable from '../../components/modal-table/ModalTable'
import axios from '../../axios/axios-weldet-joints'

class Calculation extends Component {
    state = {
        butt: {
            N: {
                name: "N",
                value: 100,
                SI: "[кН]",
                descrip: "Осевая сила, проходящая через центр тяжести соединения"
            },
            lwFact: {
                name: "lw(факт)",
                value: 205,
                SI: "[мм]",
                descrip: "Фактическая длина шва"
            },
            t: {
                name: "s",
                value: 10,
                SI: "[мм]",
                descrip: "Наименьшая из толщин соединяемых элементов"
            },
            Ry: {
                name: "Ry",
                value: 250,
                SI: "[МПа]",
                descrip: "Расчетное сопротивление стали по пределу текучести"
            }
        },
        Yc: {
            name: "Yc",
            value: 0.9,
            SI: "[ - ]",
            descrip: "Коэффициент условий работы"
        },
        result: {
            lw: -1,
            Rwy: -1,
            sigma: -1,
            koef: -1,
            lineSigma: [

            ]
        },
        modalShow: false,
        isResult: false,
        YcData: []
    }

    handlerOnHideModal = () => {
        this.setState({
            modalShow: false
        })
    }

    handlerOnShowModal = () => {
        this.setState({
            modalShow: true
        })
    }

    handlerChange = (name, newValue) => {
        const a = Object.keys(this.state.butt)
        const b = this.state.butt
        a.map(item => {
            if (b[item].name === name) {
                b[item].value = newValue
            }
        })

        this.setState({
            butt: b
        })
    }

    handlerChangeYc = (newValue) => {
        const newYc = this.state.Yc
        newYc.value = newValue

        this.setState({
            Yc: newYc
        })
        this.handlerOnHideModal()
        console.log(newYc)
    }

    handlerClickCalc = () => {
        const lw = lwCalc(this.state.butt.lwFact.value, this.state.butt.t.value)
        const Rwy = RwyCalc(this.state.butt.N.value, this.state.butt.Ry.value)
        const sigma = sigmaCalc(this.state.butt.N.value, this.state.butt.t.value, lw)
        const kWorkload = kWorkloadCalc(this.state.butt.N.value, this.state.butt.t.value, lw, Rwy, this.state.Yc.value)
        const limit = limitCalc(Rwy, this.state.Yc.value)
        const optN = optNCalc(limit, this.state.butt.t.value, lw)

        const lineSigma = []
        for (let i = 0; i <= this.state.butt.N.value; i += 10) {
            const sigma0 = sigmaCalc(i, this.state.butt.t.value, lw)
            lineSigma.push({
                sigma: sigma0.toFixed(3),
                N: i,
                limit: limit
            })
        }

        const result = {
            lw: lw,
            Rwy: Rwy,
            sigma: sigma,
            koef: kWorkload,
            limit: limit,
            lineSigma: lineSigma
        }

        this.setState({
            result,
            isResult: true
        })

    }

    async componentDidMount() {
        const response = await axios.get('/kWorkingCondition')
        const arr = response.data
        const YcData = []
        arr.forEach((item) => {
            YcData.push({
                name: item.name,
                koef: item.koef
            })
        })
        this.setState({
            YcData
        })
      }

    render() {
        return (
            <div>
                <Navbarr />
                <Row>
                    <Col><h3>Расчет стыковых сварных соединений на прочность</h3></Col>
                </Row>
                <Row>
                    <Col>
                        <InputData
                            data={this.state.butt}
                            Yc={this.state.Yc}
                            onChange={this.handlerChange}
                            onCalc={this.handlerClickCalc}
                            onYcChange={this.handlerChangeYc}
                            onShowModal={this.handlerOnShowModal}
                        />
                    </Col>
                    <Col className='img-welded'><img name='img' src='https://1.downloader.disk.yandex.ru/preview/2fd27215dccfbbae2a8f8e4671c81c28caabdc9064fcdf1a38480b846861475c/inf/mp5eScJ8faS6PhZ4h9Z_CDjO4xRLPLarJCYKUhfj9eWdG1nJKCY4nZwSexO0h013GYTZquOYUBhjYfSTyr4B6w%3D%3D?uid=675240116&filename=%D0%94%D0%BB%D1%8F%20%D1%80%D0%B0%D1%81%D1%87%D0%B5%D1%82%D0%BE%D0%B2.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=675240116&tknv=v2&size=1920x937' /></Col>
                </Row>
                <Row>
                    <Col><Result result={this.state.result} isResult={this.state.isResult}/></Col>
                    <Col><Graph result={this.state.result}></Graph></Col>
                </Row>
                <ModalTable
                    data={this.state.YcData}
                    show={this.state.modalShow}
                    onHide={this.handlerOnHideModal}
                    onChangeYc={this.handlerChangeYc}
                />
            </div >
        )
    }
}

export default Calculation