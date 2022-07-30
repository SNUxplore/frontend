import { db } from "./db.server";

export const getSessionUserByEmail = async (emailId) => {
  return db.user.findUnique({ where: { emailId } });
};

export const createEvent = async ({
  instaUrl,
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
      instaUrl,
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
