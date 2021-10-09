import { FunctionComponent, useState } from "react";
import { APIResponse, RSVP } from "@eventflare/lib";
import { useForm } from "react-hook-form";
import {
  EMAIL_FROM,
  EVENT_LOCAL_DATE,
  SITE_TITLE,
  EVENT_LOCATION,
  EVENT_LOCAL_TIME,
} from "../../constants";

/*

This section is a RSVP form.

*/

const RSVPSection: FunctionComponent = () => {
  const { register, handleSubmit, reset } = useForm<RSVP>();
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = handleSubmit(async (data) => {
    setSubmitting(true);

    // Set message if email was recorded in the form and if EMAIL_FROM was configured at build time
    if (EMAIL_FROM && data.email) {
      data.message = {
        from: {
          name: SITE_TITLE,
          email: EMAIL_FROM,
        },
        subject: "Eventflare RSVP Confirmation!",
        body: `${data.fName}, thanks for your RSVP. This email is just confirming that we recieved it.

As a reminder, the event is taking place at ${EVENT_LOCATION.address} on ${EVENT_LOCAL_DATE} at ${EVENT_LOCAL_TIME}. Looking forward to seeing you there!`,
      };
    }

    const res = await fetch("/api/rsvp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
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
          <div>
            <label
              className="block uppercase tracking-wide font-semibold"
              htmlFor="fName"
            >
              First Name
            </label>
            <input
              className="appearance-none text-black block w-full border-none rounded-2xl py-3 px-4 bg-gray-100 leading-tight"
              id="fName"
              type="text"
              {...register("fName")}
              required
            />
          </div>
          <div>
            <label
              className="block uppercase tracking-wide font-semibold"
              htmlFor="lName"
            >
              Last Name
            </label>
            <input
              className="appearance-none text-black block w-full bg-gray-50 border-2 border-orange-300 rounded-xl py-3 px-4 leading-tight focus:bg-white"
              id="lName"
              type="text"
              {...register("lName")}
              required
            />
          </div>
          <div className="bg-gray-200 rounded-xl ring-2 ring-transparent focus-within:ring-blue-500">
            <label
              className="block uppercase tracking-wide font-bold text-gray-500 text-xs mx-3 mt-2"
              htmlFor="number"
            >
              # Attending
            </label>
            <input
              className="appearance-none text-black block w-full bg-transparent border-none pt-2 outline-none focus:ring-transparent"
              id="number"
              type="number"
              min="1"
              {...register("number")}
              required
            />
          </div>
          {EMAIL_FROM && ( //TODO: Recenter attending if hidden
            <div>
              <label
                className="block uppercase tracking-wide font-semibold"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="appearance-none text-black block w-full bg-gray-50 border border-theme-secondary rounded-2xl py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="email"
                type="email"
                {...register("email")}
              />
              <p className="w-full text-gray-500 text-xs italic mt-1">
                (Optional, for calendar invite)
              </p>
            </div>
          )}
        </div>
        <div className="items-center">
          <div className="inline-block md:w-2/3">
            <button
              className="text-white transition duration-200 ease-in-out bg-blue-600 hover:bg-blue-800 shadow drop-shadow-lg font-bold py-2 px-6 rounded-2xl"
              type="submit"
            >
              {submitting ? "Submitting..." : "RSVP"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default RSVPSection;
