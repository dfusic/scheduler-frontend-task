import React from "react";
import { getFormattedTime } from "../../util/table";

export const SessionHeader = ({ timeSlots }: { timeSlots: Date[] }) => {
  return (
    <tr>
      <td />
      {timeSlots.map((timeslot, i) => (
        <td key={i}>{getFormattedTime(timeslot)}</td>
      ))}
    </tr>
  );
};
