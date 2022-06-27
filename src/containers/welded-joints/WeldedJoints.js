import 'bootstrap/dist/css/bootstrap.min.css'
import axios from './../../axios/axios-weldet-joints'
import React, { Component } from 'react'
import { Row } from 'react-bootstrap'
import { withRouter } from '../../hoc/withRouter'
import WeldedJointsCard from '../../components/welded-joints-card/WeldedJointsCard'
import Navbarr from '../../components/navbar/Navbar'
import Filters from '../../components/filters/Filters'
import "./WeldedJoints.css"

class WeldedJoints extends Component {
  state = {
    data: [],
    type: '',
    params: {
    },
    isRange: true
  }

  async componentDidMount() {
    var type = this.props.params.type
    type = type.split('').splice(0, type.length - 2)
    type.push('о', 'е')
    type = type.join('')
    const params = {
      type: type
    }
    const response = await axios.get('/all', { params: params })
    const data = response.data
    this.setState({ data, type, params })
  }

  handlerClick = name => {
    this.props.navigate(`/${this.state.type}/${name}`)
  }

  handlerSelectChange = async (name, value) => {
    const params = this.state.params
    let isRange = this.state.isRange
    if (name === "edgeShape") {
      if (value !== 'Все') params.edgeShape = value
      else delete params.edgeShape
    }
    if (name === "character") {
      if (value !== 'Все') params.character = value
      else delete params.character
    }
    if (name === "min") {
      params.widthMin = {}
      if (value !== '') params.widthMin = Number(value)
      else delete params.widthMin
    }
    if (name === "max") {
      if (value !== '') params.widthMax = value
      else delete params.widthMax
    }
    if (name === 'range') {
      if (value === "Диапазон") isRange = true
      else isRange = false
    }
    if (name === "one") {
      if (value !== '') params.one = value
      else delete params.one
    }

    const response = await axios.get('/all', { params: params })
    const data = response.data

    this.setState({
      data, params, isRange
    })
  }

  render() {
    return (
      <div className='weldetJoints'>
        <Navbarr></Navbarr>
        <Row>
          <div className='col-10'>
            <div className='welded-joints-container'>
              {this.state.data.map((card, index) =>
                <WeldedJointsCard
                  key={card._id}
                  data={this.state.data[index]}
                  onClick={this.handlerClick}
                />)}
            </div>
          </div>
          <div className='col-2'>
            <Filters 
            onChange={this.handlerSelectChange} 
            isRange={this.state.isRange}
            />
          </div>
        </Row>
      </div>
    )
  }
}

export default withRouter(WeldedJoints)

