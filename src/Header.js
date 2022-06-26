import React, { useContext, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { FaHome, FaBars, FaCookie, FaAngleDown } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "./Context/LoginContext";
import { NavContext } from "./Context/NavContext";
import Menu from "./components/Menu";

const Container = styled.div`
  .active {
    display: none;
  }
`;

const IconContainer = styled.div`
  display: none;
  @media screen and (max-width: 500px) {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0 1em;
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
  @media screen and (max-width: 500px) {
    flex-direction: column;
  }
`;

const Ul = styled.ul`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 0 1em;
  @media screen and (max-width: 500px) {
    display: ${(props) => props.open};
    flex-direction: column;
    padding: 0;
  }
`;

const Li = styled.li`
  display: flex;
  span {
    margin-right: 0.5em;
    cursor: pointer;
  }
  &:nth-child(2) {
    position: relative;
    span:nth-child(3) {
      display: none;
    }
  }
  svg {
    cursor: pointer;
  }
  @media screen and (max-width: 500px) {
    flex-direction: column;
    span {
      display: block;
      text-align: center;
      padding: 0.3em 0;
      margin: 0;
    }
    &:nth-child(2) {
      .faCookie {
        display: none;
      }
      span:nth-child(3) {
        display: block;
      }
    }
  }
`;

function Head() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { login } = useContext(LoginContext);
  const { navOpen, setNavOpen, navToggle } = useContext(NavContext);
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
    } else if (innerHTML === "LogIn" || (!login && innerHTML === "My Page")) {
      navigate(`/myPage`);
    } else if (login && innerHTML === "My Page") {
      navigate(`/myPage/myProfile`);
    }
    setNavOpen(false);
    setMenuOpen(false);
  };

  const OpenMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <Container>
      <Header ref={navbar}>
        <IconContainer>
          <FaHome onClick={() => navigate("/")} />
          <FaBars onClick={navToggle} />
        </IconContainer>
        <Ul open={navOpen ? "flex" : "none"}>
          <Li>
            <span onClick={toNavigate}>Movies</span>
            <span onClick={toNavigate}>TV</span>
          </Li>
          <Li>
            <span onClick={toNavigate}>Search</span>
            {login ? (
              <>
                <FaCookie className="faCookie" onClick={OpenMenu} />
                {menuOpen ? (
                  <Menu setMenuOpen={setMenuOpen} />
                ) : (
                  <>
                    <span onClick={toNavigate}>My Page</span>
                    <span
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <FaAngleDown className="faAngleDown" />
                    </span>
                  </>
                )}
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
