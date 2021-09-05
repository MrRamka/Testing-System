import styled from "styled-components";
import React from "react";

export const ArrowWrapper = styled.span`
  margin-right: 7px;
`;

const StyledSvg = styled.svg`
  fill: ${({ color }): string | undefined => color};
  color: ${({ color }): string | undefined => color};

  transform: rotate(0deg);
  transition: transform 150ms ease;

  &.active {
    transform: rotate(180deg);
  }

  // Special override for Antd Collapse.
  .ant-collapse,
  > .ant-collapse-item,
  > .ant-collapse-header,
  &.ant-collapse-arrow {
    transform: translateY(-50%);

    &.active {
      transform: translateY(-50%) rotate(180deg);
    }
  }
`;

type Props = {
  color: string;
  className?: string;
};

export const CollapseArrow = ({ color, className }: Props): JSX.Element => {
  return (
    <StyledSvg
      color={color}
      className={className}
      width="12"
      height="8"
      viewBox="0 0 12 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M1.70703 0.292968L6.00003 4.58597L10.293 0.292969L11.707 1.70697L6.00003 7.41397L0.293031 1.70697L1.70703 0.292968Z" />
    </StyledSvg>
  );
};

export const Arrow = styled(CollapseArrow)`
  transform: rotate(90deg);
`;
