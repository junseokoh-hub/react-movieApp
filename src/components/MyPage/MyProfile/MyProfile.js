import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../../../Context/LoginContext";
import MyInfo from "../MyInfo/MyInfo";

function MyProfile() {
  const { getLogout } = useContext(LoginContext);
  let navigate = useNavigate();
  return (
    <ul>
      <MyInfo />
      <li
        onClick={(e) => {
          getLogout(e);
          navigate("/");
        }}
      >
        Log Out
      </li>
      <li>c</li>
      <li>d</li>
    </ul>
  );
}

export default MyProfile;
