import React, { useContext, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { FaHome, FaBars, FaCookie, FaArrowCircleLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "./Context/LoginContext";
import { NavContext } from "./Context/NavContext";
import Menu from "./components/Menu";
import { ToggleContext } from "./Context/ToggleContext";

const Container = styled.div`
  width: 100vw;
  .active {
    background-color: ${(props) => props.theme.bgColor};
  }
  .fa-leftarrow {
    position: absolute;
    top: 10px;
    left: 10px;
    font-size: 1.3em;
    cursor: pointer;
    z-index: 10000;
  }
`;

const IconContainer = styled.div`
  display: none;
  svg {
    cursor: pointer;
  }
  @media screen and (max-width: 500px) {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0 1em;
  }
`;

const Header = styled.header`
  width: 100%;
  padding: 1em 0;
  display: flex;
  align-items: center;
  background-color: transparent;
  box-shadow: ${(props) => props.theme.boxShadow};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  @media screen and (max-width: 500px) {
    flex-direction: column;
    padding: 1em 0 0 0;
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
    background-color: ${(props) => props.theme.bgColor};
  }
`;

const Li = styled.li`
  display: flex;
  &:nth-child(2) {
    position: relative;
  }
  svg {
    cursor: pointer;
  }
  span {
    margin-right: 0.5em;
    cursor: pointer;
  }
  .fa-cookie {
    display: block;
  }
  .span-mypage {
    display: none;
  }

  @media screen and (max-width: 500px) {
    flex-direction: column;
    span {
      display: block;
      text-align: center;
      padding: 0.3em 0;
      margin: 0;
    }
    .fa-cookie {
      display: none;
    }
    .span-mypage {
      display: block;
    }
  }
`;

function Head() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { login } = useContext(LoginContext);
  const { toggleVideo, setToggleVideo } = useContext(ToggleContext);
  const { navOpen, setNavOpen, navToggle } = useContext(NavContext);
  const navbar = useRef(null);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (navbar.current !== null) {
        if (window.scrollY > navbar.current.offsetHeight + 10) {
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
      setToggleVideo(false);
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
      {toggleVideo ? (
        <FaArrowCircleLeft
          className="fa-leftarrow"
          onClick={() => setToggleVideo(false)}
        />
      ) : (
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
                  <FaCookie className="fa-cookie" onClick={OpenMenu} />
                  {menuOpen ? (
                    <Menu setMenuOpen={setMenuOpen} />
                  ) : (
                    <>
                      <span className="span-mypage" onClick={toNavigate}>
                        My Page
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
      )}
    </Container>
  );
}

export default Head;
