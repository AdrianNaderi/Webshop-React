import React, { useState } from 'react'
import RegisterUser from '../RegisterUser/RegisterUser';
import classes from './LoginUser.module.css'

function LoginUser({ Login, error }) {
    const [details, setDetails] = useState({ name: "", email: "", password: "" });

    const submitHandler = e => {
        e.preventDefault();

        Login(details);
    }
    return (
        <div className={classes.form}>
            <div class={classes.container}>
                <form onSubmit={submitHandler}>
                    <div class={classes.column}>
                        <div className={classes.font}>
                            <h2 className={classes.header}>LOGIN</h2>
                        </div>
                        {(error !== "") ? (<div className={classes.error}>{error}</div>) : ""}
                        <label className={classes.labelgroup} htmlFor='name'>Name:</label>
                        <div className={classes.formgroup}>
                            <input type="text" name='name' id='name' onChange={e => setDetails({ ...details, name: e.target.value })} value={details.name} />
                        </div>

                        <label className={classes.labelgroup} htmlFor='email'>Email:</label>
                        <div className={classes.formgroup}>
                            <input type="email" name='email' id='email' onChange={e => setDetails({ ...details, email: e.target.value })} value={details.email} />
                        </div>

                            <label className={classes.labelgroup} htmlFor='password'>Password:</label>
                        <div className={classes.formgroup}>
                            <input type="password" name='password' id='password' onChange={e => setDetails({ ...details, password: e.target.value })} value={details.password} />
                        </div>

                        <button class={classes.button}input type="submit" value="Login">LOG IN</button>
                        
                        <div className={classes.footer}>
                        <input className={classes.checkbox} type="checkbox" value="RememberMe" id="rememberMe"/> <label  className={classes.checkbox}for="rememberMe">Remember me</label>
                        <a href="url" className={classes.link}> Lost your password?</a>
                        <img src="/img/socials.png" className={classes.social}></img>
                        </div>
                    </div>
                </form>
                <RegisterUser />
            </div>
        </div>


    )
}

export default LoginUser
