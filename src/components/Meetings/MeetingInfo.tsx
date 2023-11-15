import React from "react";
import { styled } from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;

  border: 1px solid rgba(214, 214, 214, 1);
  background-color: rgba(255, 255, 255, 1);
  margin-left: auto;
  width: 320px;
  padding: 24px;
`;

const Title = styled.p`
  font-size: 18px;
  font-weight: 600;
`;

const UnscheduleButton = styled.button`
  background-color: rgba(0, 117, 255, 1);
  border-radius: 8px;
  padding: 10px 12px;
  width: 186px;
  height: 42px;
  color: white;
  border: 0;
  font-weight: 600;
  cursor: pointer;
`;

export const MeetingInfo = () => {
  return (
    <Container>
      <Title>Meeting info</Title>

      <div>
        {/* use real data */}
        <p>{`host id: 22`}</p>

        <p>{`host id: 11`}</p>
      </div>

      <UnscheduleButton>Unschedule meeting</UnscheduleButton>
    </Container>
  );
};
