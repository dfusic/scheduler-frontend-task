import React from "react";
import { TableCell } from "./TableCell";
import { styled } from "styled-components";

const InnerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 68px;
  width: 68px;

  font-size: 14px;
  font-weight: 500;
`;

export const Row = ({
  timeSlots,
  table,
}: {
  timeSlots: Date[];
  table: number;
}) => (
  <tr>
    <td>
      <InnerContainer>{`T${table + 1}`}</InnerContainer>
    </td>

    <TableCell table={table} timeslot={timeSlots[0]} />
    <TableCell table={table} timeslot={timeSlots[1]} />
    <TableCell table={table} timeslot={timeSlots[2]} />
  </tr>
);
