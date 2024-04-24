import React, { useState, useCallback, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSocket } from "../context/SocketProvider";
import image from "../img/foot.png";
import "./dash.css";

const Home = () => {
  const navi = useNavigate();
  const [email, setEmail] = useState("");
  const [room, setRoom] = useState("");

  const socket = useSocket();
  const navigate = useNavigate();

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      socket.emit("room:join", { email, room });
    },
    [email, room, socket]
  );

  const handleJoinRoom = useCallback(
    (data) => {
      const { email, room } = data;
      navigate(`/room/${room}`);
    },
    [navigate]
  );

  useEffect(() => {
    socket.on("room:join", handleJoinRoom);
    return () => {
      socket.off("room:join", handleJoinRoom);
    };
  }, [socket, handleJoinRoom]);

  return (
    <div>
      <div className="wrapper">
        <nav style={{ display: "flex",paddingLeft:"500px" }}>
          <p
            className="logo"
            style={{
              textDecoration: "none",
              marginTop: "0px",
              marginBottom: "0px",
            }}
          >
            <h3>
              <Link style={{textDecoration:"none",color:"black"}}>MediFIXX</Link>
            </h3>
          </p>

          <p>
            <button
              className="button"
              onClick={(e) => {
                navi("/register");
              }}
              style={{
                marginLeft: "610px",
                padding: "10px",
                border: "solid",
                borderRadius: "7px",
                backgroundColor: "whitesmoke",
              }}
            >
              Sign-Up
            </button>
            <button
              className="button"
              onClick={(e) => {
                navi("/login");
              }}
              style={{
                padding: "10px",
                border: "solid",
                borderRadius: "7px",
                backgroundColor: "#00FF00",
              }}
            >
              Login
            </button>
          </p>
        </nav>

        <div className="backgroudImg">
          <img alt="Meets illustration" />
        </div>

        <div className="headings">
          <h1>MEETS</h1>
          <h2>
            Get Your One On One <br />
            Doctor Consultation
          </h2>
        </div>
        <div>
          <form onSubmit={handleSubmit}>
            <label>Email_ID</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
            <br />
            <label>Room</label>
            <input
              type="text"
              id="room"
              value={room}
              onChange={(e) => setRoom(e.target.value)}
            ></input>
            <br />
            <button type="submit">Join</button>
          </form>
        </div>
      </div>
      <footer>
        <img src={image} alt="footer"></img>
      </footer>
    </div>
  );
};

export default Home;
