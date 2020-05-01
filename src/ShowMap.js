import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow, } from 'google-maps-react';
import trim from 'trim'
import ShowData from './ShowData'
import ShowData2 from './ShowData2'
import Header from './Header'
import './App.css';
//import firebase from 'firebase';
import _ from 'lodash';
import mapStyles from "./mapStyles";
import mapStyles2 from "./mapStyles2";
class ShowMap extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stores: [],
            stores2: [],
            selectedPark2: null,
            input: "",
            isRegister: false,
            number: "",
            image: null,
            url: '',
            progress: 0
        }
        this.addInput = this.addInput.bind(this)
    }
    componentWillReceiveProps(newProps) {
        if (this.props.islogin == false) {
            this.setState({
                stores: [],
                isRegister: false,
                selectedPark2: null
                
            })
        }
        

        // this.setState({
        //     input: this.props.input
        // })
        if (this.props.uid == "kiSFefieTjfQaCqvxQbVrEFrX1Z2") {
            let app = this.props.firebase.database().ref('gps_devices');
            app.on('value', snapshot => {
                this.getData2(snapshot.val());
            });
        }
        else if (this.props.uid) {
            let app = this.props.firebase.database().ref('Uid');
            app.on('value', snapshot => {
                this.getData(snapshot.val());
            });
        }

    }

    getData(values) {
        let messagesVal = values;
        let messages = _(messagesVal)
            .keys()
            .map(messageKey => {
                let cloned = _.clone(messagesVal[messageKey]);
                cloned.key = messageKey;
                return cloned;
            }).value();

        let findUid = messages.find(message => this.props.uid == message.key)
        if (findUid) {
            let app2 = this.props.firebase.database().ref('gps_devices');
            app2.on('value', snapshot => {
                let messagesVal2 = snapshot.val();
                let messages2 = _(messagesVal2)
                    .keys()
                    .map(messageKey => {
                        let cloned = _.clone(messagesVal2[messageKey]);
                        cloned.key = messageKey;
                        return cloned;
                    }).value();

                let findUid2 = messages2.find(message2 => findUid.Number == message2.key)
                if (findUid2) {
                    // let key = findUid2.key;
                    // let loc = (findUid2.GPSLoc).split(",");
                    // let lat = +loc[0];
                    // let lng = +loc[1];

                    let key = findUid2.key;
                     //let loc = (message.GPSLoc).split(",");
                    let lat = +findUid2.latitude;
                    let lng = +findUid2.longitude;

                    let messageNodes = {
                        parkId: key,
                        lat: lat,
                        lng: lng,
                        Name: findUid.Name,
                        Address: findUid.Address,
                        Age: findUid.Age,
                        Tel: findUid.Tel,
                        State: findUid2.State,
                        Image: findUid.Image
                    }
                    this.setState({
                        stores: messageNodes,
                        isRegister: true,
                        number: messageNodes.parkId
                    })
                }
            });
        }
    }

    getData2(values) {
        let messagesVal = values;
        let messages = _(messagesVal)
            .keys()
            .map(messageKey => {
                let cloned = _.clone(messagesVal[messageKey]);
                cloned.key = messageKey;
                return cloned;
            }).value();

        let app2 = this.props.firebase.database().ref('Uid');
        app2.on('value', snapshot => {
            let messagesVal2 = snapshot.val();
            let messages2 = _(messagesVal2)
                .keys()
                .map(messageKey => {
                    let cloned = _.clone(messagesVal2[messageKey]);
                    cloned.key = messageKey;
                    return cloned;
                }).value();

            let messageNodes2 = messages2.map((message2) => {

                return {
                    parkId: message2.Number,
                    Name: message2.Name,
                    Address: message2.Address,
                    Age: message2.Age,
                    Tel: message2.Tel,
                    Image: message2.Image
                }
            });

            let messageNodes = messages.map((message) => {
                let key = message.key;
                //let loc = (message.GPSLoc).split(",");
                let lat = +message.latitude;
                let lng = +message.longitude;
                return {
                    parkId: key,
                    lat: lat,
                    lng: lng,
                    State: message.State
                }
            });
            this.setState({
                stores: messageNodes,
                stores2: messageNodes2,
                isRegister: true
            });
            console.log(this.state)
        });

    }

    displayMarkers = () => {
        console.log("1")
        return this.state.stores.map((store, index) => {
            return <Marker
                key={index}
                id={index}
                position={{
                    lat: store.lat,
                    lng: store.lng
                }}
                onClick={() => {
                    this.setState({ selectedPark2: store });
                    this.props.onAddOrder(this.state.selectedPark2)
                }}
                icon={{
                    url: '/man-with-cane-' + store.State + '.svg',
                    scaledSize: new window.google.maps.Size(50, 50)

                }} />

        })
    }

    displaySingleMarkers = () => {
        console.log("2")
        return <Marker
            key={0}
            id={0}
            position={{
                lat: this.state.stores.lat,
                lng: this.state.stores.lng
            }}
            onClick={() => {
                this.setState({ selectedPark2: this.state.stores });
                this.props.onAddOrder(this.state.selectedPark2)
            }}
            icon={{
                url: '/man-with-cane-' + this.state.stores.State + '.svg',
                scaledSize: new window.google.maps.Size(50, 50)

            }} />
    }

    displayMarkers2 = () => {
        console.log("3")
        return this.state.stores.map((store, index) => {
            return <Marker
                key={index}
                id={index}
                position={{
                    lat: store.lat,
                    lng: store.lng
                }}
                onClick={() => {

                    this.setState({ selectedPark2: store });
                    this.props.onAddOrder(this.state.selectedPark2)
                }}
                icon={{
                    url: '/man-with-cane-' + store.State + '.svg',
                    scaledSize: new window.google.maps.Size(50, 50)

                }} />

        })
    }

    displaySingleMarkers2 = () => {
        console.log("4")
        let findOrder3 = this.state.stores.find(store => store.parkId == this.state.input)
        if (findOrder3) {
            return <Marker
                key={0}
                id={0}
                position={{
                    lat: findOrder3.lat,
                    lng: findOrder3.lng
                }}
                onClick={() => {
                    this.setState({ selectedPark2: findOrder3 });
                    this.props.onAddOrder(this.state.selectedPark2)
                }}
                icon={{
                    url: '/man-with-cane-' + findOrder3.State + '.svg',
                    scaledSize: new window.google.maps.Size(50, 50)

                }} />
        }
        else
            return this.displayMarkers2()




    }
    onChange = e => {
        const { name, value } = e.target
        this.setState({
            [name]: value
        })
        console.log(this.state)
    }
    onChange2 = e => {

        if (e.target.files[0]) {
            const image = e.target.files[0];
            this.setState(() => ({ image }));
        }
        console.log(this.state)
    }

    onSubmit = e => {
        e.preventDefault()
        // const { number } = this.state
        // let dbCon = this.props.firebase.database().ref('/Uid/' + this.props.uid);
        // dbCon.set({
        //     Number: trim(number)
        // });

        const { image } = this.state;
        const uploadTask = this.props.firebase.storage().ref(`images/${image.name}`).put(image);
        uploadTask.on('state_changed',
            (snapshot) => {
                // progrss function ....
                const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                this.setState({ progress });
            },
            (error) => {
                // error function ....
                console.log(error);
            },
            () => {
                // complete function ....
                this.props.firebase.storage().ref('images').child(image.name).getDownloadURL().then(url => {
                    //console.log(url);
                    //this.setState({ url });
                    const { number, address, age, name, tel } = this.state
                    let dbCon = this.props.firebase.database().ref('/Uid/' + this.props.uid);
                    dbCon.set({
                        Number: trim(number),
                        Name: trim(name),
                        Age: trim(age),
                        Tel: trim(tel),
                        Address: trim(address),
                        Image: url
                    });
                })
            });
    }

    addInput(Index) {
        this.setState({
            input: Index,
            selectedPark2 :null
        })
    }
    render() {
        console.log(this.state.selectedPark2)

        const style = {
            width: '100%',
            height: '100%'
        }
        let a
        if (this.props.uid == "kiSFefieTjfQaCqvxQbVrEFrX1Z2") {

            if (this.state.input == "") {
                a = this.displayMarkers2()
            }

            else {
                a = this.displaySingleMarkers2()
            }

        }
        else {
            a = this.displaySingleMarkers()
        }

        if (!this.props.islogin) {
            return (
                <div className="card text-center text-danger">
                    <h2>กรุณาเข้าสู่ระบบ ! !</h2>
                    <Map
                        google={this.props.google}
                        zoom={17}
                        styles={mapStyles2}
                        initialCenter={{ lat: 7.617303, lng: 99.567650 }}
                        onClick={this.onMapClicked}
                        containerStyle={{ width: '100%', height: '700px', position: 'relative' }}
                        style={style}
                    ></Map>
                </div>
            )
        }
        else if (!this.state.isRegister && this.props.uid && this.props.islogin) {
            return (
                <section className="container card shadow text-center py-3"><h4>กรุณากรอกข้อมูลผู้สูงอายุ</h4><hr />
                    <div className="columns is-centered text-left">
                        <div className="column is-half">
                            <form onSubmit={this.onSubmit} >

                                <div className="field">
                                    <h5>หมายเลขอุปกรณ์ติดตาม</h5>
                                    <div className="control">
                                        <input className="input" type="text" name="number" onChange={this.onChange} />
                                    </div>
                                </div>

                                <div className="field">
                                    <h5>ชื่อ-นามสกุล</h5>
                                    <div className="control">
                                        <input className="input" type="text" name="name" onChange={this.onChange} />
                                    </div>
                                </div>

                                <div className="field">
                                    <h5>อายุ</h5>
                                    <div className="control">
                                        <input className="input" type="text" name="age" onChange={this.onChange} />
                                    </div>
                                </div>

                                <div className="field">
                                    <h5>ที่อยู่</h5>
                                    <div className="control">
                                        <input className="input" type="text" name="address" onChange={this.onChange} />
                                    </div>
                                </div>

                                <div className="field">
                                    <h5>เบอร์โทรศัพท์ผู้ดูแล</h5>
                                    <div className="control">
                                        <input className="input" type="text" name="tel" onChange={this.onChange} />
                                    </div>
                                </div>

                                <div className="field">
                                    <h5>เพิ่มรูปภาพ</h5>
                                    <div className="control">
                                        <input className="input" type="file" name="image" onChange={this.onChange2} />
                                        {/* <button className="button is-link">Upload</button> */}
                                    </div>
                                </div>
                                {/* {message ? <p className="help is-danger">{message}</p> : null} */}
                                <div className="field is-grouped">
                                    <div className="control align-self-end ml-auto">
                                        <button className="btn btn-light btn btn-outline-dark">ยืนยัน</button>
                                    </div>
                                </div>
                                <progress className="float-right" value={this.state.progress} max="100" />
                            </form>
                        </div>
                    </div>

                </section>
                // <div className = "container card">
                //     <form>
                //         <div class="form-group">
                //             <label for="exampleInputEmail1">Email address</label>
                //             <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                //             <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                //         </div>
                //         <div class="form-group">
                //             <label for="exampleInputPassword1">Password</label>
                //             <input type="password" class="form-control" id="exampleInputPassword1" />
                //         </div>
                //         <div class="form-group form-check">
                //             <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                //             <label class="form-check-label" for="exampleCheck1">Check me out</label>
                //         </div>
                //         <button type="submit" class="btn btn-primary">Submit</button>
                //     </form>
                // </div>


            )
        }

        else if (this.state.isRegister) {
            return (

                <div>
                    <ShowData2 data={this.state.stores} data2={this.state.stores2} onAddInput={this.addInput} uid={this.props.uid} />

                    <div className="card shadow ">

                        <Map
                            google={this.props.google}
                            zoom={17}
                            styles={mapStyles2}
                            initialCenter={{ lat: 7.617303, lng: 99.567650 }}
                            onClick={this.onMapClicked}
                            containerStyle={{ width: '100%', height: '500px', position: 'relative' }}
                            style={style}
                        >
                            {a}
                            {this.state.selectedPark2 && (

                                <InfoWindow
                                    onClose={this.onInfoWindowClose}
                                    visible={true}
                                    position={{
                                        lat: this.state.selectedPark2.lat,
                                        lng: this.state.selectedPark2.lng
                                    }} >
                                    <div>
                                        <p>{this.state.selectedPark2.parkId}</p>
                                    </div>
                                </InfoWindow>
                            )
                            }
                        </Map>
                    </div>


                    <ShowData data={this.state.stores} data2={this.state.stores2} onAddInput={this.addInput} uid={this.props.uid} />

                </div>
            );
        }
        else {
            return (
                <div>

                </div>
            )
        }
    }
}
export default GoogleApiWrapper({
    apiKey: 'AIzaSyAEKz4zf3LOHpRzUE0B2PTWQCWIAscmfDw'
})(ShowMap);





