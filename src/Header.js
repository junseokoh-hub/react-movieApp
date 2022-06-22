import React, { useContext, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { LoginContext } from "./Context/LoginContext";

const Container = styled.div`
  .active {
    display: none;
  }
`;

const Header = styled.header`
  width: 100%;
  height: 7vh;
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.bgColor};
  box-shadow: ${(props) => props.theme.boxShadow};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  a {
    text-decoration-line: none;
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
`;

const Ul = styled.ul`
  display: flex;
  width: 100%;
  justify-content: space-between;
  list-style: none;
  padding: 0 1em;
  input {
    border: 1px solid #fff;
    padding: 0.2em 0.3em;
    outline: none;
    background-color: ${(props) => props.theme.bgColor};
    &::placeholder {
      color: ${(props) => props.theme.whiteColor};
    }
  }
`;

const Li = styled.li`
  display: flex;
  align-items: center;
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

  const openSearch = () => {
    setOpen((open) => !open);
  };

  let navigate = useNavigate();

  const toLink = (e) => {
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
    console.log(e.target.innerHTML);
  };

  return (
    <Container>
      <Header ref={navbar}>
        <Ul>
          <Li>
            {/* <Link to="/"> */}
            <span onClick={toLink}>Movies</span>
            {/* </Link> */}
            {/* <Link to="/tv"> */}
            <span onClick={toLink}>TV</span>
            {/* </Link> */}
          </Li>
          <Li>
            <span onClick={openSearch}>🔍</span>
            <input
              className={!open ? "disappear" : "appear"}
              type="text"
              placeholder="Search..."
            />
            {/* <Link to="/search"> */}
            <span onClick={toLink}>Search</span>
            {/* </Link> */}
            {login ? (
              <>
                {/* <Link to="/myPage"> */}
                <span onClick={toLink}>My Page</span>
                {/* </Link> */}
                <span onClick={getLogout}>LogOut</span>
              </>
            ) : (
              // <Link to="/myPage">
              <span onClick={toLink}>LogIn</span>
              //  </Link>
            )}
          </Li>
        </Ul>
      </Header>
    </Container>
  );
}

export default Head;
