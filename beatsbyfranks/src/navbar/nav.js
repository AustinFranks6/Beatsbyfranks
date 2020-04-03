import React from "react";

import styled from "styled-components";

const Styles = styled.div`
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 10vh;
    padding-left: 5%;
    padding-right: 5%;
  }

  h1 {
    letter-spacing: 2px;
  }

  header,
  a {
    font-family: "Bebas Neue", cursive;
    font-size: 1.5em;
  }

  nav,
  a {
    display: inline-block;
    padding: 0px 10px;
    text-decoration: none;
    font-family: "Alegreya SC", serif;
    color: #999;
  }

  nav .animation {
  }

  a:nth-child(1) {
  }

  @media only screen and (max-width: 490px) {
    h1 {
      font-size: 1.3em;
    }

    a {
      font-size: 1.1em;
      padding: 0px 5px;
    }
  }
`;

function Navigation() {
  return (
    <Styles>
      <header>
        <h1>BEATSBYFRANKS</h1>
        <nav>
          <a href="#">Home</a>
          <a href="#">Cart</a>
          <a href="#">Contact</a>
          <div className="animation start-home"></div>
        </nav>
      </header>
    </Styles>
  );
}

export default Navigation;
