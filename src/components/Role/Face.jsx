import React from "react";
import styled, { css } from "styled-components";
import { wh } from "styles/mixin";

const type1 = css`
  background-color: #f3ddbc;
`;

const type2 = css`
  background-color: #f0d1ad;
`;

const type3 = css`
  background-color: #ca9c60;
`;

const types = [type1, type2, type3];

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
