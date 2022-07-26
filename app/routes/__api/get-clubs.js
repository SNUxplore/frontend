import { getClubs } from "../services/club.server";

export const loader = () =>
  getClubs()
    .then((data) => data)
    .catch((e) => {
      console.error("Get clubs db error" + e);
    });
