import { authenticator } from "../services/auth.server";

export let action = async ({ request }) => {
  await authenticator.logout(request, { redirectTo: "/" });
};
