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

export const editInfo = async ({ instaUrl, websiteUrl, name, emailId }) =>
  db.user.update({
    where: {
      emailId: emailId,
    },
    data: {
      name: name,
      websiteUrl: websiteUrl,
      instaUrl: instaUrl,
    },
  });
