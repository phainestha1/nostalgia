import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "../styles/home.css";

function Home() {
  return (
    <Container>
      <Header>
        <Logo>
          <Link to="/">Nostalgia</Link>
        </Logo>
        <Menu>
          <Link to="/login">로그인</Link>
          <Link to="/">서비스</Link>
          <Link to="/">고객센터</Link>
          <Link to="/">제휴문의</Link>
        </Menu>
      </Header>
      <Body>Body</Body>
      <Footer>Footer</Footer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100vw;
  height: 100vh;
  background-color: #fafafa;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 10px;
  background-color: #fff;
`;
const Logo = styled.div`
  > a {
    color: #7850f5;
    font-family: "Cafe24Oneprettynight";
    font-size: 24px;
    font-weight: 1000;
    text-decoration: none;
    transition: 0.2s;
    &:hover {
      opacity: 0.6;
    }
  }
`;
const Menu = styled.div`
  > a {
    padding: 0 7px;
    color: #373737;
    text-decoration: none;
    transition: 0.2s;
    &:hover {
      opacity: 0.6;
    }
  }
`;

const Body = styled.div`
  display: flex;
`;
const Footer = styled.div`
  display: flex;
`;

export default Home;
