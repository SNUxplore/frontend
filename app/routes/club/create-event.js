import { json } from "@remix-run/node";
import { Form, useLoaderData } from "@remix-run/react";
import React from "react";
import EventCard from "~/Components/EventCard/EventCard";
import { authenticator } from "../services/auth.server";
import { createEvent, getSessionUserByEmail } from "../services/user.server";

export const loader = async ({ request }) => {
  const email = await authenticator.isAuthenticated(request, {
    failureRedirect: "/login",
  });
  const user = await getSessionUserByEmail(email);
  return json(user);
};

export const action = async ({ request }) => {
  const formData = Object.fromEntries(await request.formData());
  // all your form data is here
  formData.userId = parseInt(formData.userId);

  const data = createEvent(formData)
    .then((res) => res)
    .catch((e) => {
      throw new Error("Create event error" + e.toString());
    });
  return data;
};

export default function CreateEvent() {
  const data = useLoaderData();
  const [formData, setFormData] = React.useState(data);

  function updateFormData(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  // eslint-disable-next-line no-unused-vars
  function isFormChanged() {
    return JSON.stringify(formData) === JSON.stringify(data.user);
  }

  return (
    <>
      <Form
        action="/club/create-event"
        method="post"
        className="ClubInfoPage__InfoForm"
      >
        <div className="ClubInfoPage__InfoForm--row">
          <h3>Create event</h3>
        </div>

        {/* Cap title to max 200 character, i.e. make this a controlled component */}
        <div className="ClubInfoPage__InfoForm--row">
          <label htmlFor="title">title</label>
          <input
            placeholder="title"
            id="title"
            name="title"
            onChange={(e) => updateFormData(e)}
          />
        </div>
        <div className="ClubInfoPage__InfoForm--row">
          <label htmlFor="location">location</label>
          <input
            placeholder="location"
            id="location"
            name="location"
            onChange={(e) => updateFormData(e)}
          />
        </div>
        <div className="ClubInfoPage__InfoForm--row">
          <label htmlFor="imageUrl">image</label>
          <input
            placeholder="imageUrl"
            id="imageUrl"
            name="imageUrl"
            onChange={(e) => updateFormData(e)}
          />
        </div>
        <div className="ClubInfoPage__InfoForm--row">
          <label htmlFor="date">Date</label>
          <input
            placeholder="date"
            id="date"
            name="date"
            onChange={(e) => updateFormData(e)}
          />
        </div>
        <div
          className="ClubInfoPage__InfoForm--row"
          style={{ minHeight: "61px", height: "auto" }}
        >
          <label htmlFor="instaUrl">Description</label>
          <input
            placeholder="Instagram Post URL"
            id="instaUrl"
            name="instaUrl"
            onChange={(e) => updateFormData(e)}
          />
        </div>
        <div
          className="ClubInfoPage__InfoForm--row"
          style={{ minHeight: "61px", height: "auto" }}
        >
          <label htmlFor="description">Description</label>
          <textarea
            placeholder="description"
            id="description"
            name="description"
            onChange={(e) => updateFormData(e)}
          />
        </div>
        {/* Do not edit this, its to feed userId into the form*/}
        <input
          id="userId"
          name="userId"
          style={{ visibility: "hidden", display: "none" }}
          type="number"
          defaultValue={data.id}
        />
        <div className="ClubInfoPage__InfoForm--row">
          <button type="submit">Create Event</button>
        </div>
      </Form>
      <section className="ClubInfoPage__preview">
        <h3>Preview</h3>
        <div className="ClubInfoPage__preview--cardHolder">
          <EventCard
            clubName={data.name}
            desc={formData.description}
            date={formData.date}
            eventName={formData.title}
            location={formData.location}
          />
        </div>
      </section>
    </>
  );
}
