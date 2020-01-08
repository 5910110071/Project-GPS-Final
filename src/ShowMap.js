import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow, } from 'google-maps-react';
import firebase from 'firebase';
import _ from 'lodash';
import mapStyles from "./mapStyles";
class ShowMap extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stores: [],
            selectedPark2: null,
            input: null
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

        let app = firebase.database().ref('gps_devices');
        app.on('value', snapshot => {
            this.getData(snapshot.val());
        });

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
        console.log("test1");
        console.log(messages);

        let messageNodes = messages.map((message) => {
            //let key = +((message.key).substring(0, 1));
            let key = message.key;
            let loc = (message.GPSLoc).split(",");
            let lat = +loc[0];
            let lng = +loc[1];
            return {
                parkId: key,
                lat: lat,
                lng: lng,
                Name: message.Name,
                Address: message.Address,
                Age: message.Age,
                Tel: message.Tel,
                State: message.State
            }
        });

        this.setState({
            stores: messageNodes
        });
        //console.log("this.state.messages")
        //console.log(this.state.messages)
    }

    componentWillReceiveProps(newProps){
        this.setState({
            input : this.props.input
        })
        console.log("componentWillReceiveProps",this.state.input)
    }

    displayMarkers = () => {
        console.log(this.state.stores)
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
        let findOrder = this.state.stores.find(store => store.parkId == this.props.input)
        console.log(findOrder)
        if(findOrder){
             return <Marker
                key={0}
                id={0}
                position={{
                    lat: findOrder.lat,
                    lng: findOrder.lng
                }}
                onClick={() => {
                    this.setState({ selectedPark2: findOrder });
                    this.props.onAddOrder(this.state.selectedPark2)
                }}
                icon={{
                    url: '/man-with-cane-' + findOrder.State + '.svg',
                    scaledSize: new window.google.maps.Size(50, 50)

                }} />
        }
        else
            return this.displayMarkers()
           
    }


    render() {
        console.log("componentWillReceiveProps2",this.state.input)
        //console.log(this.state.input)
        const style = {
            width: '100%',
            height: '100%'
        }
        let a 
         if(this.state.input==null){
             a = this.displayMarkers()
         }
             
         else
             a = this.displaySingleMarkers()

        return (

            <Map
                google={this.props.google}
                zoom={17}
                styles={mapStyles}
                initialCenter={{ lat: 6.999411, lng: 100.495970 }}
                onClick={this.onMapClicked}
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

        );
    }

}
export default GoogleApiWrapper({
    apiKey: 'AIzaSyAEKz4zf3LOHpRzUE0B2PTWQCWIAscmfDw'
})(ShowMap);





