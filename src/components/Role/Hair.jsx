import React from "react";
import styled, { css } from "styled-components";
import { wh, xy } from "styles/mixin";

const type1 = css`
  ${wh(70, 60)};
  ${xy(-5, -20)};
  border-radius: 100% 30% 100% 0;
  background-image: linear-gradient(#815c0c, #af890c 30%, #d1a71e);

  &::before,
  &::after {
    position: absolute;
    content: "";
  }

  &::before {
    ${wh(62, 60)};
    ${xy(50, 2)};
    border-radius: 10% 100% 0 100%;
    background-image: linear-gradient(#815c0c, #af890c 30%, #d1a71e);
  }

  &::after {
    ${wh(30, 100)};
    ${xy(-8, 36)};
    border-radius: 100% 0 100% 0;
    background-image: linear-gradient(#bb9313 30%, #dbb127);
    box-shadow: 94px 18px 0#BB9316;
    transform: rotate(347deg);
  }
`;

const type2 = css`
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

const type3 = css`
  background-color: #1979c9;
  border-radius: 50px 50px 0 0;
`;

const type4 = css`
  ${wh(10, 20)};
  ${xy(45, -10)};
  border-radius: 2px;
  background-color: #071520;
`;

const type5 = css``;

const types = [type1, type2, type3, type4, type5];

const HairWrapper = styled.div`
  position: absolute;
  ${wh(110, 50)};
  ${xy(-5, -10)};

  ${({ type }) => types[type]}
`;

const Hair = ({ type }) => {
  return <HairWrapper type={type}></HairWrapper>;
};

export default Hair;
