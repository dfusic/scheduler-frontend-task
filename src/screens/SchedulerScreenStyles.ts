import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 120px;
`;

export const SessionContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 24px;
  gap: 48px;
  flex-wrap: wrap;
`;

export const MeetingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
`;

export const Title = styled.p`
  font-weight: 600;
  font-size: 32px;
  text-align: start;
`;

export const MeetingsTitle = styled.p`
  font-weight: 600;
  font-size: 18px;
`;

export const UnscheduledMeetings = styled.div`
  display: flex;
  gap: 12px;
`;