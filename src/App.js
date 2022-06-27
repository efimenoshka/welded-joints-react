import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import React, { Component } from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './containers/home-page/HomePage'
import WeldedJoints from './containers/welded-joints/WeldedJoints'
import Detail from './containers/detail/Detail'
import Calculation from './containers/calculation/Calculation'
import Welding from './containers/welding/Welding'

class App extends Component {
  render() {
    return (
      <Routes>
        <Route path={'/'} element={<HomePage/>}/>
        <Route path={'/:type'} element={<WeldedJoints />}/>
        <Route path={'/:type/:name'} element={<Detail />}/>
        <Route path={'/calculation'} element={<Calculation />}/>
        <Route path={'/welding'} element={<Welding />}/>
      </Routes>
    )
  }
}

export default App;
