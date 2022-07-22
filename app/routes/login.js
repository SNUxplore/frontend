import { Form } from "@remix-run/react";
import { authenticator } from "./services/auth.server";

export const loader = async ({ request }) => {
  const user = await authenticator.isAuthenticated(request, {
    successRedirect: "/create-event",
  });
  console.log(user);
  return null;
};

const Login = () => (
  <Form action="/auth/google" method="POST">
    <button type="submit"> Sign in with Google</button>
  </Form>
);

export default Login;
