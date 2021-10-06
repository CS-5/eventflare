import React, { FunctionComponent } from "react";

interface RSVP {
  fName: string;
  lName: string;
  number: number;
  email: string;
}

export const RSVP: FunctionComponent = () => {
  const [submitting, setSubmitting] = React.useState(false);
  const [inputs, setInputs] = React.useState<any>();

  const handleChange = (event: any) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values: any) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    setSubmitting(true);

    const url = process.env.API_URL ?? "";

    if (!url) return alert(inputs);

    console.log(inputs);

    /*
    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(event.target),
    })
      .then((res) => console.log("Submitted successfully"))
      .catch((error) => console.error(error));*/
    setSubmitting(false);
  };

  return (
    <div className="text-center">
      <form onSubmit={handleSubmit} className="w-full max-w-lg inline-block">
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
              name="fName"
              type="text"
              value={inputs.fname || ""}
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
              name="lName"
              type="text"
              value={inputs.lName || ""}
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
              name="number"
              type="number"
              min="1"
              value={inputs.number || ""}
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
              name="email"
              type="email"
              value={inputs.email || ""}
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
