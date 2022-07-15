import { json } from "@remix-run/node";
import { Form, useLoaderData, useTransition } from "@remix-run/react";
import { authenticator } from "./services/auth.server";
import { createEvent } from "./services/user.server";

export const loader = async ({ request }) => {
  const user = await authenticator.isAuthenticated(request, {
    failureRedirect: "/login",
  });
  return json(user);
};

export const action = async ({ request }) => {
  const formData = Object.fromEntries(await request.formData());
  // all your form data is here
  console.log(formData);
  const data = createEvent(formData)
    .then((res) => res)
    .catch((e) => {
      throw new Error("Create event error");
    });
  return data;
};

export default function CreateEvent() {
  const data = useLoaderData();
  console.log(data);
  // use for form submission spinner
  const transition = useTransition();

  return (
    <div>
      <h1>Create Event</h1>
      <Form action="/create-event" method="post">
        {/* Cap title to max 200 character, i.e. make this a controlled component */}
        <label htmlFor="title">title</label>
        <input placeholder="title" id="title" name="title" />
        <label htmlFor="location">location</label>
        <input placeholder="location" id="location" name="location" />
        <label htmlFor="description">Description</label>
        <textarea
          placeholder="description"
          id="description"
          name="description"
        />
        <button type="submit">Submit</button>
      </Form>
    </div>
  );
}
