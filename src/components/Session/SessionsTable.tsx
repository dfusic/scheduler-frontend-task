import React from "react";
import { SessionHeader } from "./SessionHeader";
import { Row } from "./Row";
import { getFormattedTime } from "../../util/table";
import { styled } from "styled-components";
import { MeetingInfo } from "../Meetings/MeetingInfo";

const Container = styled.div`
  display: flex;
  border: 1px solid rgba(0, 0, 0, 0.15);
  background-color: rgba(252, 252, 252, 1);
  padding: 20px;
`;

const SessionTitle = styled.p`
  text-align: start;
  font-size: 22px;
  font-weight: 600;
  margin-top: 20px;
`;

export const SessionsTable = () => {
  // use real data
  const timeSlots = [
    new Date("2023-06-22T12:00:00.000Z"),
    new Date("2023-06-22T12:20:00.000Z"),
    new Date("2023-06-22T12:40:00.000Z"),
  ];

  // use real data
  const beginDate = new Date("2023-06-22T12:00:00.000Z");
  const endDate = new Date("2023-06-22T13:00:00.000Z");

  return (
    <Container>
      <div>
        <SessionTitle>{`Session: ${beginDate.toLocaleString("default", {
          month: "short",
          day: "2-digit",
        })}, ${getFormattedTime(beginDate)}-${getFormattedTime(
          endDate,
        )}`}</SessionTitle>

        <table style={{ borderCollapse: "collapse" }}>
          <thead>
            <SessionHeader timeSlots={timeSlots} />
          </thead>

          <tbody>
            <Row key={0} table={0} timeSlots={timeSlots} />
            <Row key={1} table={1} timeSlots={timeSlots} />
            <Row key={2} table={2} timeSlots={timeSlots} />
            <Row key={3} table={3} timeSlots={timeSlots} />
            <Row key={4} table={4} timeSlots={timeSlots} />
          </tbody>
        </table>
      </div>

      <MeetingInfo />
    </Container>
  );
};
