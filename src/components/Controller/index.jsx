import React from "react";
import styled from "styled-components";
import { useStore } from "store";

const ControllerWrapper = styled.div`
  padding-top: 40px;
`;

const Controller = () => {
  const { face, eyes } = useStore();
  const changeFace = useStore((state) => state.changeFace);
  const changeEyes = useStore((state) => state.changeEyes);

  return (
    <ControllerWrapper>
      <button onClick={changeFace}>changeFace {face}</button>
      <button onClick={changeEyes}>changeEyes {eyes}</button>
    </ControllerWrapper>
  );
};

export default Controller;
