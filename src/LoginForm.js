import React from 'react'
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"
import Header from './Header'

class LoginForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isSignedIn: false
        }
    }

    uiConfig = {
        signInFlow: "popup",
        signInOptions: [
            this.props.f.auth.GoogleAuthProvider.PROVIDER_ID,
            this.props.f.auth.FacebookAuthProvider.PROVIDER_ID
        ],
        callbacks: {
            signInSuccess: () => false
        }
    }

    logout = e => {
        e.preventDefault()
        this.props.f.auth().signOut().then(response => {
            this.setState({
                isSignedIn: false
            })
            this.props.logout()
            this.props.findUid("")

        })
    }

    componentDidMount() {
        this.props.f.auth().onAuthStateChanged(user => {
            if (user) {
                this.setState({
                    isSignedIn: !!user
                })
                //console.log("user", user.uid)
                this.props.findUid(user.uid)
                this.props.login()
            }
        })
    }

    render() {
        const style2 = {

            backgroundColor: '#3b5998 '

        }
        const style3 = {

            backgroundColor: '#3b5998 '

        }
        return (
            <div className="container-fluid text-center" style={style2} >
                <div className="row">
                    <div className="col-sm-12 col-md-8 col-lg-9 col-xl-9">
                        <Header />
                    </div>

                    <div className="col-sm-12 col-md-4 col-lg-3 col-xl-3">
                        {
                            this.state.isSignedIn ? (
                                <div className="text-white mt-3 float-right">
                                      
                                      <h3 >{this.props.f.auth().currentUser.displayName} <img className="rounded img-thumbnail img-fluid" alt="profile picture" src={this.props.f.auth().currentUser.photoURL} width="50" height="50"/></h3>
                                     
                                      <button className="btn btn-secondary btn-sm mb-3 " onClick={this.logout}><h3>ออกจากระบบ</h3></button>
                                    
                                    
                                     

                                    
                                   
                                </div>

                            ) : (
                                    <div className="text-white float-right py-3" style={style3} >
                                        <h3>เข้าสู่ระบบ</h3>
                                        <StyledFirebaseAuth
                                            uiConfig={this.uiConfig}
                                            firebaseAuth={this.props.f.auth()}
                                        />
                                    </div>
                                )
                        }
                    </div>





                </div>

            </div>
        )
    }
}

export default LoginForm