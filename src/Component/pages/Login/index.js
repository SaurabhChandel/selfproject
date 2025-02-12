import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
//import './login.css';
import axios from 'axios';
import './index.css';

import { makeStyles, recomposeColor } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField'
import clsx from 'clsx';

class Login extends Component {


    state = {
        redirect: false,
        
    }
    setRedirect = () => {
        this.setState({
            redirect: true
        })
    }
    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='/homepage' />
        }
    }

    
    constructor(props) {
        super(props)
        this.state = {
           
            username: '',
            password: ''

        }

    }
    changeHandler = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    submitHandler = (e) => {
        

    }





    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    handleSubmit = event => {
        event.preventDefault();
        
        console.log(this.state)
        axios.post('http://3b31db62.ngrok.io/authenticate', this.state)
        
          
            .then(response => {

                console.log(response)
                if(response.status==200){
                this.setState({
                    redirect: true
                })
            }
        


            })
            .catch(error => {

                console.log(error)

            })


    }


    render() {
        const { username, password } = this.state
        

        return (

            <div>          
           <header className="heading" >
     
            <nav className="toolbar_navigation">

         <div className="toolbar_logo">
   
             <img
                     src={require("/home/nineleaps/Desktop/onproject/onproject/src/Component/pages/user/nine1.jpg")}
                     width="150"
                     height="70"
                     className="d-inline-block align-top"
                     alt="React Bootstrap logo"
                     />
        </div>
       <div className="spacer"/>
       <div className="toolbar_navigation-items" >
              <ul >
               <li><a href='/'>Login</a></li> 
               <li><a href='/'>Register</a></li>
              </ul>
          </div>
    </nav>
</header>
           
            <div className="Login">
                
              <form onSubmit={this.handleSubmit} style={{width:"50"}}>
                
                
                <div className='box'>
              <div className="inputfield">
                           
    
                        <h1 style={{alignItems:"center", color:"white"}}>Welcome Admin</h1>
                        <TextField onChange={(e)=>this.handleChange}
                            id="standard-text-input"
                            label="Email"
                    
                            type="email"
                            title="Please Enter  a valid Email"
                            autoComplete="current-Email"
                            margin="normal"
                            
                           
                        />     
                 

                <br/>
                        <TextField onChange={(e)=>this.handleChange}
                                id="standard-password-input"
                                label="Password"
                              
                                type="password"
                                pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})"
                                title="Password must contain upercase,numeric,lowercase and special character "
                                autoComplete="current-password"
                                margin="normal"
                                color="white"
                                
                               
                            
                            />  
                 </div>

                        
                         <div className="button" >
                             {this.renderRedirect()}
                             <input type="submit" value="Login" style={{  marginLeft: "-42px" }} />
                             {/* <button onClick={this.setRedirect}>Homepage</button> */} 
                         </div>
                         </div>
                </form>


               
                    <div className="footer">
                         <p style={{marginLeft:"550px"}}>Nineleaps</p>
                    </div> 
            </div>
            </div>

            
        );

    }
}

export default Login;

