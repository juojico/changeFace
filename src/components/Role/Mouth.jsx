import React from "react";
import styled, { css } from "styled-components";
import { wh, xy } from "styles/mixin";

const type1 = css`
  border-radius: 0 0 20px 20px;
  background-image: linear-gradient(#bd0c0c, #ec0000);
`;

const type2 = css`
  background-image: linear-gradient(#bd0c0c, #ec0000);
  border-radius: 50px 50px 0 0;
`;

const type3 = css`
  ${wh(16, 6)};
  ${xy(42, 60)};
  background-color: #da5656;
  border-radius: 10px;
  box-shadow: 0 6px 0 #da5656;
`;

const types = [type1, type2, type3];

const MouthWrapper = styled.div`
  position: absolute;
  ${wh(30, 15)};
  ${xy(35, 73)};

  ${({ type }) => types[type]}
`;

const Mouth = ({ children, type }) => {
  return <MouthWrapper type={type}>{children}</MouthWrapper>;
};

export default Mouth;
