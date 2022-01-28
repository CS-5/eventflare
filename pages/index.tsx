import { ReactNode } from "react";
import Head from "next/head";
import LocationSection from "../components/sections/Location";
import RSVPSection from "../components/sections/RSVP";
import ScheduleSection from "../components/sections/Schedule";
import Section from "../components/Section";
import AboutSection from "../components/sections/About";

import site from "../site.json";

interface Props {
  mapsAPIKey: string;
  emailFrom: string;
}

export async function getStaticProps() {
  return {
    props: {
      mapsAPIKey: process.env.MAPS_API_KEY,
      emailFrom: process.env.EMAIL_FROM,
    },
  };
}

export default function Index({ mapsAPIKey, emailFrom }: Props): ReactNode {
  return (
    <>
      <Head>
        <title>{site.name}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="robots" content="noindex" />
      </Head>

      <div className="overflow-auto">
        {/* Background Image */}
        <div className="fixed h-full w-full -z-1">
          <img
            src="/image/background.jpg"
            alt=""
            className="absolute object-cover h-full w-full top-0 bottom-0 m-auto"
          />
        </div>

        {/* Header */}
        <header className="z-0 fixed left-2/4 -translate-x-1/2 text-center pt-6 md:pt-28 w-full md:w-10/1">
          <h1 className="font-cursive text-6xl md:text-8xl text-theme-primary text-shadow-l">
            <span className="block md:inline-block">{site.name}</span>
          </h1>
          <h2 className="md:mt-8 font-serif text-2xl md:text-3xl text-white">
            <span className="block md:hidden">&mdash;</span>
            <span className="block md:inline-block">
              {new Date(
                `${site.event.date} ${site.event.time}`
              ).toLocaleDateString("en-US", {
                timeZone: site.event.timezone,
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </span>
            <span className="hidden md:inline-block">&nbsp;&mdash;&nbsp;</span>
            <span className="block text-1xl md:inline-block">
              {site.event.location.address}
            </span>
          </h2>
        </header>

        {/* Main */}
        <main className="relative bg-white dark:bg-theme-gray text-black dark:text-white rounded-t-[3rem] mx-auto mt-[20rem] md:mt-[30rem] lg:mt-[30rem] md:rounded-[3rem] md:shadow-2xl text-lg leading-8 p-8 md:w-10/12 lg:w-[48rem]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12 text-theme-primary mx-auto animate-bounce"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 15l7-7 7 7"
            />
          </svg>

          <Section name="RSVP" className="pb-6">
            <RSVPSection emailFrom={emailFrom} site={site} />
          </Section>
          <Section name="About" className="pb-6">
            <AboutSection />
          </Section>
          <Section name="Schedule" className="pb-6">
            <ScheduleSection schedule={site.event.schedule} />
          </Section>
          {mapsAPIKey && (
            <Section name="Location" className="pb-6 drop-shadow-2xl">
              <LocationSection
                mapsApiKey={mapsAPIKey}
                center={{
                  lng: site.event.location.lng,
                  lat: site.event.location.lat,
                }}
              />
            </Section>
          )}
        </main>

        {/* Footer */}
        <footer className="relative z-10 bg-white dark:bg-theme-gray text-theme-gray dark:text-white md:bg-opacity-0 md:text-white pt-0 pb-5 md:pt-5 text-center">
          <span className="block md:inline-block">
            Made with ❤️ by{" "}
            <a
              className="transition duration-300 ease-in-out text-theme-accent hover:text-theme-primary"
              href="https://github.com/CS-5/eventflare"
            >
              CS-5
            </a>
            ,&nbsp;
          </span>
          <span className="block md:inline-block">
            powered by Cloudflare Workers and Pages.
          </span>
          <span className="block">
            Background image by{" "}
            <a
              className="transition duration-300 ease-in-out text-theme-accent hover:text-theme-primary"
              href="https://unsplash.com/@samuelpereira"
              target="_blank"
              rel="noreferrer"
            >
              @samuelpereira
            </a>{" "}
            on Unsplash.
          </span>
        </footer>
      </div>
    </>
  );
}
