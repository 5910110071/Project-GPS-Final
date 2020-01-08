import React, { Component } from 'react';

class Header extends Component{
    render(){
        const style = {
            height: 70,
            marginTop: 20

        }
        return(
                <h1 className="text-success"> <img src="/alarm.svg" alt="" style={style}></img> ระบบติดตามผู้สูงอายุ อบต.ท่าข้าม</h1>
            
        )
    }
}
export default Header; 