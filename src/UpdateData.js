/*import React, { Component } from 'react';
import ShowMap from './ShowMap';
import firebase from 'firebase';
import _ from 'lodash';

class UpdateData extends Component {
    constructor(porps) {
        super(porps);
        this.state = {
            messages : [],
            test : "a"
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
            let key = +((message.key).substring(0, 1));
            let loc = (message.GPSLoc).split(",");
            let lat = +loc[0];
            let lng = +loc[1];
            return {
                parkId: key,
                lat: lat,
                lng: lng
            }
        });

        this.setState({
            messages: messageNodes
        });
        console.log("this.state.messages")
        console.log(this.state.messages)
    }
    render() {
       
        return (
            <div>
            <ShowMap msg = { this.state.messages } />
            </div>
        );
    }
}
export default UpdateData;
*/