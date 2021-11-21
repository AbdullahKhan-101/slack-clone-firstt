import {
  InsertComment,
  Create,
  Drafts,
  FiberManualRecord,
  Inbox,
  Bookmark,
  BookmarkBorder,
  PeopleAlt,
  Apps,
  FileCopy,
  ExpandLess,
  ExpandMore,
  Add,
} from "@mui/icons-material";
import React from "react";
import styled from "styled-components";
import SidebarOption from "./SidebarOption";
import { db } from "../../firebase";
import { useCollection } from "react-firebase-hooks/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";

const Sidebar = () => {
  const [user] = useAuthState(auth);
  const [channels, loading, error] = useCollection(db.collection("rooms"));

  return (
    <SidebarContainer>
      <SidebarHeader>
        <SidebarInfo>
          <h2>Slack Clone</h2>
          <h3>
            <FiberManualRecord />
            {user.displayName}
          </h3>
        </SidebarInfo>
        <Create />
      </SidebarHeader>

      <SidebarOption Icon={InsertComment} title="Threads" />
      <SidebarOption Icon={Inbox} title="Mentions & reactions" />
      <SidebarOption Icon={Drafts} title="Saved items" />
      <SidebarOption Icon={BookmarkBorder} title="Channel browser" />
      <SidebarOption Icon={PeopleAlt} title="People & user groups" />
      <SidebarOption Icon={Apps} title="Apps" />
      <SidebarOption Icon={FileCopy} title="File Browser" />
      <SidebarOption Icon={ExpandLess} title="Show less" />
      <hr />
      <SidebarOption Icon={ExpandMore} title="Channels" />
      <hr />
      <SidebarOption Icon={Add} title="Add Channel" addChannelOption />

      {channels?.docs.map((doc) => {
        return (
          <SidebarOption key={doc.id} id={doc.id} title={doc.data().name} />
        );
      })}
    </SidebarContainer>
  );
};

export default Sidebar;
const SidebarContainer = styled.div`
  color: #fff;
  background-color: var(--slack-color);
  flex: 0.3;
  border-top: 1px solid #49274b;
  max-width: 260px;
  margin-top: 56px;
  > hr {
    margin: 10px 0px;
    border: 1px solid #49274b;
  }
`;
const SidebarHeader = styled.div`
  display: flex;
  padding: 13px;
  border-bottom: 1px solid #49274b;

  > .MuiSvgIcon-root {
    padding: 8px;
    color: #49274b;
    background-color: #fff;
    font-size: 18px;
    border-radius: 999px;
  }
`;
const SidebarInfo = styled.div`
  flex: 1;
  > h2 {
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 5px;
  }
  > h3 {
    display: flex;
    align-items: center;
    font-weight: 400;
    font-size: 13px;
  }
  > h3 > .MuiSvgIcon-root {
    font-size: 14px;
    margin-top: 1px;
    margin-right: 2px;
    color: green;
  }
`;
