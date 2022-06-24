import React, { useContext, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "./Context/LoginContext";

const Container = styled.div`
  .active {
    display: none;
  }
`;

const Header = styled.header`
  width: 100%;
  padding: 0.5em 0;
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.bgColor};
  box-shadow: ${(props) => props.theme.boxShadow};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  h2 {
    display: none;
  }
  span {
    color: ${(props) => props.theme.whiteColor};
    padding: 0 0.5em;
    cursor: pointer;
  }
  .disappear {
    display: none;
  }
  .appear {
    display: inline-block;
  }
  @media screen and (max-width: 300px) {
    flex-direction: column;
    h2 {
      display: flex;
    }
    span {
      display: block;
      width: 100%;
      height: 100%;
      text-align: center;
      padding: 0.1em 0;
    }
  }
`;

const Ul = styled.ul`
  display: flex;
  width: 100%;
  justify-content: space-between;
  list-style: none;
  padding: 0 1em;
  @media screen and (max-width: 300px) {
    display: ${(props) => props.open};
    flex-direction: column;
    padding: 0;
  }
`;

const Li = styled.li`
  display: flex;
  align-items: center;
  @media screen and (max-width: 300px) {
    flex-direction: column;
  }
`;

function Head() {
  const { login, getLogout } = useContext(LoginContext);
  const [open, setOpen] = useState(false);
  const navbar = useRef(null);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (navbar.current !== null) {
        if (window.scrollY > navbar.current.offsetHeight + 100) {
          navbar.current.classList.add("active");
        } else {
          navbar.current.classList.remove("active");
        }
      }
    });
  }, []);

  let navigate = useNavigate();

  const toNavigate = (e) => {
    const {
      target: { innerHTML },
    } = e;
    if (innerHTML === "Movies") {
      navigate(`/`);
    } else if (innerHTML === "TV") {
      navigate(`/tv`);
    } else if (innerHTML === "Search") {
      navigate(`/search`);
    } else if (innerHTML === "LogIn" || innerHTML === "My Page") {
      navigate(`/myPage`);
    }
  };

  const openNav = () => {
    setOpen((prev) => !prev);
  };

  return (
    <Container>
      <Header ref={navbar}>
        <h2 onClick={openNav}>Click!</h2>
        <Ul open={open ? "flex" : "none"}>
          <Li>
            <span onClick={toNavigate}>Movies</span>
            <span onClick={toNavigate}>TV</span>
          </Li>
          <Li>
            <span onClick={toNavigate}>Search</span>
            {login ? (
              <>
                <span onClick={toNavigate}>My Page</span>
                <span onClick={getLogout}>LogOut</span>
              </>
            ) : (
              <span onClick={toNavigate}>LogIn</span>
            )}
          </Li>
        </Ul>
      </Header>
    </Container>
  );
}

export default Head;
