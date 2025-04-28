import { useState, useEffect } from "react";
import { MeetingData } from "../components/Meetings/MeetingData";
import { SessionsTable } from "../components/Session/SessionsTable";
import {
  Container,
  MeetingContainer,
  MeetingsTitle,
  SessionContainer,
  Title,
  UnscheduledMeetings,
} from "./SchedulerScreenStyles";
import { Meeting, Session } from "../types";

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

export const SchedulerScreen = () => {
  const [meetings, setMeetings] = useState<Array<Meeting>>();
  const [sessions, setSessions] = useState<Array<Session>>(SESSIONS);

  useEffect(() => {
    fetch(
      "https://admin.b2match.com/api/scheduler/events/14192/scheduler/meetings",
    )
      .then((response) => {
        return response.json();
      })
      .then((data: Array<Meeting>) => {
        setMeetings(data);
      });

    fetch(
      "https://admin.b2match.com/api/scheduler/events/14192/scheduler/sessions",
    )
      .then((response) => {
        return response.json();
      })
      .then((data: Array<Session>) => {
        setSessions(data);
      });
  }, []);

  return (
    <Container>
      <Title>Meeting scheduler</Title>

      {meetings && (
        <MeetingContainer>
          <MeetingsTitle>Unscheduled meetings</MeetingsTitle>

          <UnscheduledMeetings>
            {meetings.length > 0 &&
              meetings.map((meeting, idx) => (
                <MeetingData key={idx} meeting={meeting} />
              ))}

            <MeetingData key={meetings[1].id} meeting={meetings[1]} />
            <MeetingData key={meetings[2].id} meeting={meetings[2]} />
          </UnscheduledMeetings>
          <p>{`You have ${meetings.length} meetings left to schedule`}</p>
        </MeetingContainer>
      )}

      {sessions && (
        <SessionContainer>
          {sessions.length > 0 &&
            sessions.map((session, idx) => <SessionsTable key={idx} />)}
        </SessionContainer>
      )}
    </Container>
  );
};
