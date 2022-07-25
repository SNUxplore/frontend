import { db } from "./db.server";

export const getEvents = () =>
  db.post.findMany({
    include: {
      User: true,
    },
  });

export const getClubs = () => db.user.findMany();
export const getEventsByClub = (emailId) =>
  db.user.findUnique({
    where: {
      emailId,
    },
    include: {
      Posts: true,
    },
  });
