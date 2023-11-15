import React from "react";
import { styled } from "styled-components";
import { MeetingData } from "../components/Meetings/MeetingData";
import { SessionsTable } from "../components/Session/SessionsTable";

const SESSIONS = [
  {
    id: 2,
    identifier: "s1",
    location: "",
    number_of_tables: 50,
    number_of_timeslots: 3,
    duration: 20,
    begin: "2023-06-22T12:00:00Z",
    end: "2023-06-22T13:00:00Z",
    matchmaking: true,
  },
  {
    id: 3,
    identifier: "s2",
    location: "",
    number_of_tables: 30,
    number_of_timeslots: 3,
    duration: 20,
    begin: "2023-06-22T15:00:00Z",
    end: "2023-06-22T16:00:00Z",
    matchmaking: true,
  },
];

const MEETINGS = [
  {
    id: 11,
    status: "accepted",
    host_id: 59,
    guest_id: 21,
    host_eid: 49,
    guest_eid: 11,
    session: null,
    timeslot: null,
    table: null,
    booth_id: null,
    locked: false,
    fixed_table: null,
    valid: 0,
  },
  {
    id: 12,
    status: "accepted",
    host_id: 52,
    guest_id: 25,
    host_eid: 42,
    guest_eid: 15,
    session: null,
    timeslot: null,
    table: null,
    booth_id: null,
    locked: false,
    fixed_table: null,
    valid: 0,
  },
  {
    id: 13,
    status: "accepted",
    host_id: 21,
    guest_id: 29,
    host_eid: 11,
    guest_eid: 19,
    session: null,
    timeslot: null,
    table: null,
    booth_id: null,
    locked: false,
    fixed_table: null,
    valid: 0,
  },
];

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 120px;
`;

const SessionContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 24px;
  gap: 48px;
  flex-wrap: wrap;
`;

const MeetingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
`;

const Title = styled.p`
  font-weight: 600;
  font-size: 32px;
  text-align: start;
`;

const MeetingsTitle = styled.p`
  font-weight: 600;
  font-size: 18px;
`;

const UnscheduledMeetings = styled.div`
  display: flex;
  gap: 12px;
`;

export const SchedulerScreen = () => {
  // use real data
  const sessions = SESSIONS;
  const meetings = MEETINGS;

  return (
    <Container>
      <Title>Meeting scheduler</Title>

      <MeetingContainer>
        <MeetingsTitle>Unscheduled meetings</MeetingsTitle>

        <UnscheduledMeetings>
          <MeetingData key={meetings[0].id} meeting={meetings[0]} />
          <MeetingData key={meetings[1].id} meeting={meetings[1]} />
          <MeetingData key={meetings[2].id} meeting={meetings[2]} />
        </UnscheduledMeetings>

        {/* use real data */}
        <p>{`You have ${meetings.length} meetings left to schedule`}</p>
      </MeetingContainer>

      <SessionContainer>
        <SessionsTable key={sessions[0].id} />
        <SessionsTable key={sessions[1].id} />
      </SessionContainer>
    </Container>
  );
};
