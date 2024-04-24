import React, { useState } from "react";
import { useNavigate,Link } from "react-router-dom";

const Login = () => {
  //const navi = useNavigate();
  const[userName,setUserName]=useState("")
  const [Email, setEmail] = useState("");
  const [password, setPassword] = useState();
  return (
    <div>
      <form>
        <div
          className="content"
          style={{
            backgroundColor: "rgb(212, 212, 212)",
            width: "400px",
            height: "480px",
            justifyContent: "center",
            borderRadius: "10px",
            boxShadow: "400",
            top: "30px",
            margin:"40px"
          }}
        >
          
            <br/>
          <span style={{ color: "black", fontSize: "16px"}}><h2>Register</h2></span>
          <input
            type="email"
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="E-Mail"
            style={{ padding: "15px", borderRadius: "7px",marginBottom:"15px" }}
          ></input>
          <br />
          
          <input
            type="username"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="UserName"
            style={{ padding: "15px", borderRadius: "7px",marginBottom:"15px"  }}
          ></input>
          <span
            style={{ color: "black", fontSize: "16px", width: "50px" }}
          ></span>
          <br/>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            style={{ padding: "15px", borderRadius: "7px" ,marginBottom:"15px" }}
          ></input>
          <br />
          <button
            type="submit"
            style={{
              backgroundColor: "#00FF00",
              padding: "15px 85px",
              borderRadius: "7px",
            }}
          >
            Login
          </button>
          <br />
          <p style={{ color: "black", fontSize: "16px" }}>
            Already Registered?? <span style={{color:"blue"}}><Link to={"/login"} style={{textDecoration:"none"}}>Log In!!</Link></span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
