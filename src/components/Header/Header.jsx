import React from "react";
// import "./Header.css";
import styled from "styled-components";
import { Avatar } from "@mui/material";
import { AccessTime, HelpOutline } from "@mui/icons-material";
import SearchIcon from "@mui/icons-material/Search";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";

const Header = () => {
  const [user] = useAuthState(auth);

  console.log("user is ", user);

  return (
    <HeaderContainer>
      <HeaderLeft>
        <HeaderAvatar
          alt={user?.displayName}
          src={user?.photoURL}
          onClick={() => auth.signOut()}
        />
        <AccessTime />
      </HeaderLeft>

      <HeaderSearch>
        <SearchIcon />
        <input placeholder="Search slack community" />
      </HeaderSearch>

      <HeaderRight>
        <HelpOutline />
      </HeaderRight>
    </HeaderContainer>
  );
};

export default Header;

const HeaderSearch = styled.div`
  flex: 0.4;
  opacity: 1;
  border-radius: 6px;
  background-color: #421f44;
  text-align: center;
  display: flex;
  padding: 0 50px;
  align-items: center;
  color: gray;
  border: 1px solid lightgray;

  > input {
    background-color: transparent;
    border: none;
    text-align: center;
    min-width: 30vw;
    outline: none;
    color: #fff;
    /* padding: 4px 0px; */
    font-size: 14px;
  }
`;

const HeaderContainer = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  background-color: var(--slack-color);
  align-items: center;
  justify-content: space-between;
  padding: 8px 0px;
  color: #fff;
`;
const HeaderLeft = styled.div`
  /* background-color: #e0ffff90; */
  display: flex;
  flex: 0.3;
  align-items: center;
  margin-left: 20px;

  > .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 30px;
  }
`;
const HeaderAvatar = styled(Avatar)`
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }
`;

const HeaderRight = styled.div`
  flex: 0.3;
  display: flex;
  /* background-color: lightblue; */
  align-items: flex-end;

  > .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 20px;
  }
`;
