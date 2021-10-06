import { ReactNode } from "react";
import Head from "next/head";
import { Location } from "./components/location";
import { Registry } from "./components/registry";
import { RSVP } from "./components/rsvp";
import { Schedule } from "./components/schedule";
import { Section } from "./components/section";

const date = new Date("August 01, 2022 12:00");
const rsvpURL = "https://weddingflare-api-dev.seese.workers.dev/api/rsvp";
const mapsApiKey = process.env.MAPS_API_KEY ?? "";

export default function Index(): ReactNode {
  return (
    <>
      <Head>
        <title>Weddingflare</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="h-auto 2xl:h-screen bg-theme-background bg-cover bg-no-repeat bg-left-top bg-fixed overflow-auto">
        {/* Content Container */}
        <div className="m-auto md:w-3/5 lg:w-48rem pt-20">
          {/* Header */}
          <header className="z-0 fixed h-screen left-2/4 -translate-x-1/2  text-center md:mt-0">
            <h1 className="font-serif font-bold text-6xl text-theme-primary">
              <span className="block md:inline-block">Jack</span>
              <span className="block md:inline-block">&nbsp;&&nbsp;</span>
              <span className="block md:inline-block">Jill</span>
            </h1>
            <h2 className="mt-2 font-theme-secondary font-normal text-2xl md:text-3xl">
              <span className="block md:inline-block">
                {date.toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
              <span className="hidden md:inline-block">&nbsp;-&nbsp;</span>
              <span className="block text-1xl md:inline-block">
                Somewhere, USA
              </span>
            </h2>
          </header>

          {/* Main */}
          <main className="relative bg-theme-white rounded-t-6xl mt-80 md:mt-64 lg:mt-48 md:rounded-6xl md:drop-shadow-2xl font-serif text-lg leading-8 p-6">
            <Section name="RSVP">
              <RSVP rsvpURL={rsvpURL} />
            </Section>
            <Section name="Schedule">
              <Schedule />
            </Section>
            {mapsApiKey && (
              <Section name="Location">
                <Location mapsApiKey={mapsApiKey} />
              </Section>
            )}
            <Section name="Registry">
              <Registry />
            </Section>
          </main>

          {/* Footer */}
          <footer className="bg-theme-white md:bg-opacity-0 md:text-white font-semibold pt-0 pb-5 md:pt-5 text-center">
            <a href="https://github.com/CS-5/weddingflare">
              <span className="block md:inline-block">
                Made with ❤️ by CS-5,&nbsp;
              </span>
              <span className="block md:inline-block">
                powered by Cloudflare ⛅ Workers and Pages.
              </span>
            </a>
          </footer>
        </div>
      </div>
    </>
  );
}
