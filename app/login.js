import { Form } from "@remix-run/react";
import { authenticator } from "./routes/services/auth.server";

export const loader = async ({ request }) => {
  await authenticator.isAuthenticated(request, {
    successRedirect: "/home",
  });
  return null;
};

const Login = () => (
  <Form action="/auth/google" method="post">
    <button type="submit"> Sign in with Google</button>
  </Form>
);
