import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <Link to="/" style={{ textDecoration: "none", color: "#fff" }}>
      <h1
        style={{
          textAlign: "center",
          fontSize: "3rem",
          textShadow:
            "0 0 10px #fff, 0 0 20px #fff, 0 0 30px #e60073, 0 0 40px #e60073, 0 0 50px #e60073, 0 0 60px #e60073, 0 0 70px #e60073",
          color: "#fff",
        }}
      >
        Movies
      </h1>
    </Link>
  );
}
