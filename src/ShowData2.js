import React, { Component } from 'react';

class ShowData2 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: ""
        }
    }

    render() {
        const style = {
            marginTop: 20

        }
        const style2 = {
            width: 100,
            height: 100
        }

        const style3 = {
            width: 100,
            height: 100
        }

        let items1 = []
        let items2 = []
        //console.log(this.props.data.length);

        for (var i = 0; i < this.props.data.length; i++) {
            if (this.props.data[i].State == "10")
                items1.push(this.props.data[i].parkId);
        }

        for (var i = 0; i < this.props.data2.length; i++) {
            for (var j = 0; j < items1.length; j++) {
                if (this.props.data2[i].parkId == items1[j])
                    items2.push(this.props.data2[i]);
            }
        }
        console.log(items2);


        if (this.props.uid == "kiSFefieTjfQaCqvxQbVrEFrX1Z2") {
            console.log(this.props.data)

            let a = items2.map(data2 => {
                return (
                    <div className="col-sm-12 col-md-6 col-lg-3 col-xl-3 ">
                        <img src="/red-light-all-vector-pink-rays.gif" alt="" style={style}></img>
                        < ul className="list-unstyled text-left card text-white bg-danger shadow" >
                            <img src={data2.Image} alt="" className="img-thumbnail mt-2 ml-2 mb-2 mr-2" style={style2}></img>
                            <li className="mt-2 ml-2 " > <h3>หมายเลข : {data2.parkId} </h3></li>
                            <li className="mb-1 ml-2 " > <h3>ชื่อ : {data2.Name} </h3></li>
                            <li className="mb-1 ml-2 " > <h3>อายุ : {data2.Age} </h3></li>
                            <li className="mb-1 ml-2 " > <h3>ที่อยู่ : {data2.Address} </h3></li>
                            <li className="mb-1 ml-2 " > <h3>เบอร์ผู้ดูแล : {data2.Tel} </h3></li>
                        </ul >
                    </div>
                )
            })


            return (
                <div className="container-fluid" style={style} >


                    {/* <h2>แจ้งเตือน</h2> */}
                    <div className="row d-flex justify-content-center">
                        {a}
                    </div>

                </div>
            )


        }
        else {
            return (
                <div className="container-fluid" style={style} >

                </div>
            )

        }
        // else {
        //     return (
        //         <div className="container-fluid">
        //             <div className="row d-flex justify-content-center">
        //                 <div className="col-sm-12 col-md-6 col-lg-3 col-xl-3 " style={style} >

        //                     {/* <h3>ข้อมูลผู้สูงอายุ</h3> */}
        //                     <ul className="list-unstyled text-left card shadow  d-flex justify-content-center ">
        //                         <img src={this.props.data.Image} alt="" height="300" wigth="400" className="img-thumbnail mt-2 ml-2 mb-2 mr-2 " style={style2}></img>
        //                         <li className="mt-2 ml-2 " > <h3>หมายเลข : {this.props.data.parkId} </h3></li>
        //                         <li className="mb-1 ml-2 " > <h3>ชื่อ : {this.props.data.Name} </h3></li>
        //                         <li className="mb-1 ml-2 " > <h3>อายุ : {this.props.data.Age} </h3></li>
        //                         <li className="mb-1 ml-2 " > <h3>ที่อยู่ : {this.props.data.Address} </h3></li>
        //                         <li className="mb-1 ml-2 " > <h3>เบอร์ผู้ดูแล : {this.props.data.Tel} </h3></li>
        //                     </ul>
        //                 </div>
        //             </div>

        //         </div>

        //     )

        // }

    }

}
export default ShowData2