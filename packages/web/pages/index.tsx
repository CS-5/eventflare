import { ReactNode } from "react";
import { Location } from "./components/location";
import { Registry } from "./components/registry";
import { RSVP } from "./components/rsvp";
import { Schedule } from "./components/schedule";
import { Section } from "./components/section";

export default function Home(): ReactNode {
  return (
    <div className="h-auto 2xl:h-screen bg-theme-background bg-cover bg-no-repeat bg-left-top bg-fixed overflow-auto">
      {/* Content Container */}
      <div className="m-auto md:w-3/5 lg:w-48rem pt-20">
        {/* Header */}
        <header className="z-0 fixed h-screen left-2/4 -translate-x-1/2  text-center md:mt-0">
          <h1 className="font-serif font-bold text-6xl text-theme-primary">
            <span className="block md:inline-block">Carson</span>
            <span className="block md:inline-block">&nbsp;&&nbsp;</span>
            <span className="block md:inline-block">Tatianna</span>
          </h1>
          <h2 className="mt-2 font-serif font-normal md:text-3xl text-theme-secondary">
            <span className="block md:inline-block text-2xl">
              June 12, 2022
            </span>
            <span className="hidden md:inline-block text-2xl">
              &nbsp;·&nbsp;
            </span>
            <span className="block text-1xl md:inline-block md:text-2xl">
              Shippensburg, PA
            </span>
          </h2>
        </header>

        {/* Main */}
        <main className="relative bg-theme-white rounded-t-6xl mt-80 md:mt-64 lg:mt-48 md:rounded-6xl md:drop-shadow-2xl font-serif text-lg leading-8 p-6">
          <Section name="RSVP">
            <RSVP />
          </Section>
          <Section name="Schedule">
            <Schedule />
          </Section>
          <Section name="Location">
            <Location />
          </Section>
          <Section name="Registry">
            <Registry />
          </Section>
        </main>

        {/* Footer */}
        <footer className="bg-theme-white md:bg-opacity-0 md:text-white font-semibold pt-0 pb-5 md:pt-5 text-center">
          <span className="block md:inline-block">
            Made with ❤️ by <a href="https://github.com/cs-5/"></a>Carson,&nbsp;
          </span>
          <span className="block md:inline-block">
            powered by Cloudflare ⛅ Workers and Pages.
          </span>
        </footer>
      </div>
    </div>
  );
}
