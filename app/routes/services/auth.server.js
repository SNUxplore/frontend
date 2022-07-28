import { Authenticator } from "remix-auth";
import { GoogleStrategy } from "remix-auth-google";
import { sessionStorage } from "./session.server";

export let authenticator = new Authenticator(sessionStorage);

const callbackURL =
  process.env.NODE_ENV === "production"
    ? process.env.URL + "/auth/google-callback"
    : "http://localhost:3000/auth/google-callback";

let googleStrategy = new GoogleStrategy(
  {
    clientID: process.env.GOOGLE_OAUTH_CLIENT_ID,
    clientSecret: process.env.GOOGLE_OAUTH_CLIENT_SECRET,
    callbackURL: callbackURL,
  },
  async ({ profile }) => {
    const email = profile.emails[0].value;
    return email;
  }
);
authenticator.use(googleStrategy);
