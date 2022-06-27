import 'bootstrap/dist/css/bootstrap.min.css'
import React, { Component } from 'react'
import Navbarr from '../../components/navbar/Navbar'
import './Detail.css'
import Model from '../../components/model/model'
import { withRouter } from '../../hoc/withRouter'
import axios from '../../axios/axios-weldet-joints'
import Drawing from '../../components/drawing/Drawing'
import { CardImg, Col, Row } from 'react-bootstrap'
import CardInfo from '../../components/card-info/CardInfo'
import MyTable from '../../components/table/Table'

class Detail extends Component {

  state = {
    name: '',
    drawing: '',
    info: [],
    sizes: [],
    model: 0
  }

  isModelHandler = (index) => {
    this.setState({model: index})
  }

  async componentDidMount() {
    const name = this.props.params.name
    const type = this.props.params.type
    const response = await axios.get('/all', { params: { type: type, name: name } })
    this.setState({
      name,
      drawing: response.data[0].drawing,
      info: {
        type: response.data[0].type,
        edgeShape: response.data[0].edgeShape,
        character: response.data[0].character,
        widthMin: response.data[0].widthMin,
        widthMax: response.data[0].widthMax,
      },
      sizes: response.data[0].size
    })
  }

  render() {
    return (
      <div>
        <Navbarr />
        <Row>
          <Col>
          <h3>Сварное соединение {this.state.name}</h3>
          </Col>
        </Row>
        <Row>
          <Col>
            <Model name={this.state.name} index={this.state.model}/>
          </Col>
          <Col className='center'>
            <Drawing drawing={this.state.drawing} />
          </Col>
        </Row>
        <Row>
          <Col className='card-info'>
            <CardInfo info={this.state.info}/>
          </Col>
          <Col className='table-info'>
            <MyTable sizes={this.state.sizes} />
          </Col>
        </Row>
      </div>
    )
  }
}

export default withRouter(Detail)