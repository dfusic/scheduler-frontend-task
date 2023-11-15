import React from "react";
import { css, styled } from "styled-components";
import { getFormattedTime } from "../../util/table";

const Container = styled.button<{
  $isClickable?: boolean;
}>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;
  height: 60px;
  width: 60px;
  border-radius: 6px;
  border: 1px solid rgba(180, 33, 33, 0.5);
  background-color: rgba(180, 33, 33, 0.15);
  cursor: no-drop;

  p {
    visibility: hidden;
    font-size: 14px;
    font-weight: 500;
    margin: 0;
  }

  &:hover p {
    visibility: visible;
  }

  ${(props) =>
    props.$isClickable &&
    css`
      background-color: rgba(0, 126, 65, 0.15);
      border-color: rgba(0, 126, 65, 0.5);
      cursor: copy;
    `}
`;

export const Timeslot = ({
  //   isClickable,
  table,
  timeslot,
}: {
  //   isClickable: boolean;
  table: number;
  timeslot: Date;
}) => {
  return (
    // use real data
    <Container $isClickable={false}>
      <p>{`T${table + 1}`}</p>
      <p>{getFormattedTime(timeslot)}</p>
    </Container>
  );
};
