import React from "react";
import styled, { css } from "styled-components";
import { wh, xy } from "styles/mixin";

const type1 = css`
  border-radius: 50px 50px 0 0;
  background-image: linear-gradient(#bd0c0c, #ec0000);

  &::before,
  &::after {
    position: absolute;
    content: "";
    ${wh(15, 60)};
    ${xy(0, 50)};
    background-color: #ec0000;
  }

  &::after {
    ${xy(95, 50)};
  }
`;

const type2 = css`
  background-color: #1979c9;
  border-radius: 50px 50px 0 0;
`;

const type3 = css`
  ${wh(10, 20)};
  ${xy(45, -10)};
  border-radius: 2px;
  background-color: #071520;
`;

const types = [type1, type2, type3];

const HairWrapper = styled.div`
  position: absolute;
  ${wh(110, 50)};
  ${xy(-5, -10)};

  ${({ type }) => types[type]}
`;

const Hair = ({ children, type }) => {
  return <HairWrapper type={type}>{children}</HairWrapper>;
};

export default Hair;
