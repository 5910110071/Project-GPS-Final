import React, { Component } from 'react';

class ShowData extends Component {
    constructor(props) {
        console.log("constructor")
        super(props)
        this.state = {
            name: null
        }
    }

    onClickPreventDefault(e) {
        //this.props.onAddInput(this.state.name)
        //alert('onClickPreventDefault called, form will not submit');
        console.log("this.state.name", this.state.name);
        e.preventDefault();
        //this.props.onAddInput(this.state.name)

    }

    formPreventDefault(e) {
        alert('here');
        console.log(e);
        e.preventDefault();
    }

    render() {
        const style = {
            marginTop: 20
        }
        return (
            <div className="container-fluid title" style={style} >
                <div className="row">
                    <div className="col-md-12">
                        <form onSubmit={e => {
                            e.preventDefault();
                            console.log("this.state.name", this.state.name);
                            this.props.onAddInput(this.state.name)
                        }} >
                            <legend>ค้นหาข้อมูลผู้สูงอายุ</legend>

                            <div className="form-group">
                                <label for="">label</label>
                                <input type="text" class="form-control" id="" placeholder="กรอกข้อมูลหมายเลข" onChange={e => {

                                    // this.props.onAddInput(e.target.value)
                                    this.setState({
                                        name: e.target.value
                                    })
                                    //console.log(e);
                                    // console.log("this.state.name", this.state.name);

                                }}
                                />
                            </div>

                            <button class="btn btn-primary" >Submit</button>
                        </form>
                    </div>

                </div >

                <h2>ข้อมูลผู้สูงอายุ</h2>
                <ul className="list-unstyled text-left ">
                    <li className="mb-1 " > <h5>หมายเลข : {this.props.data.parkId} </h5></li>
                    <li className="mb-1 " > <h5>ชื่อ : {this.props.data.Name} </h5></li>
                    <li className="mb-1 " > <h5>อายุ : {this.props.data.Age} </h5></li>
                    <li className="mb-1 " > <h5>ที่อยู่ : {this.props.data.Address} </h5></li>
                    <li className="mb-1 " > <h5>เบอร์ผู้ดูแล : {this.props.data.Tel} </h5></li>
                </ul>
            </div>
        )
    }

}
export default ShowData