import React, { Component } from 'react';
class Footer extends Component {
    render() {
        const style = {
            height: 70,
            marginTop: 20

        }
        return (
            <div className="container-fluid ">
                <div className="row">
                    <div className="col-md-4">
                        <h1><img src="/man-with-cane-0.svg" alt="" style={style}></img>ปลอดภัย</h1>
                    </div>
                    <div className="col-md-4">
                        <h1><img src="/man-with-cane-1.svg" alt="" style={style}></img>มีความเสี่ยง</h1>
                    </div>
                    <div className="col-md-4">
                        <h1><img src="/man-with-cane-2.svg" alt="" style={style}></img>ไม่ปลอดภัย</h1>
                    </div>

                </div>
            </div>

        )
    }
}
export default Footer