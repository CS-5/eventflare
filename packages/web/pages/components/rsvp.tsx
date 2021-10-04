import React, { FunctionComponent } from "react";

export const RSVP: FunctionComponent = () => {
  const [submitting, setSubmitting] = React.useState(false);

  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitting(true);
  };

  return (
    <div className="text-center">
      <form onSubmit={submit} className="w-full max-w-lg inline-block">
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
            />
            <p className="w-full text-gray-500 text-xs italic mt-2">
              (Optional, for calendar invite)
            </p>
          </div>
        </div>
        <div className="items-center">
          <div className="inline-block md:w-2/3">
            <button
              className="text-white transition duration-500 ease-in-out bg-theme-primary hover:bg-theme-secondary shadow drop-shadow-lg font-bold py-2 px-6 rounded-6xl"
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
