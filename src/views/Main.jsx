import React from "react";
import styled from "styled-components";
import { wh, flex } from "styles/mixin";
import Role from "components/Role";
import Controller from "components/Controller";

const MainWrapper = styled.div`
  ${wh("100vw", "100vh")}
  ${flex("center", "center", "column")}
  background-color: #ecebe7;
`;

const Main = () => {
  return (
    <MainWrapper>
      <Role />
      <Controller />
    </MainWrapper>
  );
};

export default Main;
