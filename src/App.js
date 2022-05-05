import React, { useState } from "react";
import Footer from "./Components/Footer/Footer";
import LoginUser from "./Components/LoginUser/LoginUser";
import Navbar from "./Components/Navbar/Navbar";

function App() {
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

  return (
    <div className="App">
      <Navbar />
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

      <Footer />
    </div>
  );
}

export default App;
