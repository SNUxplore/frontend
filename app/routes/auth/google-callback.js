import { redirect } from "@remix-run/node";
import { authenticator } from "../services/auth.server";
import { commitSession, getSession } from "../services/session.server";

export let loader = async ({ request }) => {
  const user = await authenticator.authenticate("google", request, {
    failureRedirect: "/",
  });
  // manually get the session
  let session = await getSession(request.headers.get("cookie"));
  // and store the user data
  session.set(authenticator.sessionKey, user);

  // commit the session
  let headers = new Headers({ "Set-Cookie": await commitSession(session) });

  // and do your validation to know where to redirect the user
  return redirect("/club/dashboard", { headers });
};
