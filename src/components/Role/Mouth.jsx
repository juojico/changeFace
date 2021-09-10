import React from "react";
import styled, { css } from "styled-components";
import { wh, xy } from "styles/mixin";

const type1 = css`
  ${wh(20, 15)};
  ${xy(40, 73)};
  border-radius: 0 0 20px 20px;
  background-image: linear-gradient(#bd0c0c, #f77171);
`;

const type2 = css`
  ${wh(30, 15)};
  ${xy(35, 73)};
  background-image: linear-gradient(#bd0c0c, #ec0000);
  border-radius: 50px 50px 0 0;
`;

const type3 = css`
  ${wh(16, 10)};
  ${xy(42, 50)};
  background-color: #da5656;
  border-radius: 10px;
  box-shadow: 0 6px 0 #da5656;
`;

const types = [type1, type2, type3];

const MouthWrapper = styled.div`
  position: absolute;

  ${({ type }) => types[type]}
`;

const Mouth = ({ type }) => {
  return <MouthWrapper type={type}></MouthWrapper>;
};

export default Mouth;
