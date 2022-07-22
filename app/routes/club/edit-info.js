import { json } from "@remix-run/node";
import { Form, useLoaderData } from "@remix-run/react";
import { authenticator } from "../services/auth.server";
import { editInfo } from "../services/user.server";

export const loader = async ({ request }) => {
  const user = await authenticator.isAuthenticated(request, {
    failureRedirect: "/login",
  });
  return json(user);
};

export const action = async ({ request }) => {
  const formData = Object.fromEntries(await request.formData());
  const data = editInfo(formData)
    .then((res) => res)
    .catch((e) => console.log(e));
  return null;
};

export default function EditInfo() {
  const data = useLoaderData();
  console.log(data);

  return (
    <div>
      <h1>Create Event</h1>
      <Form action="/club/edit-info" method="post">
        {/* Cap title to max 200 character, i.e. make this a controlled component */}
        <label htmlFor="name">Club Name</label>
        <input
          placeholder="name"
          id="name"
          name="name"
          defaultValue={data.name}
        />
        <label htmlFor="websiteUrl">Website URL</label>
        <input
          placeholder="websiteUrl"
          id="websiteUrl"
          name="websiteUrl"
          defaultValue={data.websiteUrl}
        />
        <label htmlFor="instaUrl">Instagram profile URL</label>
        <input
          placeholder="instaUrl"
          id="instaUrl"
          name="instaUrl"
          defaultValue={data.instaUrl}
        />
        <label htmlFor="emailId" defaultValue={data.instaUrl}>
          Email ID (can't change sorry)
        </label>
        <input
          placeholder="emailId"
          id="emailId"
          name="emailId"
          value={data.emailId}
        />
        <button type="submit">Submit</button>
      </Form>
    </div>
  );
}
