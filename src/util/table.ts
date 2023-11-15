export const getFormattedTime = (timeslot: Date) =>
  `${timeslot.getHours()}:${String(timeslot.getMinutes()).padStart(2, "0")}`;
