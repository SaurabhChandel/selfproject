import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
//import './login.css';
import axios from 'axios';
import Modal from 'react-awesome-modal';
import Fetch from '../Fecth/fetch';

class Userpage extends Component {
    state = {
        redirect: false
        
    }
    setRedirect = () => {
        this.setState({
            redirect: true
        })
        this.closeModal()
        window.location.reload();
         
    }
    renderRedirect = () => {
        if (this.state.redirect) {
            return < Redirect to='/userpage' />
        }
    }



    constructor(props) {
        super(props);
        this.state = {

            visible: false,
            firstName: '',
            lastName: '',
            mobileNo: '',
            email: '',
            place: '',
            designation: ''


        }
    }
    
    
    


    changeHandler = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    submitHandler = e => {
        e.preventDefault()
        console.log(this.state)
        axios
            .post('http://3b31db62.ngrok.io/user/save', this.state)

            
            .then(response => {

                console.log(response)
                this.setState({
                    redirect:true
                })
                

            })
            .catch(error => {

                console.log(error)

            })

    }

    openModal() {
        this.setState({
            visible: true
        });
    }

    closeModal() {
        this.setState({
            visible: false
        });
    }


    render() {
        const { firstName, lastName, mobileNo, email, place, designation } = this.state
        return (
            <div>

                <div>


                    <header className="heading">

                        <nav className="toolbar_navigation" style={{ background: "rgb(2, 147, 243)" }}>

                            <div className="toolbar_logo">

                                <img
                                    src={require("/home/nineleaps/Desktop/onproject/onproject/src/Component/pages/user/nine1.jpg")}
                                    width="225"
                                    height="70"
                                    className="d-inline-block align-top"
                                    alt="React Bootstrap logo"
                                />
                            </div>
                            <div className="spacer" />
                            <div className="toolbar_navigation-items">
                                <ul >
                                    <li ><a href='/Homepage' style={{ color: "white" }}>Checklist</a></li>
                                    <li ><a href='/Userpage' style={{ color: "white" }}>Users</a></li>
                                    <li ><a href='./writeblog' style={{ color: "white" }}>Blog</a></li>
                                    <li ><a href='./faqdis' style={{ color: "white" }} >FAQ</a></li>
                                    <li ><a href='/' style={{ color: "white" }}>Logout</a></li>
                                </ul>
                            </div>
                        </nav>
                        <section style={{
                            position: "absolute",
                            top: "28%",
                            right: "50%"
                        }}>
                            <input type="button"  value="Add user" onClick={() => this.openModal()} />
                           
                          <Modal visible={this.state.visible} width="800" height="600" effect="fadeInUp" onClickAway={() => this.closeModal()}>
                            
                                <div>
                      

                                    <form onSubmit={this.submitHandler}  style={{paddingTop:"10px", paddingRight:"40px",paddingLeft:"40px"}}>
                                        <br />
                                        <div class="form-group">
                                            <label for="formGroupExampleInput">FirstName</label>
                                            <input required type="text" name="firstName" value={firstName} class="form-control" onChange={this.changeHandler} placeholder="First Name" />
                                        </div>
                                        <div class="form-group">
                                            <label for="formGroupExampleInput2">LastName</label>
                                            <input required type="text" name="lastName" value={lastName} class="form-control" onChange={this.changeHandler} placeholder="Last Name" />
                                        </div>
                                        <div class="form-group">
                                            <label for="formGroupExampleInput2">MobileNo</label>
                                            <input type="text" pattern="[6789]{1}[0-9]{9}" title="Please Enter a Valid Phone Number" name="mobileNo" value={mobileNo} onChange={this.changeHandler} class="form-control" placeholder="Mobile No." />
                                        </div>

                                        <div class="form-group">
                                            <label for="formGroupExampleInput2">Email</label>
                                            <input required type="email" title="Please Enter a Valid Email" name="email" value={email} onChange={this.changeHandler} class="form-control" placeholder="Email" />
                                        </div>
                                        <div class="form-group">
                                            <label for="formGroupExampleInput2">Place</label>
                                            <input required type="text" name="place" value={place} onChange={this.changeHandler} class="form-control" placeholder="Place" />
                                        </div>
                                        <div class="form-group">
                                            <label for="formGroupExampleInput2">Designation</label>
                                            <input required type="text" name="designation" value={designation} onChange={this.changeHandler} class="form-control" placeholder="Designation" />
                                        </div>

                                        {this.renderRedirect()}
                                        <input type="submit" value="Save" style={{ backgroundColor: "#007bff" }} />
                                     
                                    </form>
                          




                                </div>
                            </Modal>
                        </section>
                    </header>

                    <Fetch />


                    <div class="footer">
                        <p>Nineleaps</p>
                    </div>
                </div>
            </div>

        );
    }
}

export default Userpage;