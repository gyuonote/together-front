import React from 'react';
import styled, { css } from 'styled-components';
import palette from '../lib/styles/palette';

const StyledButton = styled.button`
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.25rem 1rem;
  color: white;
  outline: none;
  cursor: pointer;

  background: ${palette.gray[8]};
  &:hover {
    background: ${palette.gray[6]};
  }
  ${(props) =>
    props.fullWidth &&
    css`
      padding-top: 0.75rem;
      padding-bottom: 0.75rem;
      width: 100%;
      font-size: 1.125rem;
    `}

  ${(props) =>
    props.cyan &&
    css`
      background: ${palette.cyan[5]};
      $:hover {
        background: ${palette.cyan[4]};
      }
    `}
`;

// styled-components로 만든 컴포넌트를 바로 내보내면 자동 import가 제대로 작동되지 않습니다./gyuo/2021-09-21
const Button = (props) => <StyledButton {...props} />;

export default Button;
