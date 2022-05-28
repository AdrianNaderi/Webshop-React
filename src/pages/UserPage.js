import { useState } from "react";
import { useDispatch } from "react-redux";
import LoginUser from "../Components/LoginUser/LoginUser";
import { loginThunk, userActions } from "../store/user-slice";

const UserPage = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    localStorage.removeItem("name");
    localStorage.removeItem("email");
    localStorage.removeItem("token");
    dispatch(userActions.resetUser());
  };

  const Login = (details) => {
    dispatch(loginThunk({ details }));
  };
  return (
    <>
      <LoginUser Login={Login} />;<button onClick={handleLogout}>Log Out</button>
    </>
  );
};
export default UserPage;

// const handleTest = async () => {
//   var result = await fetch("https://localhost:7001/api/Users/Test", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoia2Vua2F0YSIsIm5iZiI6MTY1MzUwMjIyNSwiZXhwIjoxNjUzNTA5NDI1LCJpYXQiOjE2NTM1MDIyMjV9.6ZvUDh9mn7n2Zqo782bSrCStwLvkYXElKFA90ErzQr4`,
//     },
//   });
//   console.log(result);
// };
/* <button onClick={handleTest}>Test Auth</button> */
