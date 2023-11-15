export type Meeting = {
  id: number;
  status: string;
  host_id: number;
  guest_id: number;
  host_eid: number;
  guest_eid: number;
  session: number | null;
  timeslot: number | null;
  table: number | null;
  booth_id: number | null;
  locked: boolean;
  fixed_table: number | null;
  valid: number;
};

export type Session = {
  id: number;
  identifier: string;
  number_of_tables: number;
  number_of_timeslots: number;
  duration: number;
  begin: string;
  end: string;
};
