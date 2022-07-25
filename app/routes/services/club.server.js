import { db } from "./db.server";

export const getEvents = () =>
  db.post.findMany({
    include: {
      User: true,
    },
  });
