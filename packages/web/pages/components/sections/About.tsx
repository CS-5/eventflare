import { FunctionComponent } from "react";

const AboutSection: FunctionComponent = () => {
  return (
    <>
      <p>
        Thanks for checking out this project! If you haven't seen it already,
        you should first check out the{" "}
        <a
          className="text-theme-accent hover:text-theme-primary transition duration-300"
          href="https://github.com/CS-5/eventflare"
          target="_blank"
          rel="noreferrer"
        >
          GitHub repository
        </a>
        , as the readme has some insight into what exactly my goal is with
        Eventflare.
      </p>

      <p className="mt-4">
        As the readme describes, Eventflare is supposed to be a fairly simple
        boilerplate for event registration. Whether that's a wedding, open
        house, LAN party, or tour - hopefully Eventflare has you covered.
      </p>

      <p className="mt-4">
        The highlight piece of functionality is the RSVP section. This is a
        simple form that sends its results to a easy to customize worker to do
        whatever you need with the results. A few possible use cases include:
        <ul className="list-disc ml-5 mt-2 mb-4">
          <li>Notion database entry</li>
          <li>Email (to event admin or a confirmation email... or both)</li>
          <li>Discord Notification (Webhook)</li>
          <li>Slack Notification (Webhook)</li>
          <li>... almost anywhere else you can think of</li>
        </ul>
      </p>

      <p className="mt-4">
        For the sake of this demo, feel free to try filling out the form. I have
        disabled the email functionality to eliminate email spam, but your entry
        will be recorded! To download a CSV of the entries from the last
        24-hours (up to 1000),{" "}
        <a
          className="text-theme-accent hover:text-theme-primary transition duration-300"
          href="/api/rsvp/csv"
          download="RSVP.csv"
        >
          click here
        </a>
        .
      </p>
    </>
  );
};

export default AboutSection;
