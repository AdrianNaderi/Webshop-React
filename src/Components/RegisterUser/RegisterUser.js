import React, { useState } from 'react';
import classes from './RegisteUser.module.css';
//registration from done to be stored in a database that does not exist at the moment
//changes should be done going forward, as to connect to our API

function RegisterUser(props) {

    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password,setPassword] = useState(null);

  const handleInputChange = (e) => {
    const {id , value} = e.target;
    if(id === "name"){
        setName(value);
    }
    if(id === "email"){
        setEmail(value);
    }
    if(id === "password"){
        setPassword(value);
    }
}
const handleSubmit  = () => {
    console.log(name,email,password);
}

    return(
        <div className={classes.form}>
            <div className={classes.container}>
            <form>
            <div className={classes.row}>
                <div className={classes.column}>
                <div className={classes.comp2}>
                    <h2>REGISTER</h2>
                    <p>Register for this site allows you to access your order status
                    and history. Just fill in the fields below and we'll get a new
                    account set up for you in no time. We will only ask you for information.
                    </p>
                <div className={classes.formgroup}>
                    <label>Username</label>
                    <input type="text" name='name' id='name' value={name} onChange = {(e) => handleInputChange(e)}/>
                </div>

                <div className={classes.formgroup}>
                    <label>Email address</label>
                    <input type="text" name='email' id='email' value={email} onChange = {(e) => handleInputChange(e)}/>
                </div>

                <div className={classes.formgroup}>
                    <label>Password</label>
                    <input type="password" name='password' id='password' value={password} onChange = {(e) => handleInputChange(e)}/>
                </div>

                <p>Your personal data will be used to support your experience throughout
                    this website, to manage access to your account, and for other purposes
                    describe in our <a href ="url" className={classes.link}> privacy policy.</a>
                </p>
                <button  onClick={()=>handleSubmit()} type="submit" className={classes.buttontext}value="register">REGISTER </button>
                </div> 
                </div>
                </div>
            </form>  
            </div> 
        </div>
    )
}


export default RegisterUser