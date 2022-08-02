import React from "react";
import { authenticator } from "../services/auth.server";
import { Form, useActionData, useLoaderData } from "@remix-run/react";
import { editInfo, getSessionUserByEmail } from "../services/user.server";

export const loader = async ({ request }) => {
  const email = await authenticator.isAuthenticated(request, {
    failureRedirect: "/login",
  });
  const user = await getSessionUserByEmail(email);
  return {
    user: user,
  };
};

export const action = async ({ request }) => {
  const formData = Object.fromEntries(await request.formData());
  const editRes = await editInfo(formData)
    .then((res) => ({ status: 200, res: res }))
    .catch((e) => ({ status: 500, res: "Edit info DB error" + e }));
  return editRes;
};

export default function EditInfo() {
  const data = useLoaderData();
  const editRes = useActionData();

  const [formData, setFormData] = React.useState(data.user);

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

  function isFormChanged() {
    return JSON.stringify(formData) === JSON.stringify(data.user);
  }
  return (
    <Form
      className="ClubInfoPage__InfoForm"
      action="/club/edit-info"
      method="POST"
    >
      <h3 className="ClubInfoPage__InfoForm--title ClubInfoPage__InfoForm--row">
        Club Information
      </h3>
      <span className="ClubInfoPage__InfoForm--row">
        The information provided will reflect in your events
      </span>
      <div className="ClubInfoPage__InfoForm--row">
        <label htmlFor="name">Club Name</label>
        <input
          id="name"
          name="name"
          placeholder="name"
          defaultValue={data.user.name}
          onChange={(e) => updateFormData(e)}
        />
      </div>
      <div className="ClubInfoPage__InfoForm--row">
        <label htmlFor="websiteUrl">Website URL</label>
        <input
          id="websiteUrl"
          name="websiteUrl"
          placeholder="websiteUrl"
          defaultValue={data.user.websiteUrl}
          onChange={(e) => updateFormData(e)}
        />
      </div>
      <div className="ClubInfoPage__InfoForm--row">
        <label htmlFor="instaUrl">Instagram profile URL</label>
        <input
          id="instaUrl"
          name="instaUrl"
          placeholder="instaUrl"
          defaultValue={data.user.instaUrl}
          onChange={(e) => updateFormData(e)}
        />
      </div>
      <div className="ClubInfoPage__InfoForm--row">
        <label htmlFor="emailId" defaultValue={data.user.instaUrl}>
          Email ID (can't change sorry)
        </label>
        <input
          id="emailId"
          name="emailId"
          placeholder="emailId"
          value={data.user.emailId}
          onChange={(e) => updateFormData(e)}
          className="ClubInfoPage__InfoForm--disabled"
        />
      </div>
      <div className="ClubInfoPage__InfoForm--row">
        <button
          className={`${
            isFormChanged() ? "ClubInfoPage__InfoForm--disabled" : ""
          }`}
          type="submit"
        >
          Save
        </button>
      </div>
    </Form>
  );
}
