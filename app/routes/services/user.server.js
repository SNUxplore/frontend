import { db } from "./db.server";

export const getSessionUserByEmail = async (emailId) =>
  db.user.findUnique({ where: { emailId } });

export const createEvent = async ({
  userId,
  imageUrl,
  location,
  date,
  description,
  title,
}) =>
  db.post.create({
    data: {
      userId,
      imageUrl,
      location,
      date,
      description,
      title,
    },
  });
