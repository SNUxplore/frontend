import { json } from "@remix-run/node";
import { Form, useLoaderData } from "@remix-run/react";
import { authenticator } from "../services/auth.server";
import { createEvent } from "../services/user.server";

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
  formData.userId = parseInt(formData.userId);

  const data = createEvent(formData)
    .then((res) => res)
    .catch((e) => {
      console.log(e);
      throw new Error("Create event error");
    });
  return data;
};

export default function CreateEvent() {
  const data = useLoaderData();
  console.log(data);
  // use for form submission spinner

  return (
    <div>
      <h1>Create Event</h1>
      <Form action="/club/create-event" method="post">
        {/* Cap title to max 200 character, i.e. make this a controlled component */}
        <label htmlFor="title">title</label>
        <input placeholder="title" id="title" name="title" />

        <label htmlFor="location">location</label>
        <input placeholder="location" id="location" name="location" />

        <label htmlFor="imageUrl">image</label>
        <input placeholder="imageUrl" id="imageUrl" name="imageUrl" />

        <label htmlFor="date">Date</label>
        <input placeholder="date" id="date" name="date" />

        <label htmlFor="description">Description</label>
        <textarea
          placeholder="description"
          id="description"
          name="description"
        />

        {/* Do not edit this, its to feed userId into the form*/}
        <input
          id="userId"
          name="userId"
          style={{ visibility: "hidden", display: "none" }}
          type="number"
          defaultValue={data.id}
        />
        <button type="submit">Submit</button>
      </Form>
    </div>
  );
}
