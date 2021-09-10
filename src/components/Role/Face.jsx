import React from "react";
import styled, { css } from "styled-components";
import { wh, xy } from "styles/mixin";

const type1 = css`
  background-color: #f3ddbc;
`;

const type2 = css`
  background-color: #f3ddbc;

  &::before,
  &::after {
    content: "";
    position: absolute;
    ${wh(14, 10)};
    ${xy(10, 70)};
    border-radius: 50%;
    background-color: #f8cbc3;
  }

  &::after {
    ${xy(76, 70)};
  }
`;

const type3 = css`
  background-color: #f0d1ad;
`;

const type4 = css`
  background-color: #ca9c60;
`;

const types = [type1, type2, type3, type4];

const FaceWrapper = styled.div`
  position: relative;
  ${wh(100, 100)};
  border-radius: 50%;

  ${({ type }) => types[type]}
`;

const Face = ({ children, type }) => {
  return <FaceWrapper type={type}>{children}</FaceWrapper>;
};

export default Face;
