import { useState } from "react";
import LoginUser from "../Components/LoginUser/LoginUser";

const UserPage = () => {
  const adminUser = {
    email: "admin@admin.com",
    password: "admin123",
  };

  const [user, setUser] = useState({ name: "", email: "" });
  const [error, setError] = useState("");

  const Login = (details) => {
    console.log(details);

    if (details.email === adminUser.email && details.password === adminUser.password) {
      console.log("Logged in");
      setUser({
        name: details.name,
        email: details.email,
      });
    } else {
      console.log("Details do not match");
      setError("Details do not match!");
    }
  };

  const Logout = () => {
    setUser({ name: "", email: "" });
    setError("");
  };

  const handleTest = async () => {
    var result = await fetch("https://localhost:7001/api/Users/Test", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoia2Vua2F0YSIsIm5iZiI6MTY1MzUwMjIyNSwiZXhwIjoxNjUzNTA5NDI1LCJpYXQiOjE2NTM1MDIyMjV9.6ZvUDh9mn7n2Zqo782bSrCStwLvkYXElKFA90ErzQr4`,
      },
    });
    console.log(result);
  };

  return (
    <>
      <h1>User Page </h1>;
      {user.email !== "" ? (
        <div className="welcome">
          <h2>
            Welcome, <span>{user.name}</span>
          </h2>
          <button onClick={Logout} class="logout">
            Logout
          </button>
        </div>
      ) : (
        <LoginUser Login={Login} error={error} />
      )}
      <button onClick={handleTest}>Test Auth</button>
    </>
  );
};

export default UserPage;
