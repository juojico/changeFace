import React from "react";
import styled from "styled-components";
import { useStore } from "store";

const ControllerWrapper = styled.div`
  padding-top: 40px;
`;

const Controller = () => {
  const { face, hair, eyes, mouth } = useStore();
  const changeFace = useStore((state) => state.changeFace);
  const changeHair = useStore((state) => state.changeHair);
  const changeEyes = useStore((state) => state.changeEyes);
  const changeMouth = useStore((state) => state.changeMouth);

  return (
    <ControllerWrapper>
      <button onClick={changeFace}>changeFace {face}</button>
      <button onClick={changeHair}>changeHair {hair}</button>
      <button onClick={changeEyes}>changeEyes {eyes}</button>
      <button onClick={changeMouth}>changeMouth {mouth}</button>
    </ControllerWrapper>
  );
};

export default Controller;
