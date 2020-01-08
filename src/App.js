import React, { Component } from 'react';
import ShowMap from './ShowMap'
import Header from './Header'
import Footer from './Footer'
import './App.css';
import ShowData from './ShowData'


class App extends Component {
  
  constructor(props) {
    // console.log("app constructor")
    super(props);
    this.state = {
        Elderly : {},
        input : ""

    }
    this.addOrder = this.addOrder.bind(this)
    this.addInput = this.addInput.bind(this) 
 
  }

  addOrder(Select) {
    this.setState({
      Elderly: Select
      // orders : this.state.orders
    })
    console.log("this.state.Elderly",this.state.Elderly)
  }

  addInput(Index) {
    // console.log("index1",Index)
    // console.log("App setState")

    this.setState({
      input: Index
    })
    // console.log("index2",Index)
    // console.log("this.state.input",this.state.input)

    
  }
  render() {
    // console.log("App render")
    return (
      <div className="container-fluid py-2 d-flex flex-column mvh-100 text-center" >
        <Header />
        <div className="row py-3 flex-grow-1" >
          <div className="col-md-9">
            <div className="card shadow h-100">
              <ShowMap onAddOrder={this.addOrder} input = {this.state.input}/>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card shadow h-100">
              <ShowData data = {this.state.Elderly} onAddInput={this.addInput} />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}


export default App;
