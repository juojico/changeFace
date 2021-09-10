import React from "react";
import styled, { css } from "styled-components";
import { wh, xy, flex } from "styles/mixin";

const type1 = css`
  margin: 4px 10px;
  border-top: 2px solid white;
  border-left: 4px solid white;
  border-radius: 100%;
  background-image: linear-gradient(#885b09, #fdb827);
  box-shadow: -1px -2px #241d11;

  &::before,
  &::after {
    content: "";
    position: absolute;
    border-radius: 50%;
  }

  &::before {
    ${wh(10, 11)};
    ${xy(6, 6)};
    background-color: #8f0606;
  }

  &::after {
    ${wh(4, 4)};
    ${xy(6, 6)};
    background-color: white;
  }
`;

const type2 = css`
  border-top: 6px solid white;
  border-left: 4px solid white;
  border-radius: 50% 50% 0 0;
  background-image: linear-gradient(#bd0c0c, #ec0000);

  &::before,
  &::after {
    content: "";
    position: absolute;
    border-radius: 50%;
  }

  &::before {
    ${wh(10, 11)};
    ${xy(6, 6)};
    background-color: #8f0606;
  }

  &::after {
    ${wh(4, 4)};
    ${xy(6, 6)};
    background-color: white;
  }
`;

const type3 = css`
  border: 6px solid white;
  background-color: #1979c9;
`;

const type4 = css`
  ${wh(6, 6)};
  margin: 12px 20px;
  background-color: #071520;
`;

const type5 = css`
  ${wh(12, 12)};
  margin: 6px 14px;
  background-color: #091722;

  &::before,
  &::after {
    ${wh(4, 4)};
    ${xy(2, 2)};
    position: absolute;
    content: "";
    border-radius: 50%;
    background-color: white;
  }
`;

const types = [type1, type2, type3, type4, type5];

const EyesWrapper = styled.div`
  position: absolute;
  top: 40px;
  left: -50%;
  ${wh("200%", 20)};
  ${flex()};
`;

const EyesBox = styled.div`
  position: relative;
  ${wh(20, 20)};
  margin: 0 10px;
  border-radius: 50%;
  ${({ type }) => types[type]}
  ${({ left }) => left && "transform: scaleX(-1)"}
`;

const Eyes = ({ type }) => {
  return (
    <EyesWrapper type={type}>
      <EyesBox type={type}></EyesBox>
      <EyesBox type={type} left={true}></EyesBox>
    </EyesWrapper>
  );
};

export default Eyes;
