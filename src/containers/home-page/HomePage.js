import 'bootstrap/dist/css/bootstrap.min.css'
import axios from './../../axios/axios-weldet-joints'
import React, { Component } from 'react'
import classes from './HomePage.module.css'
import TypeCard from '../../components/type-card/TypeCard'
import { withRouter } from '../../hoc/withRouter'
import Navbarr from '../../components/navbar/Navbar'

class HomePage extends Component {
  state = {
    data: []
  }

  async componentDidMount() {
    const response = await axios.get('/types')
    const data = response.data
    this.setState({ data })
  }

  handlerClick = name => {
    this.props.navigate(`/${name}`)
  }

  handlerClickCalc = () => {
    this.props.navigate(`/calculation`)
  }

  render() {
    return (
      <div className={classes.HomePage}>
        <Navbarr></Navbarr>
        {this.state.data.map((card, index) =>
          <TypeCard
            key={card._id}
            data={this.state.data[index]}
            onClick={this.handlerClick}
          />)}
      </div>
    )
  }
}

export default withRouter(HomePage)

