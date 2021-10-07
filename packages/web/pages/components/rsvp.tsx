import { FunctionComponent, useState } from "react";
import { RSVP } from "@weddingflare/lib";
import { useForm } from "react-hook-form";
import { message } from "../../constants";

export const RSVPSection: FunctionComponent = () => {
  const { register, handleSubmit } = useForm<RSVP>();
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = handleSubmit(async (data) => {
    setSubmitting(true);

    // Set message if email was supplied
    if (data.email) data.message = message;

    await fetch("/api/rsvp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).catch((error) => {
      console.log(error);
    });
    setSubmitting(false);
  });

  return (
    <div className="text-center">
      <form className="w-full max-w-lg inline-block" onSubmit={onSubmit}>
        <div className="flex flex-wrap -mx-3 mb-4">
          <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
            <label
              className="block uppercase tracking-wide text-s font-bold mb-2"
              htmlFor="fName"
            >
              First Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-50 border border-theme-secondary rounded-2xl py-3 px-4 leading-tight focus:outline-none focus:bg-white"
              id="fName"
              type="text"
              {...register("fName")}
              required
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-s font-bold mb-2"
              htmlFor="lName"
            >
              Last Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-50 border border-theme-secondary rounded-2xl py-3 px-4 leading-tight focus:bg-white"
              id="lName"
              type="text"
              {...register("lName")}
              required
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
            <label
              className="block uppercase tracking-wide  text-s font-bold mb-2"
              htmlFor="number"
            >
              # Attending
            </label>
            <input
              className="appearance-none block w-full bg-gray-50 border border-theme-secondary rounded-2xl py-3 px-4"
              id="number"
              type="number"
              min="1"
              {...register("number")}
              required
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-s font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="appearance-none block w-full bg-gray-50 border border-theme-secondary rounded-2xl py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="email"
              type="email"
              {...register("email")}
            />
            <p className="w-full text-gray-500 text-xs italic mt-2">
              (Optional, for calendar invite)
            </p>
          </div>
        </div>
        <div className="items-center">
          <div className="inline-block md:w-2/3">
            <button
              className="text-white transition duration-500 ease-in-out bg-theme-primary hover:bg-theme-accent shadow drop-shadow-lg font-bold py-2 px-6 rounded-6xl"
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
