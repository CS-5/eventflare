import { ReactNode } from "react";
import Head from "next/head";
import { LocationSection } from "./components/location";
import { RSVPSection } from "./components/rsvp";
import { ScheduleSection } from "./components/schedule";
import { Section } from "./components/section";
import {
  EVENT_LOCAL_DATE,
  MAPS_API_KEY,
  EVENT_LOCATION,
  SITE_TITLE,
} from "../constants";

export default function Index(): ReactNode {
  return (
    <>
      <Head>
        <title>{SITE_TITLE}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="h-auto 2xl:h-screen bg-theme-background bg-cover bg-no-repeat bg-center bg-fixed overflow-auto">
        {/* Content Container */}
        <div className="m-auto md:w-3/5 lg:w-48rem pt-20">
          {/* Header */}
          <header className="z-0 fixed h-screen left-2/4 -translate-x-1/2 text-center md:mt-0">
            <div className="bg-theme-white rounded-6xl glow py-4 px-6 shadow-2xl">
              <h1 className="font-serif font-bold text-6xl text-theme-primary drop-shadow-4xl">
                <span className="block md:inline-block">John</span>
                <span className="block md:inline-block">&nbsp;&&nbsp;</span>
                <span className="block md:inline-block">Jane</span>
              </h1>
              <h2 className="mt-2 font-theme-secondary font-normal text-2xl md:text-3xl text-theme-accent">
                <span className="block md:inline-block">
                  {EVENT_LOCAL_DATE}
                </span>
                <span className="hidden md:inline-block">&nbsp;-&nbsp;</span>
                <span className="block text-1xl md:inline-block">
                  {EVENT_LOCATION.address}
                </span>
              </h2>
            </div>
          </header>

          {/* Main */}
          <main className="relative bg-theme-white rounded-t-6xl mt-96 md:mt-64 lg:mt-48 md:rounded-6xl md:shadow-2xl font-serif text-lg leading-8 p-8">
            <Section name="RSVP">
              <RSVPSection />
            </Section>
            <Section name="Schedule">
              <ScheduleSection />
            </Section>
            {MAPS_API_KEY && (
              <Section name="Location">
                <LocationSection mapsApiKey={MAPS_API_KEY} />
              </Section>
            )}
          </main>

          {/* Footer */}
          <footer className="bg-theme-white text-theme-gray md:bg-opacity-0 md:text-theme-accent md:shadow-2xl font-semibold pt-0 pb-5 md:pt-5 text-center">
            <a href="https://github.com/CS-5/eventflare">
              {/* BIG Footer isn't clickable (seems to work on mobile) */}
              <span className="block md:inline-block">
                Made with ❤️ by CS-5,&nbsp;
              </span>
              <span className="block md:inline-block">
                powered by Cloudflare Workers and Pages.
              </span>
            </a>
          </footer>
        </div>
      </div>
    </>
  );
}
