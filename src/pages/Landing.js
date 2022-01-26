import React from "react";
import styled from "styled-components";

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
        <button>login/register</button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  nav {
    width: var(--fluid-width);
    max-width: var(--max-width);
    margin: 0 auto;
    height: var(--nav-height);
    display: flex;
    align-items: center;
  }
  .page {
    min-height: calc(100vh - var(--nav-height));
    display: grid;
    align-items: center;
    margin-top: -3rem;
  }
  h1 {
    font-weight: 700;
    span {
      color: var(--primary-500);
    }
    p {
      color: var(--grey-600);
    }
    .main-img {
      display: none;
    }
    @media (min-width: 992px) {
      .page {
        grid-template-columns: 1fr 1fr;
        column-gap: 3rem;
      }
      .main-img {
        display: block;
      }
    }
  }
`;

export default Landing;
