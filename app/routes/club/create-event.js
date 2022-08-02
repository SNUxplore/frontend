import { json } from "@remix-run/node";
import { Form, useActionData, useLoaderData } from "@remix-run/react";
import React from "react";
import EventCard from "~/Components/EventCard/EventCard";
import { authenticator } from "../services/auth.server";
import { createEvent, getSessionUserByEmail } from "../services/user.server";

export const loader = async ({ request }) => {
  const email = await authenticator.isAuthenticated(request, {
    failureRedirect: "/login",
  });
  const user = await getSessionUserByEmail(email);
  return user;
};

export const action = async ({ request }) => {
  const formData = Object.fromEntries(await request.formData());
  // all your form data is here
  formData.userId = parseInt(formData.userId);

  const data = createEvent(formData)
    .then((res) => ({ status: 200, res: res }))
    .catch((e) => ({ status: 500, res: "Edit info DB error" + e }));
  return data;
};

export default function CreateEvent() {
  const data = useLoaderData();
  const editRes = useActionData();
  const [formData, setFormData] = React.useState({
    ...data,
    date: "",
    startTime: "",
    endTime: "",
  });

  React.useEffect(() => {
    if (editRes !== undefined) {
      if (editRes.status === 200) {
        window.alert("Data successfully updated");
      } else if (editRes.status === 500) {
        window.alert("Error updating data." + editInfo.res + " Contact admin");
      }
    }
  }, [editRes]);

  function updateFormData(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  return (
    <>
      <Form
        method="post"
        action="/club/create-event"
        className="ClubInfoPage__InfoForm"
      >
        <div className="ClubInfoPage__InfoForm--row">
          <h3 className="ClubInfoPage__InfoForm--title">Create event</h3>
        </div>

        {/* Cap title to max 200 character, i.e. make this a controlled component */}
        <div className="ClubInfoPage__InfoForm--row">
          <label htmlFor="title">Name of the Event</label>
          <input
            required
            id="title"
            name="title"
            maxLength={200}
            placeholder="eg: E-Summit"
            onChange={(e) => updateFormData(e)}
          />
        </div>
        <div className="ClubInfoPage__InfoForm--row">
          <label htmlFor="location">Venue</label>
          <input
            required
            id="location"
            name="location"
            placeholder="eg: B315"
            onChange={(e) => updateFormData(e)}
          />
        </div>
        <div className="ClubInfoPage__InfoForm--row">
          <label htmlFor="imageUrl">image</label>
          <input
            id="imageUrl"
            name="imageUrl"
            placeholder="imageUrl"
            onChange={(e) => updateFormData(e)}
          />
        </div>
        <div className="ClubInfoPage__InfoForm--row">
          <label htmlFor="date">Date</label>
          <input
            id="date"
            required
            name="date"
            type="date"
            onChange={(e) => updateFormData(e)}
          />
        </div>
        <div className="ClubInfoPage__InfoForm--row">
          <label htmlFor="time">Time</label>
          <div className="ClubInfoPage__InfoForm--subRow">
            <input
              required
              type="time"
              id="startTime"
              name="startTime"
              onChange={(e) => updateFormData(e)}
            />
            <p>to</p>
            <input
              required
              type="time"
              id="endTime"
              name="endTime"
              onChange={(e) => updateFormData(e)}
            />
          </div>
        </div>
        <div className="ClubInfoPage__InfoForm--row">
          <label htmlFor="instaUrl">Instagram</label>
          <input
            id="instaUrl"
            name="instaUrl"
            placeholder="Instagram Handle URL"
            onChange={(e) => updateFormData(e)}
          />
        </div>
        <div className="ClubInfoPage__InfoForm--row">
          <label htmlFor="description">Description</label>
          <textarea
            required
            id="description"
            name="description"
            onChange={(e) => updateFormData(e)}
            placeholder="Description for your event"
          />
        </div>
        {/* Do not edit this, its to feed userId into the form*/}
        <input
          id="userId"
          name="userId"
          type="number"
          defaultValue={data.id}
          style={{ visibility: "hidden", display: "none" }}
        />
        <div className="ClubInfoPage__InfoForm--row">
          <button type="submit">Create Event</button>
        </div>
      </Form>
      <section className="ClubInfoPage__preview">
        <h3 className="ClubInfoPage__InfoForm--title">Preview</h3>
        <div className="ClubInfoPage__preview--cardHolder">
          <EventCard
            clubName={data.name}
            desc={formData.description}
            date={`${formData.date} ${formData.startTime} - ${formData.endTime}`}
            eventName={formData.title}
            location={formData.location}
          />
        </div>
      </section>
    </>
  );
}
