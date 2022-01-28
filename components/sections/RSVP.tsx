import React, { FunctionComponent, useState } from "react";
import { RSVP } from "../../types";
import { useForm } from "react-hook-form";
import Input from "../Input";

/*

This section is a RSVP form.

*/

interface RSVPForm extends Omit<RSVP, "number"> {
  number: string;
}

interface Props {
  site: any; // Note: Don't do this
  emailFrom: string;
}

const RSVPSection: FunctionComponent<Props> = ({ site, emailFrom }) => {
  const { register, handleSubmit, reset } = useForm<RSVPForm>();
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = handleSubmit(async (data) => {
    setSubmitting(true);

    const payload: RSVP = {
      ...data,
      number: parseInt(data.number),
    };

    // Set message if email was recorded in the form and if EMAIL_FROM was configured at build time
    if (emailFrom && data.email) {
      payload.message = {
        from: {
          name: site.name,
          email: emailFrom,
        },
        subject: "Eventflare RSVP Confirmation!",
        body: `${data.fName}, thanks for your RSVP. This email is just confirming that we received it.

As a reminder, the event is taking place at ${site.event.location.address} on ${site.event.date} at ${site.event.time}. Looking forward to seeing you there!`,
      };
    }

    const res = await fetch("/api/rsvp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    }).catch((error) => {
      console.error(error);
    });

    if (res && res.ok) {
      console.log(JSON.stringify(await res.json(), null, 2));
    }

    setSubmitting(false);
    reset();
  });

  return (
    <div className="flex justify-center">
      <form className="w-full max-w-lg inline-block" onSubmit={onSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start mb-4 text-gray-700 text-base">
          <Input label="First Name" {...register("fName")} required />
          <Input label="Last Name" {...register("lName")} required />
          <Input
            label="# Attending"
            {...register("number")}
            min="1"
            type="number"
            required
          />
          {emailFrom && (
            <Input
              label="Email"
              {...register("email")}
              type="email"
              helperText="Optional, for calendar invite"
            />
          )}
        </div>
        <div className="flex justify-end">
          <button
            className="w-full md:w-auto text-white transition duration-200 ease-in-out bg-blue-600 hover:bg-blue-800 shadow drop-shadow-lg font-bold py-2 px-6 rounded-2xl"
            type="submit"
          >
            {submitting ? "Submitting..." : "RSVP"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default RSVPSection;
