import React from "react";
import { css, styled } from "styled-components";
import { Meeting } from "../../types";

const Container = styled.button<{
  $isSelected?: boolean;
  $isScheduled?: boolean;
}>`
  display: flex;
  flex-direction: column;
  gap: 6px;
  align-items: center;
  justify-content: center;
  height: 60px;
  width: 60px;
  border-radius: 6px;
  border: 1px solid rgba(255, 138, 0, 0.5);
  background-color: rgba(255, 138, 0, 0.15);
  cursor: pointer;

  p {
    font-size: 14px;
    font-weight: 500;
    margin: 0;
  }

  ${(props) =>
    props.$isScheduled &&
    css`
      background-color: rgba(0, 117, 255, 0.15);
      border-color: rgba(0, 117, 255, 0.5);
    `}

  ${(props) =>
    props.$isSelected &&
    css`
      background-color: ${props.$isScheduled
        ? "rgba(0, 117, 255, 1)"
        : "rgba(255, 138, 0, 0.5)"};
    `}
`;

export const MeetingData = ({
  meeting,
  isScheduled,
}: {
  meeting: Meeting;
  isScheduled?: boolean;
}) => (
  <Container
    // use real data
    $isSelected={false}
    $isScheduled={false}
  >
    <p>{meeting.host_eid}</p>
    <p>{meeting.guest_eid}</p>
  </Container>
);
