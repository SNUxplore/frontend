import { db } from "./db.server";

export const getSessionUserByEmail = async (email) =>
  db.user.findUnique({ where: { email } });
