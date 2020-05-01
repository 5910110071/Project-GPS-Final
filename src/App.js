import React, { Component } from 'react';
import ShowMap from './ShowMap'
import Header from './Header'
import Footer from './Footer'
import './App.css';
import ShowData from './ShowData'
import firebase from 'firebase';
import LoginForm from './LoginForm'


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      Elderly: {},
      input: "",
      login: false,
      uid: ""

    }
    var firebaseConfig = {
      apiKey: "AIzaSyCE3ZhOru6vY2ghqSHNRB2_KTITofMT6CY",
      authDomain: "gpsproject-7e9f5.firebaseapp.com",
      databaseURL: "https://gpsproject-7e9f5.firebaseio.com",
      projectId: "gpsproject-7e9f5",
      storageBucket: "gpsproject-7e9f5.appspot.com",
      messagingSenderId: "149027467128",
      appId: "1:149027467128:web:51173bae446babe3"
    };

    firebase.initializeApp(firebaseConfig);

    this.addOrder = this.addOrder.bind(this)
    this.logout = this.logout.bind(this)
    this.login = this.login.bind(this)
    this.findUid = this.findUid.bind(this)
  }

  addOrder(Select) {
    this.setState({
      Elderly: Select
    })
  }



  login() {
    this.setState({
      login: true
    })
  }

  logout() {
    this.setState({
      login: false
    })
  }

  findUid(uid) {
    this.setState({
      uid: uid
    })
  }

  render() {
    const style2 = {

      backgroundColor: '#e6e6e6'

    }
    return (
      <div className="container-fluid" style={style2}>
        <div className="row mb-4">
          
            <LoginForm f={firebase} logout={this.logout} login={this.login} findUid={this.findUid} />
          
        </div>
        <ShowMap onAddOrder={this.addOrder} input={this.state.input} firebase={firebase} findUid={this.findUid} islogin={this.state.login} uid={this.state.uid} />
        <div className="row">

          <Footer />


        </div>





      </div>
    );
  }
}


export default App;
