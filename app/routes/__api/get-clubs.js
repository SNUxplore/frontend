import { getClubs } from "../services/club.server";

export const loader = () =>
  getClubs()
    .then((data) => data)
    .catch((e) => {
      throw new Error("Get Clubs Error" + e);
    });
