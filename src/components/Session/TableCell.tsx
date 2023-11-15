import React from "react";
import { styled } from "styled-components";
import { MeetingData } from "../Meetings/MeetingData";
import { Meeting } from "../../types";
import { getFormattedTime } from "../../util/table";
import { Timeslot } from "./Timeslot";

const Container = styled.div`
  visibility: hidden;
  border: 2px solid transparent;
  border-radius: 4px;
  padding: 2px;
  color: #999;
  font-size: 12px;
`;

const InnerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 68px;
  width: 68px;
`;

const StyledTableData = styled.td<{
  $isActive?: boolean;
  $isClickable?: boolean;
}>`
  box-sizing: content-box;
  border: 1px solid #eee;
  text-align: center;

  &:hover ${Container} {
    visibility: visible;
  }
`;

export const TableCell = ({
  timeslot,
  table,
}: {
  timeslot: Date;
  table: number;
}) => {
  // use real data
  const hasMeeting = false;
  const isActive = false;

  return (
    <StyledTableData>
      <InnerContainer>
        {hasMeeting ? (
          // use real data
          <MeetingData meeting={{} as Meeting} />
        ) : (
          <>
            {isActive ? (
              <Timeslot table={table} timeslot={timeslot} />
            ) : (
              <Container>
                <p>{`T${table + 1}`}</p>
                <p>{getFormattedTime(timeslot)}</p>
              </Container>
            )}
          </>
        )}
      </InnerContainer>
    </StyledTableData>
  );
};
