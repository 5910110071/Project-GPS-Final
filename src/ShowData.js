import React, { Component } from 'react';

class ShowData extends Component {
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
        if (this.props.uid == "kiSFefieTjfQaCqvxQbVrEFrX1Z2") {
            console.log(this.props.data)

            let a = this.props.data2.map(data2 => {
                return (
                    <div className="col-sm-12 col-md-6 col-lg-3 col-xl-3">
                        < ul className="list-unstyled text-left card shadow" >
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
                    <div className="row">
                        <div className="col-sm-12 col-md-6 col-lg-7 col-xl-8">
                            <form onSubmit={e => {
                                e.preventDefault();
                                this.props.onAddInput(this.state.name)
                            }} >
                                <h2>ค้นหาตำแหน่งผู้สูงอายุรายบุคคล</h2>



                                {/* <input type="text" class="form-control" id="" placeholder="กรอกข้อมูลหมายเลข" onChange={e => {

                                    this.setState({
                                        name: e.target.value
                                    })

                                }}
                                /> */}

                                <div class="input-group mb-3">
                                    <input type="text" class="form-control" placeholder="กรอกข้อมูลหมายเลขอุปกรณ์ติดตามเช่น 001" aria-label="Recipient's username" aria-describedby="button-addon2" onChange={e => {

                                        this.setState({
                                            name: e.target.value
                                        })

                                    }} />
                                    <div class="input-group-append">
                                        <button class="btn btn-outline-secondary">ค้นหา</button>
                                    </div>
                                </div>


                                {/* <button class="btn btn-primary" >Submit</button> */}
                            </form>
                        </div>

                    </div >

                    <h2>ข้อมูลผู้สูงอายุ</h2>
                    <div className="row">
                        {a}
                    </div>

                </div>
            )


        }
        else if (this.props.uid == "") {
            return (
                <div className="container-fluid" style={style} >

                </div>
            )

        }
        else {
            if (this.props.data.State == "10")
                return (
                    <div className="container-fluid">
                        <div className="row d-flex justify-content-center">
                            <div className="col-sm-12 col-md-6 col-lg-3 col-xl-3 " style={style} >

                                <h3>ข้อมูลผู้สูงอายุ</h3>
                                <img src="/red-light-all-vector-pink-rays.gif" alt="" style={style}></img>
                                <ul className="list-unstyled text-left card shadow  d-flex justify-content-center text-white bg-danger">
                                    <img src={this.props.data.Image} alt="" height="300" wigth="400" className="img-thumbnail mt-2 ml-2 mb-2 mr-2 " style={style2}></img>
                                    <li className="mt-2 ml-2 " > <h3>หมายเลข : {this.props.data.parkId} </h3></li>
                                    <li className="mb-1 ml-2 " > <h3>ชื่อ : {this.props.data.Name} </h3></li>
                                    <li className="mb-1 ml-2 " > <h3>อายุ : {this.props.data.Age} </h3></li>
                                    <li className="mb-1 ml-2 " > <h3>ที่อยู่ : {this.props.data.Address} </h3></li>
                                    <li className="mb-1 ml-2 " > <h3>เบอร์ผู้ดูแล : {this.props.data.Tel} </h3></li>
                                </ul>
                            </div>
                        </div>

                    </div>

                )
            else
                return (
                    <div className="container-fluid">
                        <div className="row d-flex justify-content-center">
                            <div className="col-sm-12 col-md-6 col-lg-3 col-xl-3 " style={style} >

                                <h3>ข้อมูลผู้สูงอายุ</h3>
                                <ul className="list-unstyled text-left card shadow  d-flex justify-content-center ">
                                    <img src={this.props.data.Image} alt="" height="300" wigth="400" className="img-thumbnail mt-2 ml-2 mb-2 mr-2 " style={style2}></img>
                                    <li className="mt-2 ml-2 " > <h3>หมายเลข : {this.props.data.parkId} </h3></li>
                                    <li className="mb-1 ml-2 " > <h3>ชื่อ : {this.props.data.Name} </h3></li>
                                    <li className="mb-1 ml-2 " > <h3>อายุ : {this.props.data.Age} </h3></li>
                                    <li className="mb-1 ml-2 " > <h3>ที่อยู่ : {this.props.data.Address} </h3></li>
                                    <li className="mb-1 ml-2 " > <h3>เบอร์ผู้ดูแล : {this.props.data.Tel} </h3></li>
                                </ul>
                            </div>
                        </div>

                    </div>

                )


        }

    }

}
export default ShowData