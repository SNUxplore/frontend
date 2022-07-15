import { db } from "./db.server";

export const getSessionUserByEmail = async (emailId) =>
  db.user.findUnique({ where: { emailId } }).catch((e) => console.log(e));
