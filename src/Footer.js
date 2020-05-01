import React, { Component } from 'react';
class Footer extends Component {
    render() {
        const style = {
            height: 50,
            marginTop: 20

        }

        const style2 = {

            backgroundColor: '#737373 '

        }

       

        return (
            <div className="container-fluid text-white " style={style2}>
                <div className="row">
                    <div className=" border-secondary mb-3 col-sm-12 col-md-4 col-lg-4 col-xl-4 text-center " >
                        <h2><img src="/man-with-cane-8.svg" alt="" style={style}></img>ปลอดภัย </h2>

                        {/* <h5><img src="/man-with-cane-1.svg" alt="" style={style}></img>มีความเสี่ยง</h5>
                        <h5><img src="/man-with-cane-2.svg" alt="" style={style}></img>ไม่ปลอดภัย</h5> */}
                    </div>
                    <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 text-center">
                        <h2><img src="/man-with-cane-9.svg" alt="" style={style}></img>มีความเสี่ยง</h2>
                    </div>
                    <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 text-center">
                        <h2><img src="/man-with-cane-10.svg" alt="" style={style}></img>ไม่ปลอดภัย</h2>
                    </div>
                </div>
            </div>

        )
    }
}
export default Footer