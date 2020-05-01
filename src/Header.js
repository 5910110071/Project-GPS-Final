import React, { Component } from 'react';

class Header extends Component {
    render() {
        const style = {
            height: 50,
            marginTop: 20
           
        }
        const style2 = {

            backgroundColor: '#3b5998 '
        }

        return (
            <div className="container-fluid text-white py-3  "style={style2}>
                <h1> <img src="/alarm.svg" alt="" style={style}></img> ระบบติดตามตำแหน่งผู้สูงอายุ อบต.ท่าข้าม</h1>
                <hr/>
            </div>

        )
    }
}
export default Header; 