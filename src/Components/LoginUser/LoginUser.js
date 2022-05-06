import { Label } from '@doist/todoist-api-typescript';
import React, { useState } from 'react'
import RegisterUser from '../RegisterUser/RegisterUser';
import classes from './LoginUser.module.css';

function LoginUser({ Login, error }) {
    const [details, setDetails] = useState({name: "", email: "", password: ""});

    const submitHandler = e => {
        e.preventDefault();

        Login(details);
    }


  return (
    <div className={classes.form}>
        <div className={classes.container}>
    <form onSubmit={submitHandler}>
            <div className={classes.row}>
            <div className={classes.column}>
            <div className={classes.comp1}>   
          <h2>LOGIN</h2>
          {(error !== "") ? ( <div className={classes.error}>{error}</div>) :""}
          <div className={classes.formgroup}>
                  <label htmlFor='name'>Name</label>
                  <input type="text"  name='name' id='name' onChange={e => setDetails({...details, name: e.target.value})} value={details.name}/>
              </div>
              <div className={classes.formgroup}>
                  <label htmlFor='email'>Email</label>
                  <input type="email" name='email' id='email' onChange={e => setDetails({...details, email: e.target.value})} value={details.email}/>
              </div>
              <div className={classes.formgroup}>
                  <label htmlFor='password'>Password</label>
                  <input type="password"  name='password' id='password' onChange={e => setDetails({...details, password: e.target.value})} value={details.password}/>
              </div>
              <button input type="submit" className={classes.buttontext} value="Login">LOG IN</button>
    </div>
    </div>
    </div>

          <RegisterUser/>
      </form>
      
      </div>
      </div>


  )
}

export default LoginUser
