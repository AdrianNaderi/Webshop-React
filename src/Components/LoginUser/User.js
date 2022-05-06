import classes from './User.module.css';
import LoginUser from './LoginUser';
import RegisterUser from '../RegisterUser/RegisterUser';

const User = () => {
    return (
      <>
        <div className={classes.container}>
          <RegisterUser />
        </div>
        <div className={classes.container}>
          <LoginUser />
        </div>
      </>
    );
  };
  
  export default User;
  