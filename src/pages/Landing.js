import React from "react";
import Wrapper from "../wrappers/LandingWrapper";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <Wrapper>
      <nav>logo</nav>
      <div className="container page">
        <h1>tracking app</h1>
        <p>
          I'm baby leggings kickstarter cold-pressed asymmetrical trust fund
          disrupt tbh swag church-key squid single-origin coffee PBR&B pop-up
          fam small batch. Chillwave wayfarers knausgaard dreamcatcher
          typewriter. Woke gochujang bitters hammock selvage mixtape. Lo-fi wolf
          normcore chartreuse post-ironic wayfarers. Cloud bread cold-pressed
          cronut succulents lo-fi raw denim.
        </p>
        <Link to="/register" className="'btn btn'hero">
          Login/register
        </Link>
      </div>
    </Wrapper>
  );
};

export default Landing;
